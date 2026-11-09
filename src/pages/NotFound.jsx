import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import PageMeta from '../components/PageMeta.jsx'
import Sparkles from '../components/Sparkles.jsx'

export default function NotFound() {
  return (
    <>
      <PageMeta
        title="Page Not Found | Lyniezel Mae R. Ricardel"
        description="The requested page could not be found."
      />

      <main className="page-stage">
        <Sparkles positions={['s1', 's3']} />
        <PageHeader kicker="Oops ♡" title="Page Not Found" />

        <section className="not-found container">
          <p>The page you are looking for does not exist or has moved.</p>
          <Link className="btn btn-primary" to="/">
            Back to Home <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>
    </>
  )
}
