const Xp1 = () => {
  return (
    <div className="mt-4">
      <Header title={"Software Engineering Internship"} />
      <div className="max-w-4xl xl:max-w-3xl lg:max-w-2xl mt-4 ml-4">
        <p className="text-[#E7F2EF] text-3xl dm-mono-medium">
          # Software Engineering Internship
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

export default Xp1;
