import Header from "../components/Header";
import Information from "../components/project/Information";
import project2 from "../data/project2.json";
import Information2 from "../components/project2/Information2";

const Project2 = () => {
  return (
    <div className="mt-4">
      <Header title={"BugList - Bug tracker website"} />
      <div className="max-w-4xl xl:max-w-3xl mt-4 ml-4">
        <p className="text-[#E7F2EF] text-3xl dm-mono-medium">
          # BugList - Bug tracker website
        </p>
        <p className="text-[#E7F2EF] text-xl dm-mono-medium">
          [GitHub]
          <a
            href="https://github.com/KeremVona/BugList"
            target="_blank"
            className="hover:text-white transition duration-100 text-[#D2C1B6] text-xl dm-mono-medium"
          >
            (https://github.com/KeremVona/BugList)
          </a>
        </p>
        <Information
          title={project2[0].title}
          description={project2[0].description}
        />
        <Information2 />
      </div>
    </div>
  );
};

export default Project2;
