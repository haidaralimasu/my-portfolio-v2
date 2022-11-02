import React, { useState, useEffect } from "react";

// import data
import { projectsData } from "./Data";

// import components
import WorkItems from "./WorkItems";

const Projects = () => {
  return (
    <div>
      {/* projects */}
      <div className="work__container container grid">
        {projectsData.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
