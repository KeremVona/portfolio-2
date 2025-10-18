import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="max-w-4xl mb-4">
      <ul className="list-disc marker:text-white ml-8 grid grid-rows-3 grid-flow-col">
        <li className="text-[#D2C1B6] text-xl dm-mono-medium">
          <Link
            to="/projects/stajlog"
            className="hover:text-white transition duration-100"
          >
            StajLog - Internship helper
          </Link>
        </li>
        <li className="text-[#D2C1B6] text-xl dm-mono-medium">
          <Link
            to="/projects/buglist"
            className="hover:text-white transition duration-100"
          >
            BugList - Bug tracking website
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
