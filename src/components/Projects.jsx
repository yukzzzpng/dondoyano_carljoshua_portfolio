import { projectGallery, projects } from "../data.js";

export default function Projects({ visible, onOpenImage }) {
  let imageIndex = 0;

  return (
    <section id="projects" className={`section projects${visible ? " visible" : ""}`}>
      <div className="section-header">
        <h2>Other Work</h2>
        <p>School and personal projects from my BSIT coursework.</p>
      </div>

      <div className="projects-grid-new">
        {projects.map((project) => (
          <article className="project-card-new" key={project.title}>
            <div className="project-card-header">
              <span className="project-tag-new">{project.tag}</span>
              <h3>{project.title}</h3>
            </div>
            <div className="project-card-body">
              <p className="project-card-description">{project.description}</p>
              <div className="project-card-images">
                {project.images.map((image) => {
                  const index = imageIndex;
                  imageIndex += 1;
                  return (
                    <figure
                      className="project-image-new clickable-image-project"
                      key={image.src}
                      onClick={() => onOpenImage(projectGallery, index)}
                    >
                      <img src={image.src} alt={image.alt} />
                      <div className="image-overlay">
                        <span className="view-icon">🔍</span>
                      </div>
                    </figure>
                  );
                })}
              </div>
              <div className="project-card-tech">
                {project.tech.map((tech) => (
                  <div className="tech-logo" title={tech.name} key={tech.name}>
                    {tech.icon ? (
                      <i className={tech.icon}></i>
                    ) : (
                      <img src={tech.img} alt={tech.name} />
                    )}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
