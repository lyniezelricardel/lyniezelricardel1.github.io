export default function SkillCard({ icon, title, description, percent }) {
  return (
    <article className="skill-card">
      <div className="skill-icon" aria-hidden="true">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="skill-percent">{percent}%</div>
      <div
        className="progress"
        role="progressbar"
        aria-label={`${title} proficiency`}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={percent}
      >
        <span style={{ width: `${percent}%` }} />
      </div>
    </article>
  )
}
