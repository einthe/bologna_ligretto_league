export default function Background() {
    return (
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "#8B0000",
          overflow: "hidden",
        }}
      >
        <svg
          style={{
            width: "100%",
            height: "100vh",
            display: "block",
          }}
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="curtainGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#5c0000", stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: "#a00000", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#5c0000", stopOpacity: 1 }} />
            </linearGradient>
  
            <linearGradient id="curtainGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#6b0000", stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: "#b00000", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#6b0000", stopOpacity: 1 }} />
            </linearGradient>
  
            <linearGradient id="curtainGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#4c0000", stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: "#8B0000", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#4c0000", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
  
          {/* Vertical curtain panels */}
          <rect x="0" y="0" width="40" height="800" fill="url(#curtainGradient1)" />
          <rect x="40" y="0" width="35" height="800" fill="url(#curtainGradient2)" />
          <rect x="75" y="0" width="30" height="800" fill="url(#curtainGradient3)" />
          <rect x="105" y="0" width="35" height="800" fill="url(#curtainGradient1)" />
          <rect x="140" y="0" width="40" height="800" fill="url(#curtainGradient2)" />
          <rect x="180" y="0" width="35" height="800" fill="url(#curtainGradient3)" />
          <rect x="215" y="0" width="30" height="800" fill="url(#curtainGradient1)" />
          <rect x="245" y="0" width="35" height="800" fill="url(#curtainGradient2)" />
          <rect x="280" y="0" width="40" height="800" fill="url(#curtainGradient3)" />
          <rect x="320" y="0" width="35" height="800" fill="url(#curtainGradient1)" />
          <rect x="355" y="0" width="30" height="800" fill="url(#curtainGradient2)" />
          <rect x="385" y="0" width="35" height="800" fill="url(#curtainGradient3)" />
          <rect x="420" y="0" width="40" height="800" fill="url(#curtainGradient1)" />
          <rect x="460" y="0" width="35" height="800" fill="url(#curtainGradient2)" />
          <rect x="495" y="0" width="30" height="800" fill="url(#curtainGradient3)" />
          <rect x="525" y="0" width="35" height="800" fill="url(#curtainGradient1)" />
          <rect x="560" y="0" width="40" height="800" fill="url(#curtainGradient2)" />
          <rect x="600" y="0" width="35" height="800" fill="url(#curtainGradient3)" />
          <rect x="635" y="0" width="30" height="800" fill="url(#curtainGradient1)" />
          <rect x="665" y="0" width="35" height="800" fill="url(#curtainGradient2)" />
          <rect x="700" y="0" width="40" height="800" fill="url(#curtainGradient3)" />
          <rect x="740" y="0" width="35" height="800" fill="url(#curtainGradient1)" />
          <rect x="775" y="0" width="30" height="800" fill="url(#curtainGradient2)" />
          <rect x="805" y="0" width="35" height="800" fill="url(#curtainGradient3)" />
          <rect x="840" y="0" width="40" height="800" fill="url(#curtainGradient1)" />
          <rect x="880" y="0" width="35" height="800" fill="url(#curtainGradient2)" />
          <rect x="915" y="0" width="30" height="800" fill="url(#curtainGradient3)" />
          <rect x="945" y="0" width="35" height="800" fill="url(#curtainGradient1)" />
          <rect x="980" y="0" width="40" height="800" fill="url(#curtainGradient2)" />
          <rect x="1020" y="0" width="35" height="800" fill="url(#curtainGradient3)" />
          <rect x="1055" y="0" width="30" height="800" fill="url(#curtainGradient1)" />
          <rect x="1085" y="0" width="35" height="800" fill="url(#curtainGradient2)" />
          <rect x="1120" y="0" width="40" height="800" fill="url(#curtainGradient3)" />
          <rect x="1160" y="0" width="40" height="800" fill="url(#curtainGradient1)" />
        </svg>
      </div>
    );
  }
  