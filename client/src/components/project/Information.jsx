import React from "react";

const Information = ({ title, description }) => {
  return (
    <div className="mt-2">
      <p className="text-[#E7F2EF] text-2xl dm-mono-medium mb-2">{title}</p>
      <p className="text-[#E7F2EF] text-xl dm-mono-medium">{description}</p>
    </div>
  );
};

export default Information;
