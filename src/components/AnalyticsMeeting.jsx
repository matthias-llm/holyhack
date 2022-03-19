import { useState } from "react";

const Analytics = () => {
  const [clicked, setSwipe] = useState(false);
  const onSwipe = () => {
    setSwipe(!clicked);
  };

  return (
    <div className="flex flex-row divide-x-2 divide-black min-h-screen">
      <div className="w-1/2">
        <div className="w-full flex flex-col items-center">
          <p className="font-bold flex items-center">Past month</p>
        </div>
        <div className="w-full items-start">
          <p className="font-bold text-2xl">Previous meetings</p>
          <div className="flex flex-col pl-5 py-3">
            <li>
              <button onClick={onSwipe}>19/03/2022: Recruitment</button>
            </li>
            <li>15/03/2022: Monthly meeting R&D</li>
            <li>10/03/2022: Weekly meeting project</li>
          </div>
        </div>
        <div className="pt-20 flex justify-end">
          <img src={require("../meeting/activity.png")} alt="Lopo" />
        </div>
        <div className="w-full flex flex-col items-center">
          <img
            className="w-96 h-48"
            src={require("../meeting/montly.png")}
            alt="Logo"
          />
        </div>
      </div>

      {!clicked ? (
        <div />
      ) : (
        <div className="w-1/2 flex font-bold flex-col bg-[#7d7d7d]">
          	<div className="flex flex-col items-center w-full">
				<p>19/03/2022: Recruitment</p>
			</div>

			<div className="flex-col">
				<p>TOPIC</p>
				<li className="pl-2">Intro</li>
				<li className="pl-2">Recruiting Process - 63% distracted</li>
				<li className="pl-2">Wanted positions - 87% interested</li>
				<li className="pl-2">Training and coaching</li>
				<li className="pl-2">Attract new people</li>
				<li className="pl-2">Outro</li>
			</div>

			<div className="flex flex-row">
				<img src={require("../meeting/topictime.png")} className="w-96"/>	
				<img src={require("../meeting/talktime.png")} className="w-72"/>
			</div>

			<div className="flex flex-row">
				<img src={require("../meeting/overallstatistics.png")} />
			</div>
        </div>
      )}
    </div>
  );
};

export default Analytics;
