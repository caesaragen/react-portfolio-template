import React from "react";

// Original illustrative UI — not a reproduction of any real bank's app —
// used to signal "secure mobile banking" in the hero.
const PhoneMockup = () => {
  return (
    <div className="relative mx-auto w-[220px] mob:w-[240px] laptop:w-[280px] animate-float select-none" aria-hidden="true">
      <svg
        viewBox="0 0 280 580"
        className="w-full h-auto drop-shadow-[0_30px_60px_rgba(61,139,255,0.18)]"
      >
        <defs>
          <linearGradient id="screenBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#171923" />
            <stop offset="100%" stopColor="#0d0e14" />
          </linearGradient>
          <linearGradient id="balanceCard" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3d8bff" />
            <stop offset="100%" stopColor="#7c9cff" />
          </linearGradient>
        </defs>

        {/* Frame */}
        <rect x="4" y="4" width="272" height="572" rx="44" fill="#05060a" stroke="rgba(255,255,255,0.14)" strokeWidth="2" />
        {/* Screen */}
        <rect x="16" y="16" width="248" height="548" rx="34" fill="url(#screenBg)" />
        {/* Notch */}
        <rect x="112" y="26" width="56" height="16" rx="8" fill="#05060a" />

        {/* Status/greeting */}
        <text x="34" y="76" fill="#9aa1ae" fontSize="11" fontFamily="Sora, sans-serif">
          Welcome back
        </text>
        <text x="34" y="98" fill="#f4f5f7" fontSize="16" fontFamily="Sora, sans-serif" fontWeight="700">
          Hi, Joel
        </text>

        {/* Face ID ring */}
        <g transform="translate(230,60)">
          <circle r="20" fill="rgba(61,139,255,0.14)" />
          <circle r="20" fill="none" stroke="#3d8bff" strokeWidth="2" strokeDasharray="6 5" />
          <path d="M-6,-3 v-4 a6,6 0 0 1 12,0 v4" fill="none" stroke="#3d8bff" strokeWidth="1.6" strokeLinecap="round" />
          <rect x="-6" y="-3" width="12" height="9" rx="2.5" fill="#3d8bff" />
        </g>

        {/* Balance card */}
        <rect x="24" y="126" width="232" height="112" rx="20" fill="url(#balanceCard)" />
        <text x="44" y="162" fill="rgba(255,255,255,0.85)" fontSize="11" fontFamily="Sora, sans-serif">
          Available balance
        </text>
        <text x="44" y="190" fill="#ffffff" fontSize="24" fontFamily="Sora, sans-serif" fontWeight="800">
          KES 84,230
        </text>
        <g transform="translate(44,206)">
          <rect width="34" height="10" rx="5" fill="rgba(255,255,255,0.35)" />
        </g>
        <g transform="translate(212,150)">
          <circle r="12" fill="rgba(255,255,255,0.25)" />
        </g>

        {/* Section label */}
        <text x="24" y="272" fill="#f4f5f7" fontSize="13" fontFamily="Sora, sans-serif" fontWeight="600">
          Recent activity
        </text>

        {/* Transaction rows */}
        {[
          { y: 292, label: "Salary deposit", amount: "+ 62,000", positive: true },
          { y: 344, label: "KPLC — electricity", amount: "− 3,120", positive: false },
          { y: 396, label: "M-PESA transfer", amount: "− 1,500", positive: false },
        ].map((row) => (
          <g key={row.y} transform={`translate(24, ${row.y})`}>
            <rect width="232" height="40" rx="14" fill="rgba(255,255,255,0.04)" />
            <circle cx="22" cy="20" r="10" fill="rgba(61,139,255,0.18)" />
            <text x="44" y="24" fill="#e7e9ee" fontSize="12" fontFamily="Sora, sans-serif">
              {row.label}
            </text>
            <text
              x="210"
              y="24"
              fill={row.positive ? "#5fd4a0" : "#e7e9ee"}
              fontSize="12"
              fontFamily="Sora, sans-serif"
              textAnchor="end"
              fontWeight="600"
            >
              {row.amount}
            </text>
          </g>
        ))}

        {/* Home indicator */}
        <rect x="118" y="552" width="44" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
      </svg>
    </div>
  );
};

export default PhoneMockup;
