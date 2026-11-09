export default function PageHeader({ kicker, title }) {
  return (
    <section className="page-title-wrap container">
      <p className="script-kicker">{kicker}</p>
      <h1 className="page-title">{title}</h1>
      <div className="title-ornament" aria-hidden="true">
        <span>●</span>
      </div>
    </section>
  )
}
