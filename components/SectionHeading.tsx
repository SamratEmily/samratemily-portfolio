import React from 'react';

const SectionHeading: React.FC<{ title: string }> = ({ title }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
  </div>
);

export default SectionHeading;
