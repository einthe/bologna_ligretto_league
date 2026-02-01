export default function App() {
    // Generate card positions in a circular pattern
    const cards = Array.from({ length: 40 }).map((_, i) => {
      const angle = (i / 40) * Math.PI * 2;
      const radius = 250 + (i % 3) * 100;
      const x = 500 + Math.cos(angle) * radius;
      const y = 500 + Math.sin(angle) * radius;
      const rotation = (angle * 180) / Math.PI + 90;
  
      return {
        x,
        y,
        rotation,
        scale: 0.7 + (i % 3) * 0.15,
      };
    });
  
    return (
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* SVG for circular perspective grid made of cards */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Radial gradient from center */}
            <radialGradient id="bgGradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#00cc5e" />
              <stop offset="100%" stopColor="#008a3d" />
            </radialGradient>
          </defs>
  
          {/* Background */}
          <rect width="1000" height="1000" fill="url(#bgGradient)" />
  
          {/* Circular grid lines made of card shapes */}
          <g opacity="0.3">
            {/* Concentric circles of cards */}
            {[
              50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650,
            ].map((radius, ringIndex) => (
              <g key={`ring-${ringIndex}`}>
                {Array.from({
                  length: Math.max(8, Math.floor(radius / 15)),
                }).map((_, i) => {
                  const count = Math.max(8, Math.floor(radius / 15));
                  const angle = (i / count) * Math.PI * 2;
                  const x = 500 + Math.cos(angle) * radius;
                  const y = 500 + Math.sin(angle) * radius;
                  const rotation = (angle * 180) / Math.PI + 90;
  
                  return (
                    <rect
                      key={`card-${ringIndex}-${i}`}
                      x={x - 20}
                      y={y - 28}
                      width="40"
                      height="56"
                      fill="#004d26"
                      rx="3"
                      opacity={0.6 - ringIndex * 0.04}
                      transform={`rotate(${rotation} ${x} ${y})`}
                    />
                  );
                })}
              </g>
            ))}
  
            {/* Radial lines made of cards */}
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i / 24) * Math.PI * 2;
  
              return (
                <g key={`radial-${i}`}>
                  {[50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600].map(
                    (distance, j) => {
                      const x = 500 + Math.cos(angle) * distance;
                      const y = 500 + Math.sin(angle) * distance;
                      const rotation = (angle * 180) / Math.PI + 90;
  
                      return (
                        <rect
                          key={`radial-card-${i}-${j}`}
                          x={x - 20}
                          y={y - 28}
                          width="40"
                          height="56"
                          fill="#005030"
                          rx="3"
                          opacity={0.5 - j * 0.04}
                          transform={`rotate(${rotation} ${x} ${y})`}
                        />
                      );
                    }
                  )}
                </g>
              );
            })}
          </g>
  
          {/* Larger decorative cards scattered */}
          {cards.slice(0, 15).map((card, i) => (
            <rect
              key={`decorative-${i}`}
              x={card.x - 30}
              y={card.y - 42}
              width="60"
              height="84"
              fill={i % 3 === 0 ? "#006633" : i % 3 === 1 ? "#004d26" : "#005030"}
              rx="4"
              opacity={0.15}
              transform={`rotate(${card.rotation} ${card.x} ${card.y}) scale(${card.scale})`}
            />
          ))}
        </svg>
  
        {/* Content area */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>{/* Content can be added here */}</div>
        </div>
      </div>
    );
  }
  