import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl mb-4">
      <ul className="list-disc marker:text-white ml-8">
        <li className="text-[#E7F2EF] text-xl dm-mono-medium">
          Email:
          <a className="hover:text-white transition duration-100 ml-2 text-[#D2C1B6] text-xl dm-mono-medium">
            keremvona@gmail.com
          </a>
        </li>
        <li className="text-[#E7F2EF] text-xl dm-mono-medium">
          <a
            href="https://www.linkedin.com/in/kerem-can-bas/"
            target="_blank"
            className="hover:text-white transition duration-100 text-[#D2C1B6] text-xl dm-mono-medium"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
