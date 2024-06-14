import React from 'react';

const Heading = ({ title }: { title: string }) => {
  return (
    <div className="px-2 py-[10px] bg-blue rounded-xs text-white font-semibold">
      <p>{title}</p>
    </div>
  );
};

export default Heading;
