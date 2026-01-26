import { Link } from "react-router";

const CV = () => {
  return (
    <div>
      <ul className="list-disc marker:text-white ml-8">
        <li className="text-[#D2C1B6] text-xl dm-mono-medium">
          <a
            href="https://github.com/KeremVona"
            target="_blank"
            className="hover:text-white transition duration-100"
          >
            GitHub
          </a>
        </li>
        <li className="text-[#D2C1B6] text-xl dm-mono-medium">
          <Link to="/portfolio-2/cv">CV</Link>
        </li>
      </ul>
    </div>
  );
};

export default CV;
