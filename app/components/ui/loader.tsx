import React from 'react';

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-bordofondo">
      <div className="relative w-12 h-12 rotate-45">
        <div className="absolute inset-0 rounded-full border-t-[11.2px] border-r-[11.2px] border-b-[11.2px] border-transparent border-t-[#ff4747] border-opacity-75 animate-pulse"></div>
        <div className="absolute inset-0 rounded-full border-t-[11.2px] border-r-[11.2px] border-b-[11.2px] border-transparent border-t-[#ff4747] border-opacity-75 animate-[pulse_1s_infinite]" style={{ transform: 'perspective(336px) translateZ(0)' }}></div>
      </div>
    </div>
  );
}
