import Navbar from "./components/layout/navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Experience from "./sections/Experience.jsx";
import Projects from "./sections/Projects.jsx";
import Certifications from "./sections/certifications.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/layout/footer.jsx";

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white m-0 p-0 overflow-x-hidden">
      <Navbar />
      
      <main className="w-full">
        <section id="home" className="w-full">
          <Hero />
        </section>
        
        <section id="about" className="w-full">
          <About />
        </section>
        
        <section id="skills" className="w-full">
          <Skills />
        </section>
        
        <section id="experience" className="w-full">
          <Experience />
        </section>
        
        <section id="projects" className="w-full">
          <Projects />
        </section>
        
        <section id="certifications" className="w-full">
          <Certifications />
        </section>
        
        <section id="contact" className="w-full">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;