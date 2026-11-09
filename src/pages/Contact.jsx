import ContactForm from '../components/ContactForm.jsx'
import ContactInfo from '../components/ContactInfo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import PageMeta from '../components/PageMeta.jsx'
import Sparkles from '../components/Sparkles.jsx'

export default function Contact() {
  return (
    <>
      <PageMeta
        title="Lyniezel Mae R. Ricardel | Contact"
        description="Contact Lyniezel Mae R. Ricardel by email or follow her on social media."
      />

      <main className="page-stage">
        <Sparkles positions={['s1', 's3']} />
        <PageHeader kicker="Let's Connect ♡" title="Contact Me" />

        <section className="contact-wrap">
          <div className="contact-form-box">
            <ContactForm />
          </div>
          <ContactInfo />
        </section>
      </main>
    </>
  )
}
