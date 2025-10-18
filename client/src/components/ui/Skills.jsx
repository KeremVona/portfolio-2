import React from "react";

const Skills = () => {
  return (
    <div className="max-w-4xl mb-4">
      <ul className="list-disc marker:text-white ml-8 grid grid-rows-3 grid-flow-col">
        <li className="text-[#E7F2EF] text-xl dm-mono-medium">
          <a
            href="github.com/KeremVona"
            className="hover:text-white transition duration-100"
          >
            HTML
          </a>
        </li>
        <li className="text-[#E7F2EF] text-xl dm-mono-medium">CSS</li>
        <li className="text-[#E7F2EF] text-xl dm-mono-medium">JavaScript</li>
        <li className="text-[#E7F2EF] text-xl dm-mono-medium">React</li>
        <li className="text-[#E7F2EF] text-xl dm-mono-medium">Express</li>
        <li className="text-[#E7F2EF] text-xl dm-mono-medium">Tailwind</li>
        <li className="text-[#E7F2EF] text-xl dm-mono-medium">PostgreSQL</li>
        <li className="text-[#E7F2EF] text-xl dm-mono-medium">
          API integration
        </li>
        <li className="text-[#E7F2EF] text-xl dm-mono-medium">Yapping</li>
      </ul>
    </div>
  );
};

export default Skills;
