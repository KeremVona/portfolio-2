import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <div className="max-w-4xl mb-4">
      <ul className="list-disc marker:text-white ml-8 grid grid-rows-3 grid-flow-col">
        <li className="text-[#D2C1B6] text-xl dm-mono-medium">
          <Link
            to="/portfolio-2/experience/1"
            className="hover:text-white transition duration-100"
          >
            Software Engineering Internship at OBSS
          </Link>
        </li>
        <li className="text-[#D2C1B6] text-xl dm-mono-medium">
          <Link
            to="/portfolio-2/experience/2"
            className="hover:text-white transition duration-100"
          >
            Software Engineering Internship at InfinitumIT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
