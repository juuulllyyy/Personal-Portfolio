import React from "react";

const prism = () => {
  return (
    <div>
      <svg
        width="150"
        height="180"
        viewBox="0 0 150 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Front rectangle */}
        <rect
          x="20"
          y="30"
          width="80"
          height="120"
          stroke="#f8861e"
          strokeWidth="4"
        />
        {/* Back rectangle */}
        <rect
          x="50"
          y="10"
          width="80"
          height="120"
          stroke="#f8861e"
          strokeWidth="4"
        />
        {/* Connecting lines */}
        <line
          x1="20"
          y1="30"
          x2="50"
          y2="10"
          stroke="#f8861e"
          strokeWidth="4"
        />
        <line
          x1="100"
          y1="30"
          x2="130"
          y2="10"
          stroke="#f8861e"
          strokeWidth="4"
        />
        <line
          x1="20"
          y1="150"
          x2="50"
          y2="130"
          stroke="#f8861e"
          strokeWidth="4"
        />
        <line
          x1="100"
          y1="150"
          x2="130"
          y2="130"
          stroke="#f8861e"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
};

export default prism;
