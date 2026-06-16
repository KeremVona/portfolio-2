import Header from "../../Header";
import we1 from "./we1.json";
import Information from "../../project/Information";
import Information2 from "../../project1/Information2";

const Xp1 = () => {
  return (
    <div className="mt-4">
      <Header title={"Software Engineering Internship"} />
      <div className="max-w-4xl xl:max-w-3xl lg:max-w-2xl mt-4 ml-4">
        <p className="text-[#E7F2EF] text-3xl dm-mono-medium">
          # Software Engineering Internship
        </p>
        <p className="text-[#E7F2EF] text-xl dm-mono-medium">
          [OBSS]
          <a
            href="https://github.com/KeremVona/StajLog"
            target="_blank"
            className="hover:text-white transition duration-100 text-[#D2C1B6] text-xl dm-mono-medium"
          >
            (https://github.com/KeremVona/StajLog)
          </a>
        </p>
        <Information title={we1[0].title} description={we1[0].description} />
        <Information title={we1[1].title} description={we1[1].description} />
        <Information title={we1[2].title} description={we1[2].description} />
        <Information title={we1[3].title} description={we1[3].description} />
        <Information title={we1[4].title} description={we1[4].description} />
        <Information2 />
      </div>
    </div>
  );
};

export default Xp1;
