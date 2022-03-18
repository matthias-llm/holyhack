import React from "react";
import meeting from "../meeting/Meeting_20.mp4";

export const Tijdens = () => {
  return (
    <div id="main-container" className="min-h-screen min-w-screen">
      <video width="100%" height="100%" preload="auto">
        <source src={meeting} type="video/mp4" />
      </video>
    </div>
  );
};

export default Tijdens;
