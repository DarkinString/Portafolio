import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';

const VERT = /* glsl */ `
    attribute vec2 position;
    attribute vec2 uv;
    varying vec2 vUv;
    void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
    }
`;

const FRAG = /* glsl */ `
    precision highp float;
    uniform float uTime;
    uniform vec2 uResolution;
    uniform vec2 uRayOrigin;
    uniform vec3 uRayColor;
    uniform float uRaysSpeed;
    uniform float uLightSpread;
    uniform float uRayLength;
    uniform float uFadeDistance;
    uniform float uMouseInfluence;
    uniform vec2 uMouse;
    varying vec2 vUv;

  // Ruido suave para efecto volumétrico
    float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
    }

    float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
        mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
        f.y
    );
    }

    float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 3; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
    }

    void main() {
    // Coordenadas normalizadas y centradas
    vec2 st = gl_FragCoord.xy / uResolution.xy;
    
    // Origen centrado con ajuste fino por ratón
    vec2 origin = uRayOrigin;
    origin.x += (uMouse.x - 0.5) * uMouseInfluence;

    // Vector desde el foco
    vec2 dir = st - origin;
    float dist = length(dir);
    float angle = atan(dir.y, dir.x);

    // Generar haces suaves de luz
    float rayNoise = fbm(vec2(angle * 6.0 * uLightSpread, uTime * uRaysSpeed * 0.3));
    float rays = pow(rayNoise, uRayLength * 1.5);

    // Difuminado concéntrico y gradual (Glow volumétrico)
    float cone = smoothstep(1.2, 0.1, abs(st.x - origin.x) * 2.2);
    float fade = smoothstep(uFadeDistance, 0.0, dist);
    
    // Combinar densidad de luz
    float intensity = rays * fade * cone;

    // Gradiente dorado
    vec3 color = uRayColor * intensity * 1.4;

    gl_FragColor = vec4(color, intensity * 0.85);
    }
`;

export const LightRays = ({
    raysOrigin = "top-center",
    raysColor = "#dbc251",     
    raysSpeed = 0.8,
    lightSpread = 1.2,
    rayLength = 1.2,
    fadeDistance = 1.4,
    followMouse = true,
    mouseInfluence = 0.08,
    className = ""
}) => {
    const containerRef = useRef(null);
    const mouseRef = useRef({ x: 0.5, y: 0.5 });

    useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true, dpr: Math.min(window.devicePixelRatio, 2) });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);

    const getOrigin = () => {
        switch (raysOrigin) {
        case "bottom-center": return [0.5, 0.0];
        case "top-center":
        default: return [0.5, 1.0]; 
        }
    };

    const program = new Program(gl, {
        vertex: VERT,
        fragment: FRAG,
        uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [container.clientWidth, container.clientHeight] },
        uRayOrigin: { value: getOrigin() },
        uRayColor: { value: new Color(raysColor) },
        uRaysSpeed: { value: raysSpeed },
        uLightSpread: { value: lightSpread },
        uRayLength: { value: rayLength },
        uFadeDistance: { value: fadeDistance },
        uMouseInfluence: { value: mouseInfluence },
        uMouse: { value: [0.5, 0.5] }
        },
        transparent: true,
        depthTest: false
    });

    const mesh = new Mesh(gl, { geometry, program });

    const handleResize = () => {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        program.uniforms.uResolution.value = [width, height];
    };

    const handleMouseMove = (e) => {
        if (!followMouse) return;
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = 1.0 - (e.clientY - rect.top) / rect.height;
        mouseRef.current = { x, y };
    };

    window.addEventListener('resize', handleResize);
    if (followMouse) window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    let animationId;
    const update = (t) => {
        program.uniforms.uTime.value = t * 0.001;
        program.uniforms.uMouse.value = [mouseRef.current.x, mouseRef.current.y];
        renderer.render({ scene: mesh });
        animationId = requestAnimationFrame(update);
    };

    animationId = requestAnimationFrame(update);

    return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener('resize', handleResize);
        if (followMouse) window.removeEventListener('mousemove', handleMouseMove);
        if (gl.canvas.parentNode) {
        gl.canvas.parentNode.removeChild(gl.canvas);
        }
    };
    }, [raysOrigin, raysColor, raysSpeed, lightSpread, rayLength, fadeDistance, followMouse, mouseInfluence]);

    return (
    <div 
        ref={containerRef} 
        className={`w-full h-full absolute inset-0 pointer-events-none ${className}`} 
    />
    );
};

export default LightRays;