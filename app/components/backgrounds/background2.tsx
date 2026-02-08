// Seeded random number generator for consistent positions
function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

const rng = seededRandom(12345);

// Generate consistent positions for lightning bolts
const lightningBolts = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  top: `${rng() * 100}%`,
  left: `${rng() * 100}%`,
  rotation: 180 + (rng() * 30 - 15),
  scale: 0.5 + rng() * 0.5,
  opacity: 0.15 + rng() * 0.25,
}));

// Generate consistent positions for rhombuses/parallelograms
const shapes = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  top: `${rng() * 100}%`,
  left: `${rng() * 80 + 10}%`,
  rotation: rng() * 360,
  scaleX: 0.9 + rng() * 0.8,
  scaleY: 0.7 + rng() * 0.6,
  opacity: 0.08 + rng() * 0.12,
  isRhombus: rng() > 0.5,
}));

export default function App() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
        backgroundColor: '#00b050',
      }}
    >
      {/* Rhombuses and parallelograms */}
      {shapes.map((shape) => (
        <svg
          key={`shape-${shape.id}`}
          style={{
            position: 'absolute',
            top: shape.top,
            left: shape.left,
            transform: `rotate(${shape.rotation}deg) scale(${shape.scaleX}, ${shape.scaleY})`,
            opacity: shape.opacity,
            pointerEvents: 'none',
          }}
          width="120"
          height="80"
          viewBox="0 0 120 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {shape.isRhombus ? (
            // Rhombus (stretched)
            <path
              d="M60 5 L115 40 L60 75 L5 40 Z"
              fill="#1ac55f"
              stroke="#2dd670"
              strokeWidth="1.5"
            />
          ) : (
            // Parallelogram (stretched with slanted angles)
            <path
              d="M30 15 L110 10 L90 70 L10 75 Z"
              fill="#1ac55f"
              stroke="#2dd670"
              strokeWidth="1.5"
            />
          )}
        </svg>
      ))}

      {/* Lightning bolts */}
      {lightningBolts.map((bolt) => (
        <svg
          key={bolt.id}
          style={{
            position: 'absolute',
            top: bolt.top,
            left: bolt.left,
            transform: `rotate(${bolt.rotation}deg) scale(${bolt.scale})`,
            opacity: bolt.opacity,
            pointerEvents: 'none',
          }}
          width="40"
          height="60"
          viewBox="0 0 40 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 2L8 26H18L16 58L32 24H22L20 2Z"
            fill="#70e89d"
            stroke="#8ffab3"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      ))}

      {/* Content area */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Your content goes here */}
      </div>
    </div>
  );
}
