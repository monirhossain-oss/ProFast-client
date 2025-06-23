import React from "react";

const RealisticHelicopter = () => {
  return (
    <div className="flex justify-center items-center p-5">
      <svg
        width="300"
        height="150"
        viewBox="0 0 512 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Example helicopter SVG path */}
        <path
          d="M470 128c0-26.51-21.49-48-48-48H302l-40-40v56H192v32h70v56l40-40h120c26.51 0 48-21.49 48-48z"
          fill="#4A90E2"
          stroke="#000"
          strokeWidth="4"
        />
        <circle cx="156" cy="128" r="32" fill="#A9CCE3" stroke="#000" strokeWidth="3"/>
        <rect x="100" y="116" width="20" height="24" fill="#222" />
        {/* Add more shapes for blades, windows etc */}
      </svg>
    </div>
  );
};

export default RealisticHelicopter;
