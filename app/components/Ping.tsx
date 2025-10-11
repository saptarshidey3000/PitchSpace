import React from 'react';

const Ping = () => {
  return (
    <div className="relative flex items-center justify-center w-4 h-4">
      {/* Outer ping animation */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"></span>

      {/* Inner solid dot */}
      <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-primary"></span>
    </div>
  );
};

export default Ping;
