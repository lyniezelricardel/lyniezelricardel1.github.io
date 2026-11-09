import { contact } from '../data/contact.js'
import { contactSocials } from '../data/navigation.js'
import SocialLinks from './SocialLinks.jsx'

export default function ContactInfo() {
  return (
    <div className="contact-info-box">
      <h2>Get in Touch</h2>
      <p className="contact-intro">
        I'd love to hear from you! Whether you have a project in mind or just
        want to say hello, feel free to reach out anytime.
      </p>

      <div className="contact-item">
        <div className="contact-icon" aria-hidden="true">
          ✉
        </div>
        <div>
          <strong>Email</strong>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon" aria-hidden="true">
          ●
        </div>
        <div>
          <strong>Phone</strong>
          <span>{contact.phone}</span>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-icon" aria-hidden="true">
          ⌖
        </div>
        <div>
          <strong>Location</strong>
          <span>{contact.location}</span>
        </div>
      </div>

      <p className="follow-title">Follow Me</p>
      <SocialLinks className="social-row" links={contactSocials} />
    </div>
  )
}
