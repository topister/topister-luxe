export default function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'lg' }) {
  const fontSize = size === 'lg' ? '1.3rem' : '0.9rem'
  return (
    <span>
      {[1, 2, 3, 4, 5].map(n => (
        <i key={n}
          className={n <= rating ? 'bi bi-star-fill star-filled' : 'bi bi-star star-empty'}
          style={{ fontSize }} />
      ))}
    </span>
  )
}
