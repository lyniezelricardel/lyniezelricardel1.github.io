import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import PageMeta from '../components/PageMeta.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Sparkles from '../components/Sparkles.jsx'
import { projects } from '../data/projects.js'

const filters = [
  'All',
  'Web Design',
  'Digital Content',
  'Creative Design',
  'School Projects',
  'UI Design',
  'Others',
]

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All')
  const location = useLocation()

  // Dropdown links such as /work#web-design should show the full grid first,
  // otherwise the requested card could be hidden by an active filter.
  useEffect(() => {
    if (!location.hash) {
      setActiveFilter('All')
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return undefined
    }

    setActiveFilter('All')
    const targetId = decodeURIComponent(location.hash.slice(1))

    const timer = window.setTimeout(() => {
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 80)

    return () => window.clearTimeout(timer)
  }, [location.key, location.hash])

  const visibleProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <>
      <PageMeta
        title="Lyniezel Mae R. Ricardel | My Work"
        description="View Lyniezel's web design, digital content, creative design, UI design, and school projects."
      />

      <main className="page-stage">
        <Sparkles positions={['s2', 's4']} />
        <PageHeader kicker="My Projects ♡" title="My Work" />

        <section className="work-wrap">
          <div className="filter-row" role="group" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`filter-pill${activeFilter === filter ? ' active' : ''}`}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="work-cta">
            <a
              className="btn btn-primary"
              href="https://www.github.com/lyniezelricardel"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More Projects <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
