import { Link, useNavigate } from "react-router";
import { useEffect } from "react";

const Header = ({ title }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const callback = (KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.code === "KeyX") {
        navigate("/");
      }
    };
    document.addEventListener("keydown", callback);
    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, []);
  return (
    <div className="bg-white flex p-2 items-center justify-between">
      <p className="flex justify-start w-1/3">
        <span className="text-xl dm-mono-medium">Vona nano 52</span>
      </p>
      <p className="flex justify-center w-1/3">
        <span className="text-xl dm-mono-medium">{title}</span>
      </p>
      <div className="flex justify-end w-1/3">
        <Link to="/" className="text-xl dm-mono-medium">
          Back (Ctrl + X)
        </Link>
      </div>
    </div>
  );
};

export default Header;
