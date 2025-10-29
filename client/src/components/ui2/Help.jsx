import React from "react";

const Help = () => {
  return (
    <ul className="list-disc marker:text-white ml-8 grid grid-rows-3 grid-flow-col">
      <li className="text-[#E7F2EF] text-xl dm-mono-medium">me -list</li>
      <li className="text-[#E7F2EF] text-xl dm-mono-medium">skills -list</li>
      <li className="text-[#E7F2EF] text-xl dm-mono-medium">projects -list</li>
      <li className="text-[#E7F2EF] text-xl dm-mono-medium">contact -list</li>
    </ul>
  );
};

export default Help;
