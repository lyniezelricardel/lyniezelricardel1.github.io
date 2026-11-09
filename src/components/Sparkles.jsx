export default function Sparkles({ positions }) {
  return (
    <>
      {positions.map((position) => (
        <span key={position} className={`sparkle ${position}`} aria-hidden="true">
          ✦
        </span>
      ))}
    </>
  )
}
