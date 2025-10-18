import React from "react";

const Header = ({ text }) => {
  return (
    <div className="flex mb-4">
      <p className="text-[#91b8d5] text-xl dm-mono-medium">KeremVona@Vona50</p>
      <p className="text-[#E7F2EF] text-xl dm-mono-medium ml-2">
        ~ <span className="text-[#D2C1B6]">$</span>
      </p>
      <p className="text-[#E7F2EF] text-xl dm-mono-medium ml-2">{text} -list</p>
    </div>
  );
};

export default Header;
