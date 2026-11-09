import { Fragment } from 'react'

export default function ProjectCard({ project }) {
  const content = (
    <>
      <div className={`project-thumb ${project.thumbClass}`} aria-hidden="true">
        <span className="thumb-mark">
          {project.mark.map((line, index) => (
            <Fragment key={`${line}-${index}`}>
              {index > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </span>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.subtitle}</p>
      </div>
    </>
  )

  return (
    <article id={project.id} className="project-card">
      {project.href ? (
        <a
          className="project-link"
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </article>
  )
}
