interface GoldFrameProps {
  width?: number;
  height?: number;
  fill_color?: string;
  children?: React.ReactNode;
}

export function GoldFrame({ width = 600, height = 800, fill_color = "#2c1810", children }: GoldFrameProps) {
  // These are the dimensions your “magic numbers” were implicitly designed for
  const BASE_W = 600;
  const BASE_H = 800;

  // Single scale factor so proportions stay consistent
  const s = Math.min(width / BASE_W, height / BASE_H);

  const frameWidth = 80 * s;
  const innerWidth = width - frameWidth * 2;
  const innerHeight = height - frameWidth * 2;

  const dotSpacing = 40 * s;
  const dotMargin = 120 * s;

  const dotsCountHorizontal = Math.max(2, Math.floor((width - dotMargin) / dotSpacing));
  const dotsCountVertical = Math.max(2, Math.floor((height - dotMargin) / dotSpacing));

  const horizontalStartOffset = (width - (dotsCountHorizontal - 1) * dotSpacing) / 2;
  const verticalStartOffset = (height - (dotsCountVertical - 1) * dotSpacing) / 2;

  // Helpers for scaling the rest of the geometry
  const px = (n: number) => n * s;

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        width,
        height,
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0 }}
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="25%" stopColor="#FFA500" />
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="75%" stopColor="#B8860B" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>

          <linearGradient id="darkGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B8860B" />
            <stop offset="50%" stopColor="#8B6914" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>

          <linearGradient id="lightGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFED4E" />
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFED4E" />
          </linearGradient>
        </defs>

        {/* Outer shadow */}
        <rect
          x={px(5)}
          y={px(5)}
          width={width - px(10)}
          height={height - px(10)}
          fill="none"
          stroke="rgba(0,0,0,0.3)"
          strokeWidth={px(10)}
          rx={px(15)}
        />

        {/* Main frame outer border */}
        <rect
          x={px(10)}
          y={px(10)}
          width={width - px(20)}
          height={height - px(20)}
          fill="url(#goldGradient)"
          stroke="url(#darkGoldGradient)"
          strokeWidth={px(3)}
          rx={px(12)}
        />

        {/* Ornate middle layer */}
        <rect
          x={px(25)}
          y={px(25)}
          width={width - px(50)}
          height={height - px(50)}
          fill="none"
          stroke="url(#darkGoldGradient)"
          strokeWidth={px(8)}
          rx={px(8)}
        />

        {/* Decorative inner beading */}
        <rect
          x={px(35)}
          y={px(35)}
          width={width - px(70)}
          height={height - px(70)}
          fill="none"
          stroke="url(#lightGoldGradient)"
          strokeWidth={px(4)}
          rx={px(6)}
        />

        {/* Inner frame border */}
        <rect
          x={px(45)}
          y={px(45)}
          width={width - px(90)}
          height={height - px(90)}
          fill="none"
          stroke="url(#darkGoldGradient)"
          strokeWidth={px(6)}
          rx={px(4)}
        />

        {/* Dots (scaled) */}
        {Array.from({ length: dotsCountHorizontal }).map((_, i) => (
          <circle
            key={`top-${i}`}
            cx={horizontalStartOffset + i * dotSpacing}
            cy={px(30)}
            r={px(6)}
            fill="url(#lightGoldGradient)"
            stroke="url(#darkGoldGradient)"
            strokeWidth={px(1)}
          />
        ))}
        {Array.from({ length: dotsCountHorizontal }).map((_, i) => (
          <circle
            key={`bottom-${i}`}
            cx={horizontalStartOffset + i * dotSpacing}
            cy={height - px(30)}
            r={px(6)}
            fill="url(#lightGoldGradient)"
            stroke="url(#darkGoldGradient)"
            strokeWidth={px(1)}
          />
        ))}
        {Array.from({ length: dotsCountVertical }).map((_, i) => (
          <circle
            key={`left-${i}`}
            cx={px(30)}
            cy={verticalStartOffset + i * dotSpacing}
            r={px(6)}
            fill="url(#lightGoldGradient)"
            stroke="url(#darkGoldGradient)"
            strokeWidth={px(1)}
          />
        ))}
        {Array.from({ length: dotsCountVertical }).map((_, i) => (
          <circle
            key={`right-${i}`}
            cx={width - px(30)}
            cy={verticalStartOffset + i * dotSpacing}
            r={px(6)}
            fill="url(#lightGoldGradient)"
            stroke="url(#darkGoldGradient)"
            strokeWidth={px(1)}
          />
        ))}

        {/* Corner ornaments (scaled) */}
        {[
          { cx: px(30), cy: px(30) },
          { cx: width - px(30), cy: px(30) },
          { cx: px(30), cy: height - px(30) },
          { cx: width - px(30), cy: height - px(30) },
        ].map((p, idx) => (
          <g key={idx}>
            <circle
              cx={p.cx}
              cy={p.cy}
              r={px(12)}
              fill="url(#goldGradient)"
              stroke="url(#darkGoldGradient)"
              strokeWidth={px(2)}
            />
            <circle cx={p.cx} cy={p.cy} r={px(5)} fill="url(#lightGoldGradient)" />
          </g>
        ))}

        {/* Additional ornate details (scaled positions/sizes) */}
        <g transform={`translate(${width / 2}, ${px(25)})`}>
          <ellipse cx="0" cy="0" rx={px(25)} ry={px(15)} fill="url(#goldGradient)" stroke="url(#darkGoldGradient)" strokeWidth={px(2)} />
          <path d={`M ${-px(15)},${-px(5)} Q 0,${-px(15)} ${px(15)},${-px(5)}`} fill="none" stroke="url(#darkGoldGradient)" strokeWidth={px(2)} />
          <circle cx="0" cy="0" r={px(4)} fill="url(#lightGoldGradient)" />
        </g>

        <g transform={`translate(${width / 2}, ${height - px(25)})`}>
          <ellipse cx="0" cy="0" rx={px(25)} ry={px(15)} fill="url(#goldGradient)" stroke="url(#darkGoldGradient)" strokeWidth={px(2)} />
          <path d={`M ${-px(15)},${px(5)} Q 0,${px(15)} ${px(15)},${px(5)}`} fill="none" stroke="url(#darkGoldGradient)" strokeWidth={px(2)} />
          <circle cx="0" cy="0" r={px(4)} fill="url(#lightGoldGradient)" />
        </g>

        <g transform={`translate(${px(25)}, ${height / 2})`}>
          <ellipse cx="0" cy="0" rx={px(15)} ry={px(25)} fill="url(#goldGradient)" stroke="url(#darkGoldGradient)" strokeWidth={px(2)} />
          <path d={`M ${-px(5)},${-px(15)} Q ${-px(15)},0 ${-px(5)},${px(15)}`} fill="none" stroke="url(#darkGoldGradient)" strokeWidth={px(2)} />
          <circle cx="0" cy="0" r={px(4)} fill="url(#lightGoldGradient)" />
        </g>

        <g transform={`translate(${width - px(25)}, ${height / 2})`}>
          <ellipse cx="0" cy="0" rx={px(15)} ry={px(25)} fill="url(#goldGradient)" stroke="url(#darkGoldGradient)" strokeWidth={px(2)} />
          <path d={`M ${px(5)},${-px(15)} Q ${px(15)},0 ${px(5)},${px(15)}`} fill="none" stroke="url(#darkGoldGradient)" strokeWidth={px(2)} />
          <circle cx="0" cy="0" r={px(4)} fill="url(#lightGoldGradient)" />
        </g>

        {/* Inner content area background */}
        <rect x={frameWidth} y={frameWidth} width={innerWidth} height={innerHeight} fill={fill_color} opacity="0.9" />
      </svg>

      <div
        style={{
          position: "absolute",
          left: frameWidth,
          top: frameWidth,
          width: innerWidth,
          height: innerHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}
