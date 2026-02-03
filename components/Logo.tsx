export default function Logo({ className = "", width = 50, height = 50 }: { className?: string, width?: number, height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Órbita 1 (Horizontal) */}
      <ellipse 
        cx="50" 
        cy="50" 
        rx="48" 
        ry="14" 
        stroke="currentColor" 
        strokeWidth="2.5" 
      />

      {/* Órbita 2 (Rodada 60 graus) */}
      <ellipse 
        cx="50" 
        cy="50" 
        rx="48" 
        ry="14" 
        transform="rotate(60 50 50)" 
        stroke="currentColor" 
        strokeWidth="2.5" 
      />

      {/* Órbita 3 (Rodada -60 graus) */}
      <ellipse 
        cx="50" 
        cy="50" 
        rx="48" 
        ry="14" 
        transform="rotate(-60 50 50)" 
        stroke="currentColor" 
        strokeWidth="2.5" 
      />

      {/* Texto RN no centro */}
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="34"
        fill="currentColor"
        style={{ letterSpacing: '-2px' }}
      >
        RN
      </text>
    </svg>
  );
}