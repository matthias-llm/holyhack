import ReactDOM from "react-dom";
import Tijdens from "./TijdensMeeting";
import Transcript from "./NaMeeting";
import Analytics from "./AnalyticsMeeting";

const StartScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen">
      <div className="pb-10">
          <p className="">ProMeeting.AI</p>
      </div>
      <div className="pb-10">
        <button
          className="bg-gray-400 border-4 rounded-lg w-40 h-10"
          onClick={() =>
            ReactDOM.render(<Tijdens />, document.getElementById("root"))
          }
        >
          <p>Join Meeting</p>
        </button>
      </div>
      <div className="pb-10">
        <button
          className="bg-gray-400 border-4 rounded-lg w-40 h-15"
          onClick={() =>
            ReactDOM.render(<Analytics />, document.getElementById("root"))
          }
        >
          <p>Analytics last meeting</p>
        </button>
      </div>

      <button
        className="bg-gray-400 border-4 rounded-lg w-40 h-15"
        onClick={() =>
          ReactDOM.render(<Transcript />, document.getElementById("root"))
        }
      >
        <p>Transcript last meeting</p>
      </button>
    </div>
  );
};

export default StartScreen;
