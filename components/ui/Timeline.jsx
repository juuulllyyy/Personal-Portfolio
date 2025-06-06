import React from "react";

const Timeline = () => {
  return (
    <div className="flex flex-col justify-between items-end w-full h-40 relative bg-black border-y-4 border-[#f8861e]">
      {/* Timeline SVG */}
      <svg
        viewBox="0 0 600 120"
        width="320"
        height="120"
        className="w-full h-40 md:h-56"
        style={{ background: "transparent" }}
      >
        {/* Branch Timelines */}
        <path
          d="M0,70 Q190,10 350,65 T700,110"
          stroke="#ff6508"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M0,70 Q175,30 350,110 T700,90"
          stroke="#e03627"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M0,70 Q175,110 350,40 T700,0"
          stroke="#ff6508"
          strokeWidth="3"
          fill="none"
        />
        {/* Main white timeline */}
        <path
          d="M0,70 Q175,40 350,60 T700,50"
          stroke="#fff"
          strokeWidth="4"
          fill="none"
          filter="url(#glow)"
        />
        {/* Horizontal reference lines */}
        <line
          x1="0"
          y1="30"
          x2="700"
          y2="30"
          stroke="#f8861e"
          strokeDasharray="8 4"
          strokeWidth="3"
        />
        <line
          x1="0"
          y1="90"
          x2="700"
          y2="90"
          stroke="#f8861e"
          strokeDasharray="8 4"
          strokeWidth="3"
        />
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Timeline;
