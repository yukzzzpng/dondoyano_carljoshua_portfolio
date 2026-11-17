export default function Hero({ visible }) {
  return (
    <section id="home" className={`section hero${visible ? " visible" : ""}`}>
      <div className="hero-layout">
        <div className="hero-content">
          <p className="eyebrow">BSIT Graduate | IT Technical Support</p>
          <h1>
            Hi! I'm <span className="accent">Carl Joshua</span>
            <br />
            I keep computers, networks, and users running.
          </h1>
          <p className="hero-text">
            A Bachelor of Science in Information Technology graduate focused on technical support,
            computer systems servicing, and hands-on troubleshooting. I hold a TESDA Computer
            Systems Servicing NC II and a Cisco NetAcad Networking Basics certificate, and I
            completed on-the-job training in IT Support at Infinus Corporation.
          </p>
          <div className="hero-actions">
            <a href="#certifications" className="btn primary">
              View Certifications
            </a>
            <a href="#contact" className="btn ghost">
              Contact Me
            </a>
          </div>
          <div className="hero-meta">
            <div>
              <span className="label">Focus</span>
              <span className="value">
                Technical Support | Computer Systems Servicing | Networking
              </span>
            </div>
            <div>
              <span className="label">Location</span>
              <span className="value">Valenzuela City, Philippines</span>
            </div>
            <div>
              <span className="label">Education</span>
              <span className="value">BSIT Graduate</span>
            </div>
            <div>
              <span className="label">Certifications</span>
              <span className="value">TESDA CSS NC II · NetAcad Networking Basics</span>
            </div>
          </div>
        </div>

        <aside className="hero-profile" aria-label="Profile photo">
          <div className="hero-profile-inner">
            <img
              className="profile-photo"
              src="/images/formal.jpg"
              alt="Profile photo of Carl Joshua Dondoyano"
            />
            <p className="profile-caption"></p>
          </div>
        </aside>
      </div>
    </section>
  );
}
