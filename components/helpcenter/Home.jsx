import React from "react";
import Searchbar from "./home/Searchbar";
import Generaltopics from "./home/Generaltopics";

const Home = () => {
  return (
    <div className="p-4">
      <Searchbar />
      <div className="">
        <Generaltopics />
      </div>
    </div>
  );
};

export default Home;
