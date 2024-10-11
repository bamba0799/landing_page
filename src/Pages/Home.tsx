import React, { useEffect } from "react";
import HomeCard from "../ components/Card/HomeCard";
import Chart from "react-apexcharts";

const Home: React.FC = () => {

  return (
    <div className="mt-[110px] flex flex-col gap-y-4 pt-7 pb-10 md:grid md:grid-cols-4 md:gap-x-3">
      <HomeCard name="Home" number={1} date="2022-01-01" icon="home" />
      <HomeCard name="Home" number={1} date="2022-01-01" icon="home" />
      <HomeCard name="Home" number={1} date="2022-01-01" icon="home" />
      <HomeCard name="Home" number={1} date="2022-01-01" icon="home" />

    </div>
  );
};

export default Home;
