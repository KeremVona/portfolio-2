import Header from "../components/Header";
import project1 from "../data/project1.json";
import Information from "../components/project/Information";
import Information2 from "../components/project1/Information2";

const Project1 = () => {
  return (
    <div className="mt-4">
      <Header title={"StajLog - Internship helper"} />
      <div className="max-w-4xl xl:max-w-3xl lg:max-w-2xl mt-4 ml-4">
        <p className="text-[#E7F2EF] text-3xl dm-mono-medium">
          # StajLog - Internship helper
        </p>
        <p className="text-[#E7F2EF] text-xl dm-mono-medium">
          [GitHub]
          <a
            href="https://github.com/KeremVona/StajLog"
            target="_blank"
            className="hover:text-white transition duration-100 text-[#D2C1B6] text-xl dm-mono-medium"
          >
            (https://github.com/KeremVona/StajLog)
          </a>
        </p>
        <Information
          title={project1[0].title}
          description={project1[0].description}
        />
        <Information
          title={project1[1].title}
          description={project1[1].description}
        />
        <Information
          title={project1[2].title}
          description={project1[2].description}
        />
        <Information
          title={project1[3].title}
          description={project1[3].description}
        />
        <Information
          title={project1[4].title}
          description={project1[4].description}
        />
        <Information2 />
      </div>
    </div>
  );
};

export default Project1;
