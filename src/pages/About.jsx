import PageHeader from '../components/PageHeader.jsx'
import PageMeta from '../components/PageMeta.jsx'
import Sparkles from '../components/Sparkles.jsx'
import WorkspaceIllustration from '../components/WorkspaceIllustration.jsx'

export default function About() {
  return (
    <>
      <PageMeta
        title="Lyniezel Mae R. Ricardel | About"
        description="Learn more about Lyniezel Mae R. Ricardel, a multimedia designer and Computer Science student from the Philippines."
      />

      <main className="page-stage">
        <Sparkles positions={['s2', 's4']} />
        <PageHeader kicker="Get to know me ♡" title="About Me" />

        <section className="about-layout">
          <WorkspaceIllustration />

          <div className="about-copy">
            <h2>Who I Am</h2>
            <p>
              I'm <strong>Lyniezel Mae R. Ricardel</strong>, a college student
              with a growing passion for creativity, design, technology, and
              digital media. I enjoy exploring different ways to present ideas
              through websites, graphics, presentations, and multimedia
              projects.
            </p>
            <p>
              I believe good design should be attractive, clear, and meaningful.
              My goal is to continue improving my technical and creative skills
              while creating digital experiences that are useful and engaging.
            </p>

            <div className="info-panel">
              <div className="info-line">
                <span className="info-icon" aria-hidden="true">●</span>
                <span className="info-label">Name:</span>
                <span className="info-value">Lyniezel Mae R. Ricardel</span>
              </div>
              <div className="info-line">
                <span className="info-icon" aria-hidden="true">▣</span>
                <span className="info-label">Profession:</span>
                <span className="info-value">Multimedia Designer</span>
              </div>
              <div className="info-line">
                <span className="info-icon" aria-hidden="true">✉</span>
                <span className="info-label">Email:</span>
                <span className="info-value">ricardellyniezelmae@gmail.com</span>
              </div>
              <div className="info-line">
                <span className="info-icon" aria-hidden="true">●</span>
                <span className="info-label">Location:</span>
                <span className="info-value">Philippines</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
