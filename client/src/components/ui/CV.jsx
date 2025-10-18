import { Link } from "react-router";

const CV = () => {
  return (
    <div>
      <ul className="list-disc marker:text-white ml-8">
        <li className="text-[#D2C1B6] text-xl dm-mono-medium">
          <a
            href="github.com/KeremVona"
            className="hover:text-white transition duration-100"
          >
            GitHub
          </a>
        </li>
        <li className="text-[#D2C1B6] text-xl dm-mono-medium">
          <Link to="/cv">CV</Link>
        </li>
      </ul>
    </div>
  );
};

export default CV;
