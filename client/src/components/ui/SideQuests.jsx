import { Link } from "react-router";

const SideQuests = () => {
  return (
    <div className="max-w-4xl mb-4">
      <ul className="list-disc marker:text-white ml-8 grid grid-rows-3 grid-flow-col">
        <li className="text-[#D2C1B6] text-xl dm-mono-medium">
          <Link
            to="https://github.com/KeremVona/open_repo"
            target="_blank"
            className="hover:text-white transition duration-100"
          >
            GitHub repo opener from terminal
          </Link>
        </li>
        <li className="text-[#D2C1B6] text-xl dm-mono-medium">
          <Link
            to="https://github.com/KeremVona/UpDownChecker"
            target="_blank"
            className="hover:text-white transition duration-100"
          >
            Down checker for websites
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideQuests;
