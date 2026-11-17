import { experienceGallery, experiencePhotos } from "../data.js";

function PhotoGrid({ photos, startIndex, onOpenImage }) {
  return (
    <div className="exp-media">
      {photos.map((photo, offset) => (
        <figure
          className="exp-photo clickable-image"
          key={photo.src}
          onClick={() => onOpenImage(experienceGallery, startIndex + offset)}
        >
          <img src={photo.src} alt={photo.alt} />
        </figure>
      ))}
    </div>
  );
}

export default function Experience({ visible, onOpenImage }) {
  return (
    <section id="experience" className={`section experience${visible ? " visible" : ""}`}>
      <div className="section-header">
        <h2>My Experience</h2>
        <p>My on-the-job training and professional experience.</p>
      </div>
      <div className="experience-grid">
        <article className="exp-card">
          <h3 className="exp-company">Infinus Corporation</h3>
          <p className="exp-role">OJT / IT Intern</p>
          <p className="exp-meta">July 2025 - December 2025</p>
          <p className="exp-description">
            Completed on-the-job training at Infinus Corporation as IT support. I inspected and
            troubleshot computers, performed preventive maintenance, built Ethernet cables and I/O
            connections, cleaned network switches, and assisted with server maintenance. I also
            supported the logistics team by preparing transmittals, barcodes, and box labels.
          </p>

          <div className="exp-subsection">
            <h4 className="exp-subtitle">IT Support and Networking</h4>
            <PhotoGrid photos={experiencePhotos.it} startIndex={0} onOpenImage={onOpenImage} />
            <p className="exp-caption">Server Maintainance and Computer Troubleshooting</p>
          </div>

          <div className="exp-subsection">
            <h4 className="exp-subtitle">Logistics Department</h4>
            <PhotoGrid
              photos={experiencePhotos.logistics}
              startIndex={experiencePhotos.it.length}
              onOpenImage={onOpenImage}
            />
            <p className="exp-caption">Making labels, barcodes, and transmittals</p>
          </div>
        </article>
      </div>
    </section>
  );
}
