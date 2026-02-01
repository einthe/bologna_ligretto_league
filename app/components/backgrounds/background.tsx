export default function Background() {
    // Ligretto card colors - more dispersed placement
    const cards = [
      {
        color: "bg-red-500",
        number: "1",
        rotation: -12,
        x: "8%",
        y: "12%",
      },
      {
        color: "bg-blue-500",
        number: "3",
        rotation: 8,
        x: "78%",
        y: "8%",
      },
      {
        color: "bg-yellow-400",
        number: "5",
        rotation: -5,
        x: "15%",
        y: "75%",
      },
      {
        color: "bg-green-500",
        number: "7",
        rotation: 15,
        x: "85%",
        y: "68%",
      },
      {
        color: "bg-red-500",
        number: "2",
        rotation: -20,
        x: "42%",
        y: "25%",
      },
      {
        color: "bg-blue-500",
        number: "10",
        rotation: 6,
        x: "62%",
        y: "55%",
      },
      {
        color: "bg-yellow-400",
        number: "4",
        rotation: -8,
        x: "25%",
        y: "45%",
      },
      {
        color: "bg-green-500",
        number: "8",
        rotation: 18,
        x: "88%",
        y: "35%",
      },
      {
        color: "bg-red-500",
        number: "6",
        rotation: -15,
        x: "5%",
        y: "58%",
      },
      {
        color: "bg-blue-500",
        number: "9",
        rotation: 12,
        x: "50%",
        y: "82%",
      },
      {
        color: "bg-yellow-400",
        number: "1",
        rotation: 3,
        x: "35%",
        y: "8%",
      },
      {
        color: "bg-green-500",
        number: "3",
        rotation: -18,
        x: "68%",
        y: "88%",
      },
    ];
  
    return (
      <div className="size-full relative overflow-hidden bg-[#00B050]">
        {/* Ligretto grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Floating Ligretto cards */}
        {cards.map((card, index) => (
          <div
            key={index}
            className={`absolute w-24 h-32 ${card.color} rounded-lg shadow-lg opacity-15`}
            style={{
              left: card.x,
              top: card.y,
              transform: `rotate(${card.rotation}deg)`,
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold">
              {card.number}
            </div>
          </div>
        ))}
  
        {/* Centered content area for future use */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <div className="text-center">
            {/* Content can be added here */}
          </div>
        </div>
      </div>
    );
  }