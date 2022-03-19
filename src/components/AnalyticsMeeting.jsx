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
        <div className="w-1/2 flex font-bold flex-col items-center">
          <p className="">Last session</p>
        </div>
      )}
    </div>
  );
};

export default Analytics;
