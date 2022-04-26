import React from 'react';

export default function Loader({ width = 16, height = 16, color = 'orange-900' }) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className={`animate-spin rounded-full h-${height} w-${width} border-b-2 border-${color}`}
      ></div>
    </div>
  );
}