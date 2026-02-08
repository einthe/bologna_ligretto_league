export default function Background() {
    const cards = [
      { color: "#ef4444", number: "1", rotation: -12, x: "8%", y: "12%" },
      { color: "#3b82f6", number: "3", rotation: 8, x: "78%", y: "8%" },
      { color: "#facc15", number: "5", rotation: -5, x: "15%", y: "75%" },
      { color: "#22c55e", number: "7", rotation: 15, x: "85%", y: "68%" },
      { color: "#ef4444", number: "2", rotation: -20, x: "42%", y: "25%" },
      { color: "#3b82f6", number: "10", rotation: 6, x: "62%", y: "55%" },
      { color: "#facc15", number: "4", rotation: -8, x: "25%", y: "45%" },
      { color: "#22c55e", number: "8", rotation: 18, x: "88%", y: "35%" },
      { color: "#ef4444", number: "6", rotation: 10, x: "55%", y: "15%" },
    ];
  
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          overflow: "hidden",
          background: "#00B050",
          zIndex: -1, // sits behind your page content
        }}
      >
        {/* Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.1,
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
  
        {/* Cards */}
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              width: 96,
              height: 128,
              left: card.x,
              top: card.y,
              transform: `rotate(${card.rotation}deg)`,
              background: card.color,
              borderRadius: 12,
              boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
              opacity: 0.15,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 48,
              fontWeight: 800,
              userSelect: "none",
            }}
          >
            {card.number}
          </div>
        ))}
      </div>
    );
  }
  