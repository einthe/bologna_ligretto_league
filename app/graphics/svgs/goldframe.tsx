interface GoldFrameProps {
  width?: number;
  height?: number;
  children?: React.ReactNode;
}

export function GoldFrame({ width = 600, height = 800, children }: GoldFrameProps) {
  const frameWidth = 80;
  const innerWidth = width - frameWidth * 2;
  const innerHeight = height - frameWidth * 2;

  // Calculate symmetric dot positioning
  const dotSpacing = 40;
  const dotsCountHorizontal = Math.floor((width - 120) / dotSpacing);
  const dotsCountVertical = Math.floor((height - 120) / dotSpacing);
  const horizontalStartOffset = (width - (dotsCountHorizontal - 1) * dotSpacing) / 2;
  const verticalStartOffset = (height - (dotsCountVertical - 1) * dotSpacing) / 2;

  return (
    <div className="relative inline-block" style={{ width, height }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <defs>
          {/* Gold gradient */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="25%" stopColor="#FFA500" />
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="75%" stopColor="#B8860B" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>

          {/* Dark gold for shadows */}
          <linearGradient id="darkGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B8860B" />
            <stop offset="50%" stopColor="#8B6914" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>

          {/* Light gold for highlights */}
          <linearGradient id="lightGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFED4E" />
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFED4E" />
          </linearGradient>

          {/* Ornamental pattern */}
          <path
            id="ornament"
            d="M 0,0 Q 5,-10 10,0 Q 5,10 0,0 M 0,0 Q -5,-10 -10,0 Q -5,10 0,0"
            fill="url(#darkGoldGradient)"
          />

          {/* Corner flourish */}
          <path
            id="cornerFlourish"
            d="M 0,0 Q 20,-20 40,-10 Q 20,-5 20,15 Q 15,0 0,0 M 0,0 Q -10,10 -5,25 Q 5,20 10,30 Q 5,15 0,0"
            fill="url(#goldGradient)"
            stroke="url(#darkGoldGradient)"
            strokeWidth="1"
          />
        </defs>

        {/* Outer shadow */}
        <rect
          x="5"
          y="5"
          width={width - 10}
          height={height - 10}
          fill="none"
          stroke="rgba(0,0,0,0.3)"
          strokeWidth="10"
          rx="15"
        />

        {/* Main frame outer border */}
        <rect
          x="10"
          y="10"
          width={width - 20}
          height={height - 20}
          fill="url(#goldGradient)"
          stroke="url(#darkGoldGradient)"
          strokeWidth="3"
          rx="12"
        />

        {/* Ornate middle layer */}
        <rect
          x="25"
          y="25"
          width={width - 50}
          height={height - 50}
          fill="none"
          stroke="url(#darkGoldGradient)"
          strokeWidth="8"
          rx="8"
        />

        {/* Decorative inner beading */}
        <rect
          x="35"
          y="35"
          width={width - 70}
          height={height - 70}
          fill="none"
          stroke="url(#lightGoldGradient)"
          strokeWidth="4"
          rx="6"
        />

        {/* Inner frame border */}
        <rect
          x="45"
          y="45"
          width={width - 90}
          height={height - 90}
          fill="none"
          stroke="url(#darkGoldGradient)"
          strokeWidth="6"
          rx="4"
        />

        {/* Embossed pattern on frame - top */}
        {Array.from({ length: dotsCountHorizontal }).map((_, i) => (
          <circle
            key={`top-${i}`}
            cx={horizontalStartOffset + i * dotSpacing}
            cy={30}
            r="6"
            fill="url(#lightGoldGradient)"
            stroke="url(#darkGoldGradient)"
            strokeWidth="1"
          />
        ))}

        {/* Embossed pattern on frame - bottom */}
        {Array.from({ length: dotsCountHorizontal }).map((_, i) => (
          <circle
            key={`bottom-${i}`}
            cx={horizontalStartOffset + i * dotSpacing}
            cy={height - 30}
            r="6"
            fill="url(#lightGoldGradient)"
            stroke="url(#darkGoldGradient)"
            strokeWidth="1"
          />
        ))}

        {/* Embossed pattern on frame - left */}
        {Array.from({ length: dotsCountVertical }).map((_, i) => (
          <circle
            key={`left-${i}`}
            cx={30}
            cy={verticalStartOffset + i * dotSpacing}
            r="6"
            fill="url(#lightGoldGradient)"
            stroke="url(#darkGoldGradient)"
            strokeWidth="1"
          />
        ))}

        {/* Embossed pattern on frame - right */}
        {Array.from({ length: dotsCountVertical }).map((_, i) => (
          <circle
            key={`right-${i}`}
            cx={width - 30}
            cy={verticalStartOffset + i * dotSpacing}
            r="6"
            fill="url(#lightGoldGradient)"
            stroke="url(#darkGoldGradient)"
            strokeWidth="1"
          />
        ))}

        {/* Corner ornaments - Top Left */}
        <circle cx="30" cy="30" r="12" fill="url(#goldGradient)" stroke="url(#darkGoldGradient)" strokeWidth="2" />
        <circle cx="30" cy="30" r="5" fill="url(#lightGoldGradient)" />

        {/* Corner ornaments - Top Right */}
        <circle cx={width - 30} cy="30" r="12" fill="url(#goldGradient)" stroke="url(#darkGoldGradient)" strokeWidth="2" />
        <circle cx={width - 30} cy="30" r="5" fill="url(#lightGoldGradient)" />

        {/* Corner ornaments - Bottom Left */}
        <circle cx="30" cy={height - 30} r="12" fill="url(#goldGradient)" stroke="url(#darkGoldGradient)" strokeWidth="2" />
        <circle cx="30" cy={height - 30} r="5" fill="url(#lightGoldGradient)" />

        {/* Corner ornaments - Bottom Right */}
        <circle cx={width - 30} cy={height - 30} r="12" fill="url(#goldGradient)" stroke="url(#darkGoldGradient)" strokeWidth="2" />
        <circle cx={width - 30} cy={height - 30} r="5" fill="url(#lightGoldGradient)" />

        {/* Additional ornate details - top center */}
        <g transform={`translate(${width / 2}, 25)`}>
          <ellipse cx="0" cy="0" rx="25" ry="15" fill="url(#goldGradient)" stroke="url(#darkGoldGradient)" strokeWidth="2" />
          <path d="M -15,-5 Q 0,-15 15,-5" fill="none" stroke="url(#darkGoldGradient)" strokeWidth="2" />
          <circle cx="0" cy="0" r="4" fill="url(#lightGoldGradient)" />
        </g>

        {/* Additional ornate details - bottom center */}
        <g transform={`translate(${width / 2}, ${height - 25})`}>
          <ellipse cx="0" cy="0" rx="25" ry="15" fill="url(#goldGradient)" stroke="url(#darkGoldGradient)" strokeWidth="2" />
          <path d="M -15,5 Q 0,15 15,5" fill="none" stroke="url(#darkGoldGradient)" strokeWidth="2" />
          <circle cx="0" cy="0" r="4" fill="url(#lightGoldGradient)" />
        </g>

        {/* Additional ornate details - left center */}
        <g transform={`translate(25, ${height / 2})`}>
          <ellipse cx="0" cy="0" rx="15" ry="25" fill="url(#goldGradient)" stroke="url(#darkGoldGradient)" strokeWidth="2" />
          <path d="M -5,-15 Q -15,0 -5,15" fill="none" stroke="url(#darkGoldGradient)" strokeWidth="2" />
          <circle cx="0" cy="0" r="4" fill="url(#lightGoldGradient)" />
        </g>

        {/* Additional ornate details - right center */}
        <g transform={`translate(${width - 25}, ${height / 2})`}>
          <ellipse cx="0" cy="0" rx="15" ry="25" fill="url(#goldGradient)" stroke="url(#darkGoldGradient)" strokeWidth="2" />
          <path d="M 5,-15 Q 15,0 5,15" fill="none" stroke="url(#darkGoldGradient)" strokeWidth="2" />
          <circle cx="0" cy="0" r="4" fill="url(#lightGoldGradient)" />
        </g>

        {/* Inner content area background */}
        <rect
          x={frameWidth}
          y={frameWidth}
          width={innerWidth}
          height={innerHeight}
          fill="#2c1810"
          opacity="0.9"
        />
      </svg>

      {/* Content area */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          left: frameWidth,
          top: frameWidth,
          width: innerWidth,
          height: innerHeight,
        }}
      >
        {children}
      </div>
    </div>
  );
}