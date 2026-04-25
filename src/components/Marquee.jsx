export default function Marquee({ items, reverse = false, speed = 25 }) {
  const content = (
    <>
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="marquee-item">{item}</span>
          <span className="marquee-dot" />
        </span>
      ))}
    </>
  )

  return (
    <div className="marquee-strip">
      <div
        className="marquee-content"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {content}
        {content}
      </div>
    </div>
  )
}
