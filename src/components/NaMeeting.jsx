import { useState } from "react";
import meeting from "../meeting/Hackathon_Meeting.mp4";
import ReactPlayer from "react-player";
import React from "react";

const Transcript = () => {
  const reactPlayer = React.createRef();

  const [clicked_1, setSwipe_1] = useState(false);
  const [clicked_1_1, setSwipe_1_1] = useState(false);
  const [clicked_1_2, setSwipe_1_2] = useState(false);
  const [clicked_1_3, setSwipe_1_3] = useState(false);
  const [clicked_2, setSwipe_2] = useState(false);
  const [clicked_2_1, setSwipe_2_1] = useState(false);
  const [clicked_3, setSwipe_3] = useState(false);
  const [clicked_3_1, setSwipe_3_1] = useState(false);
  const [clicked_3_2, setSwipe_3_2] = useState(false);
  const [clicked_3_3, setSwipe_3_3] = useState(false);
  const [clicked_4, setSwipe_4] = useState(false);
  const [clicked_5, setSwipe_5] = useState(false);
  const [clicked_6, setSwipe_6] = useState(false);

  const onSwipe_1 = () => {
    setSwipe_1(!clicked_1);
    if (!clicked_1) reactPlayer.current.seekTo(10);
  };
  const onSwipe_1_1 = () => {
    setSwipe_1_1(!clicked_1_1);
    if (!clicked_1_1) reactPlayer.current.seekTo(10);
  };
  const onSwipe_1_2 = () => {
    setSwipe_1_2(!clicked_1_2);
    if (!clicked_1_2) reactPlayer.current.seekTo(17);
  };
  const onSwipe_1_3 = () => {
    setSwipe_1_3(!clicked_1_3);
    if (!clicked_1_3) reactPlayer.current.seekTo(21);
  };
  const onSwipe_2 = () => {
    setSwipe_2(!clicked_2);
    if (!clicked_2) reactPlayer.current.seekTo(37);
  };
  const onSwipe_2_1 = () => {
    setSwipe_2_1(!clicked_2_1);
    if (!clicked_2_1) reactPlayer.current.seekTo(37);
  };
  const onSwipe_3 = () => {
    setSwipe_3(!clicked_3);
    if (!clicked_3) reactPlayer.current.seekTo(52);
  };
  const onSwipe_3_1 = () => {
    setSwipe_3_1(!clicked_3_1);
    if (!clicked_3_1) reactPlayer.current.seekTo(52);
  };
  const onSwipe_3_2 = () => {
    setSwipe_3_2(!clicked_3_2);
    if (!clicked_3_2) reactPlayer.current.seekTo(59);
  };
  const onSwipe_3_3 = () => {
    setSwipe_3_3(!clicked_3_3);
    if (!clicked_3_3) reactPlayer.current.seekTo(70);
  };
  const onSwipe_4 = () => {
    setSwipe_4(!clicked_4);
    if (!clicked_4) reactPlayer.current.seekTo(114);
  };
  const onSwipe_5 = () => {
    setSwipe_5(!clicked_5);
    if (!clicked_5) reactPlayer.current.seekTo(131);
  };
  const onSwipe_6 = () => {
    setSwipe_6(!clicked_6);
    if (!clicked_6) reactPlayer.current.seekTo(179);
  };

  return (
    <div className="flex flex-col bg-gray-100 min-w-screen min-h-screen">
      <div className="flex items-center justify-center bg-gray-100 min-w-screen h-20">
        <p className="text-4xl">Meeting Recruiting 19/03/2022</p>
      </div>
      <div
        className="flex flex-row min-w-screen bg-gray-100"
        id="NaMeeting-window"
      >
        <div className="absolute px-4">
          <p className="text-2xl font-bold">Participants</p>
          <li>Jef Verstraeten - Finance Manager</li>
          <li>April Williams - Recruitment</li>
          <li>Mike Nolan - R&D</li>
          <li>Rob Windey - Business relations</li>
        </div>
        <div className="flex flex-col w-1/2 justify-end px-4">
          {!clicked_1 ? (
            <li>
              <button className="font-bold" onClick={onSwipe_1}>
                Intro (0:10)
              </button>
            </li>
          ) : (
            <div className="flex flex-col">
              <li>
                <button className="font-bold" onClick={onSwipe_1}>
                  Intro (0:10)
                </button>
              </li>

              {!clicked_1_1 ? (
                <div className="flex flex-row">
                  {" "}
                  <button className="pl-5 underline" onClick={onSwipe_1_1}>
                    April Williams:
                  </button>{" "}
                  <button className="pl-1" onClick={onSwipe_1_1}>
                    Workshop | Evolve
                  </button>{" "}
                </div>
              ) : (
                <div>
                  {" "}
                  <button
                    className="w-full pl-5 underline"
                    onClick={onSwipe_1_1}
                  >
                    April Williams:
                  </button>{" "}
                  <button className="w-full pb-2" onClick={onSwipe_1_1}>
                    The important thing about the new people we recruite is that
                    they have a lot of potential and ambition. If we can train
                    them with specific workshops, they will evolve to a better
                    version of themselves.
                  </button>{" "}
                </div>
              )}

              {!clicked_1_2 ? (
                <div className="flex flex-row">
                  {" "}
                  <button className="pl-5 underline" onClick={onSwipe_1_2}>
                    Tori Kojuro:{" "}
                  </button>{" "}
                  <button className="pl-1" onClick={onSwipe_1_2}>
                    Investing in people
                  </button>{" "}
                </div>
              ) : (
                <div>
                  {" "}
                  <button
                    className="w-full pl-5 underline"
                    onClick={onSwipe_1_2}
                  >
                    Tori Kojuro:{" "}
                  </button>{" "}
                  <button className="w-full pb-2" onClick={onSwipe_1_2}>
                    Yes exactly, investing in new people is key in our industry.
                  </button>{" "}
                </div>
              )}

              {!clicked_1_3 ? (
                <div className="flex flex-row">
                  {" "}
                  <button className="pl-5 underline" onClick={onSwipe_1_3}>
                    Casey Cunningham:
                  </button>{" "}
                  <button className="w-full pl-1" onClick={onSwipe_1_3}>
                    What workshops
                  </button>{" "}
                </div>
              ) : (
                <div>
                  {" "}
                  <button
                    className="w-full pl-5 underline"
                    onClick={onSwipe_1_3}
                  >
                    Casey Cunningham:
                  </button>{" "}
                  <button className="w-full pb-2" onClick={onSwipe_1_3}>
                    Which specific workshops are you talking about?
                  </button>{" "}
                </div>
              )}
            </div>
          )}

          {!clicked_2 ? (
            <li>
              <button className="font-bold" onClick={onSwipe_2}>
                Recruiting Process (0:37)
              </button>
            </li>
          ) : (
            <div className="flex flex-col">
              <li>
                <button className="font-bold" onClick={onSwipe_2}>
                  Recruiting Process (0:37)
                </button>
              </li>

              {!clicked_2_1 ? (
                <div className="flex flex-row"> <button className="pl-5 underline" onClick={onSwipe_2_1}>April Williams:</button> <button className="pl-1" onClick={onSwipe_2_1}> Talent life cycle </button> </div>
              ) : (
                <div> <button className="w-full pl-5 underline" onClick={onSwipe_2_1}>April Williams:</button> <button className="w-full pb-2" onClick={onSwipe_2_1}>Here you can see the talent life cycle we have in our mind.</button> </div>
              )}
            </div>
          )}

          {!clicked_3 ? (
            <li>
              <button className="font-bold" onClick={onSwipe_3}>
                Wanted positions (0:52)
              </button>
            </li>
          ) : (
            <div className="flex flex-col">
              <li>
                <button className="font-bold" onClick={onSwipe_3}>
                  Wanted positions (0:52)
                </button>
              </li>

			  {!clicked_3_1 ? (
                <div className="flex flex-row"> <button className="pl-5 underline" onClick={onSwipe_3_1}>April Williams:</button> <button className="pl-1" onClick={onSwipe_3_1}> Specific workshop </button> </div>
              ) : (
                <div> <button className="w-full pl-5 underline" onClick={onSwipe_3_1}>April Williams:</button> <button className="w-full pb-2" onClick={onSwipe_3_1}>These companies provide the specific workshops we are looking for.</button> </div>
              )}

			  {!clicked_3_2 ? (
                <div className="flex flex-row"> <button className="pl-5 underline" onClick={onSwipe_3_2}>Casey Cunningham:</button> <button className="pl-1" onClick={onSwipe_3_2}> Training list?</button> </div>
              ) : (
                <div> <button className="w-full pl-5 underline" onClick={onSwipe_3_2}>Casey Cunningham:</button> <button className="w-full pb-2" onClick={onSwipe_3_2}>Allright this is already a good beginning. Do you have a list of which training each company can provide?</button> </div>
              )}

			  {!clicked_3_3 ? (
                <div className="flex flex-row"> <button className="pl-5 underline" onClick={onSwipe_3_3}>Tori Kojuro:</button> <button className="pl-1" onClick={onSwipe_3_3}> Training list answer </button> </div>
              ) : (
                <div> <button className="w-full pl-5 underline" onClick={onSwipe_3_3}>Tori Kojuro:</button> <button className="w-full pb-2" onClick={onSwipe_3_3}>They have all kinds of training but we have not yet made an overview.</button> </div>
              )}

              <div className="flex flex-row"><p className="pl-5 underline">Casey Cunningham:</p> <p className="pl-1">Date proposal</p></div>

              <p className="w-full pl-5 underline">April Williams</p>
              <div className="flex flex-row"><p className="pl-5 underline"> Tori Kojuro:</p> <p className="pl-1">Company overview</p></div>
              <p className="w-full pl-5 underline"> Casey Cunningham</p>
              <p className="w-full pl-5 underline">Tori Kojuro</p>
            </div>
          )}

          {!clicked_4 ? (
            <li>
              <button className="font-bold" onClick={onSwipe_4}>
                Training and coaching (1:54)
              </button>
            </li>
          ) : (
            <div className="flex flex-col">
              <li>
                <button className="font-bold" onClick={onSwipe_4}>
                  Training and coaching (1:54)
                </button>
              </li>

              <p className="w-full pl-5">
                April Williams: Attracting new people is the most important part
                of the recruiting process. The more people are eager to work for
                us, the more talent we will find. Therefore, we had some low
                threshold events in mind. For example, a beer and pizza night.
                We also thought about participating in the job and internship
                fair of VTK.
              </p>
              <p className="w-full pl-5">Casey Cunningham: Good ideas</p>
            </div>
          )}

          {!clicked_5 ? (
            <li>
              <button className="font-bold" onClick={onSwipe_5}>
                Attract new people (2:11)
              </button>
            </li>
          ) : (
            <div className="flex flex-col">
              <li>
                <button className="font-bold" onClick={onSwipe_5}>
                  Attract new people (2:11)
                </button>
              </li>
              <p className="w-full pl-5">Hier komt de tekst van Bullet 5</p>
            </div>
          )}

          {!clicked_6 ? (
            <li>
              <button className="font-bold" onClick={onSwipe_6}>
                Outro (2:59)
              </button>
            </li>
          ) : (
            <div className="flex flex-col">
              <li>
                <button className="font-bold" onClick={onSwipe_6}>
                  Outro (2:59)
                </button>
              </li>
              <p className="w-full pl-5">Hier komt de tekst van Bullet 6</p>
            </div>
          )}
        </div>

        <div className="flex items-center pr-5">
          <ReactPlayer
            className="scale-100"
            url={meeting}
            controls="true"
            ref={reactPlayer}
            width="90%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Transcript;
