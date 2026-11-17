import { education } from "../data.js";

export default function About({ visible }) {
  return (
    <section id="about" className={`section about${visible ? " visible" : ""}`}>
      <div className="section-header">
        <h2>About Me</h2>
        <p>A technical support specialist who services computers and helps users stay productive.</p>
      </div>
      <div className="about-grid">
        <div className="about-card">
          <h3>Who I Am</h3>
          <p>
            I’m Carl Joshua Dondoyano, a BSIT graduate focused on IT technical support. I service
            and troubleshoot computers, set up hardware and peripherals, and keep systems ready
            for daily use. I am a TESDA Computer Systems Servicing NC II holder and a Cisco
            Networking Academy Networking Basics certificate holder.
          </p>
          <p>
            During on-the-job training at Infinus Corporation, I handled PC inspection,
            preventive maintenance, Ethernet cabling, and network switch cleaning, and I assisted
            with server maintenance. I want to grow as a technical support specialist who can
            diagnose problems clearly and get people back to work.
          </p>
        </div>
        <div className="about-card">
          <h3>What I Do</h3>
          <ul className="list">
            <li>Diagnose and repair desktop hardware and software issues</li>
            <li>Assemble, disassemble, and maintain computer systems</li>
            <li>Install operating systems and set up user workstations</li>
            <li>Perform preventive maintenance on PCs and peripherals</li>
            <li>Build and test Ethernet cables and manage network cabling</li>
            <li>Support switches, basic connectivity, and server upkeep</li>
            <li>Guide end users through everyday technical problems</li>
          </ul>
        </div>
      </div>

      <div className="section-header" style={{ marginTop: "3rem" }}>
        <h2>My Education</h2>
        <p>My academic journey from elementary through college.</p>
      </div>
      <div className="education-timeline">
        {education.map((item) => (
          <article className="timeline-item" key={`${item.school}-${item.years}`}>
            <div className="timeline-content">
              <div className="timeline-logo">
                <img src={item.logo} alt={item.alt} />
              </div>
              <div className="timeline-info">
                <h3>{item.school}</h3>
                <p className="timeline-years">{item.years}</p>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
