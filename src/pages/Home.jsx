import { Link } from 'react-router-dom'
import profilePhoto from '../assets/profile.jpg'
import PageMeta from '../components/PageMeta.jsx'
import Sparkles from '../components/Sparkles.jsx'

export default function Home() {
  return (
    <>
      <PageMeta
        title="Lyniezel Mae R. Ricardel | Home"
        description="Lyniezel Mae R. Ricardel is a third-year Computer Science student creating web design, digital content, and visual communication projects."
      />

      <main className="page-stage home-stage">
        <Sparkles positions={['s1', 's2', 's3', 's4']} />

        <section className="home-shell">
          <div className="hero-copy">
            <p className="hello-script">Hello, I'm ♡</p>
            <h1 className="hero-name">
              Lyniezel Mae <span className="accent-line">R. Ricardel</span>
            </h1>
            <p className="hero-role">Content Creator & College Student</p>
            <p className="hero-description">
              I am a third-year Computer Science student with a strong
              willingness to learn and grow in creating and designing digital
              experiences. I am passionate about developing my skills in web
              design, digital content creation, and visual communication.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/work">
                View My Work <span aria-hidden="true">→</span>
              </Link>
              <Link className="btn btn-secondary" to="/contact">
                Contact Me <span aria-hidden="true">♡</span>
              </Link>
            </div>
          </div>

          <div className="portrait-wrap">
            <div className="portrait-halo">
              <img
                className="profile-photo"
                src={profilePhoto}
                alt="Profile photo of Lyniezel Mae R. Ricardel"
              />
            </div>
          </div>

          <div className="home-scroll" aria-hidden="true">
            <div className="mouse-icon" />↓
          </div>
        </section>
      </main>
    </>
  )
}
