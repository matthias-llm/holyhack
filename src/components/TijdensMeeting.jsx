import React, { useState } from "react";
import meeting from "../meeting/Hackathon_Meeting.mp4";
import persons from "../meeting/person.png";

import UI_zoom from "../meeting/UI_zoom.png";
import { BellIcon } from "@heroicons/react/outline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Tijdens = () => {
  const notification = () =>
    toast.info("U will be notified when 'Xander' will be mentioned", {
      className: "text-lg",
    });

  const suprised = () =>
    toast.warning("People are looking confused", {
      className: "text-lg",
    });

  const [showElement, setSwipe] = useState(true);
  const onSwipe = () => {
    setSwipe(!showElement);
  };

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
      <div className="bg-blue-400 w-1/4 pl-14">
        <div className="absolute">
          <button className="opacity-0" onClick={onSwipe}>
            izodjzeiojdoizedj
          </button>
        </div>
        <div id="Bullet points div" className="items-center pt-5">
          <p className="text-2xl text-white font-bold">Bullet Points</p>
          <div className="border-4 bg-gray-400 h-96 w-60">
            <li className="pl-2 line-through">Intro</li>
            <li className="pl-2 line-through">Recruiting Process</li>
            <li className="pl-2 line-through">Wanted positions</li>
            <li className="pl-2">Training and coaching</li>
            <li className="pl-2">Attract new people</li>
            <li className="pl-2">Outro</li>
          </div>
        </div>
        <div id="Noti div" className="pt-5">
          <p className="text-2xl text-white font-bold">Notifications</p>
          <div className="flex flex-row">
            <input type="text" className="min-w-screen" />
            <button onClick={notification}>
              <BellIcon stroke="white" className="w-6 h-6" />
            </button>
            <button className="opacity-0" onClick={suprised}>
              ___
            </button>
            <ToastContainer position="top-left" autoClose={8000} />
          </div>
        </div>
        <div id="Deadlines div" className="pt-5">
          <div className="flex flex-row">
            <p className="text-2xl text-white font-bold">Deadlines</p>
          </div>
          <div className="border-4 bg-gray-400 h-20 w-60">
            <div className="flex flex-row pr-2 pl-2">
              <p className="pr-2">21/03 Finance meeting</p>
              <button className=" bg-gray-500 text-xs w-10 h-5">Add</button>
            </div>
            {showElement ? (
              <div></div>
            ) : (
              <div className="flex flex-row pr-2 pl-2">
                <p className="pr-2">27/03 Data rapport </p>
                <button className=" bg-gray-500 text-xs w-10 h-5">Add</button>
              </div>
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tijdens;
