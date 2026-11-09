export default function SocialLinks({ links, className }) {
  return (
    <div className={className}>
      {links.map(({ label, icon, href }) => {
        const isExternal = href.startsWith('http')

        return (
          <a
            key={label}
            href={href}
            aria-label={label}
            {...(isExternal
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {icon}
          </a>
        )
      })}
    </div>
  )
}
