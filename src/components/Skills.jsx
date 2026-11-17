import { skillGroups } from "../data.js";

function SkillBadge({ item }) {
  return (
    <div className="skill-badge" title={item.title || item.name}>
      {item.icon ? <i className={item.icon}></i> : <img src={item.img} alt={item.name} />}
      <span>{item.name}</span>
    </div>
  );
}

export default function Skills({ visible }) {
  return (
    <section id="skills" className={`section skills${visible ? " visible" : ""}`}>
      <div className="section-header">
        <h2>Skills</h2>
        <p>Technical support first, plus basic front-end and UI/UX skills.</p>
      </div>
      <div className="skills-wrapper">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3 className="skill-group-title">{group.title}</h3>
            <div className="skill-list">
              {group.tags
                ? group.tags.map((tag) => (
                    <div className="skill-tag" key={tag}>
                      {tag}
                    </div>
                  ))
                : group.items.map((item) => <SkillBadge key={item.name} item={item} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
