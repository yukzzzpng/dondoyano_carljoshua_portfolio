import { useEffect, useState } from "react";
import { certifications } from "../data.js";

const extensions = ["pdf", "png", "jpg", "jpeg", "webp"];

function isCertificateType(type) {
  return type.startsWith("image/") || type.includes("pdf");
}

async function findFile(baseName) {
  for (const extension of extensions) {
    const url = `/certificates/${baseName}.${extension}`;
    try {
      let response = await fetch(url, { method: "HEAD" });
      if (response.status === 405 || response.status === 501) {
        response = await fetch(url);
      }
      const type = response.headers.get("content-type") || "";
      if (response.ok && isCertificateType(type)) {
        return { url, isPdf: extension === "pdf" || type.includes("pdf") };
      }
    } catch {
      // Try the next filename.
    }
  }
  return null;
}

function CertificateCard({ certificate }) {
  const [file, setFile] = useState(undefined);

  useEffect(() => {
    let active = true;
    findFile(certificate.baseName).then((found) => {
      if (active) setFile(found);
    });
    return () => {
      active = false;
    };
  }, [certificate.baseName]);

  return (
    <article className="cert-card">
      <span className="cert-kind">{certificate.kind}</span>
      <h3>{certificate.title}</h3>
      <p className="cert-issuer">{certificate.issuer}</p>
      <p className="cert-summary">{certificate.summary}</p>

      {file === undefined ? (
        <div className="cert-preview cert-preview-empty">Checking for your certificate file…</div>
      ) : file ? (
        <div className="cert-preview">
          {file.isPdf ? (
            <iframe title={certificate.title} src={file.url}></iframe>
          ) : (
            <img src={file.url} alt={`${certificate.title} certificate`} />
          )}
        </div>
      ) : (
        <div className="cert-preview cert-preview-empty">
          <i className="fas fa-certificate" aria-hidden="true"></i>
          <p>
            Place your file in <code>public/certificates</code> as{" "}
            <code>{certificate.baseName}.pdf</code>, <code>.png</code>, or <code>.jpg</code>.
          </p>
        </div>
      )}

      {file && (
        <a className="btn-download cert-open" href={file.url} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-up-right-from-square"></i>
          <span>Open certificate</span>
        </a>
      )}
    </article>
  );
}

export default function Certifications({ visible }) {
  return (
    <section id="certifications" className={`section certifications${visible ? " visible" : ""}`}>
      <div className="section-header">
        <h2>Certifications</h2>
        <p>National and Cisco Networking Academy credentials for technical support.</p>
      </div>
      <div className="cert-grid">
        {certifications.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </section>
  );
}
