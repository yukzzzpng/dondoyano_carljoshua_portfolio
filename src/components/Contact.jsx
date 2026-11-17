export default function Contact({ visible }) {
  return (
    <section id="contact" className={`section contact${visible ? " visible" : ""}`}>
      <div className="contact-header">
        <h2 className="contact-title">Get in Touch</h2>
      </div>
      <div className="contact-layout">
        <div className="contact-sidebar">
          <div className="contact-info-card">
            <h3>Contact Information</h3>
            <p className="info-text">
              Reach me by email, or connect through the links below.
            </p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <i className="fas fa-envelope"></i>
                <span>cariedondoyano@gmail.com</span>
              </div>
              <div className="contact-detail-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Valenzuela City, Philippines</span>
              </div>
            </div>
            <div className="social-links-contact">
              <a
                href="https://www.instagram.com/chev3e/"
                className="social-link-contact"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/carl.dondoyano"
                className="social-link-contact"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/carl-joshua-dondoyano-4161a63a4/"
                className="social-link-contact"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="cv-download-card">
            <h3>Download Resume</h3>
            <p className="info-text">
              Get a copy of my resume to learn more about my experience and skills.
            </p>
            <a href="/resume.pdf" download="resume.pdf" className="btn-download">
              <i className="fas fa-download"></i>
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
