import PageHeader from '../components/PageHeader.jsx'
import PageMeta from '../components/PageMeta.jsx'
import SkillCard from '../components/SkillCard.jsx'
import Sparkles from '../components/Sparkles.jsx'
import { skills } from '../data/skills.js'

export default function Skills() {
  return (
    <>
      <PageMeta
        title="Lyniezel Mae R. Ricardel | Skills"
        description="Explore Lyniezel's skills in design, HTML and CSS, digital content, Canva, and creative thinking."
      />

      <main className="page-stage">
        <Sparkles positions={['s1', 's3']} />
        <PageHeader kicker="My Expertise ♡" title="My Skills" />

        <section className="skills-wrap">
          <div className="skills-grid">
            {skills.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
