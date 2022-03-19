import React from "react";
import meeting from "../meeting/Meeting_20.mp4";
import persons from "../meeting/person.png";
import UI_zoom from "../meeting/UI_zoom.png";
import { BellIcon } from "@heroicons/react/outline";

export const Tijdens = () => {
  return (
    <div
      id="main-container"
      className="min-h-screen min-w-screen flex flex-row bg-gray-200"
    >
      <div className="w-3/4">
        <div className="justify-start pb-2 bg-black">
          <img src={persons} alt="Logo"></img>
        </div>
        <video autoPlay muted>
          <source src={meeting} type="video/mp4" />
        </video>
        <div className="bottom-0 pt-2 bg-black">
          <img src={UI_zoom} alt="Logo"></img>
        </div>
      </div>
      <div className="bg-blue-200 w-1/4 pl-14">
        <div id="Bullet points div" className="items-center pt-5">
          <p className="text-2xl text-white font-bold">Bullet Points</p>
          <div className="border-4 bg-gray-400 h-96 w-60">
            <li className="pl-2">Intro</li>
            <li className="pl-2">Recruiting Process</li>
            <li className="pl-2">Wanted positions</li>
            <li className="pl-2">Training and coaching</li>
            <li className="pl-2">Attract new people</li>
            <li className="pl-2">Outro</li>
          </div>
        </div>
        <div id="Noti div" className="pt-5">
          <p className="text-2xl text-white font-bold">Notifications</p>
          <div className="flex flex-row">
            <input type="text" className="min-w-screen " />
            <BellIcon stroke="white" className="w-6 h-6" />
          </div>
        </div>
        <div id="Deadlines div" className="pt-5">
          <p className="text-2xl text-white font-bold">Deadlines</p>
          <div className="border-4 bg-gray-400 h-20 w-60"></div>
        </div>
      </div>
    </div>
  );
};

export default Tijdens;
