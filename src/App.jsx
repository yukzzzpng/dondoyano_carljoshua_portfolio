import { useCallback, useLayoutEffect, useState } from "react";
import About from "./components/About.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Lightbox from "./components/Lightbox.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

const sectionIds = [
  "home",
  "about",
  "skills",
  "certifications",
  "experience",
  "projects",
  "contact",
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [visible, setVisible] = useState({ home: true });
  const [lightbox, setLightbox] = useState(null);

  useLayoutEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 50);

      const trigger = window.innerHeight * 0.8;
      const nextVisible = {};
      let currentId = "home";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top < trigger) nextVisible[id] = true;
        if (rect.top <= window.innerHeight * 0.35 && rect.bottom > window.innerHeight * 0.25) {
          currentId = id;
        }
      });

      setVisible(nextVisible);
      setActiveId(currentId);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const openImage = useCallback((images, index) => {
    setLightbox({ images, index });
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const changeImage = useCallback((step) => {
    setLightbox((current) => {
      if (!current) return current;
      const count = current.images.length;
      const index = (current.index + step + count) % count;
      return { ...current, index };
    });
  }, []);

  return (
    <>
      <div className="animated-bg">
        <div className="particle-layer"></div>
        <div className="scan-line"></div>
        <div className="scan-line scan-line-2"></div>
        <div className="tech-grid"></div>
        <div className="glitch-overlay"></div>
        <div className="energy-wave wave-1"></div>
        <div className="energy-wave wave-2"></div>
        <div className="energy-wave wave-3"></div>
        <div className="corner-accent corner-1"></div>
        <div className="corner-accent corner-2"></div>
        <div className="corner-accent corner-3"></div>
        <div className="corner-accent corner-4"></div>
      </div>

      <Header scrolled={scrolled} activeId={activeId} />

      <main>
        <Hero visible={visible.home} />
        <About visible={visible.about} />
        <Skills visible={visible.skills} />
        <Certifications visible={visible.certifications} />
        <Experience visible={visible.experience} onOpenImage={openImage} />
        <Projects visible={visible.projects} onOpenImage={openImage} />
        <Contact visible={visible.contact} />
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Carl Joshua Dondoyano · Portfolio</p>
      </footer>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={closeLightbox}
          onChange={changeImage}
        />
      )}
    </>
  );
}
