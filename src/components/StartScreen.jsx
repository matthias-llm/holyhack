import ReactDOM from "react-dom";
import Tijdens from "./tijdens_page";
import Transcript from "./NaMeeting";
import Analytics from "./AnalyticsMeeting";

const StartScreen = () => {
	return (
		<div className="flex flex-col">
			<button onClick={() => ReactDOM.render(<Tijdens />, document.getElementById("root"))}>
				<p>Videocall</p>
            </button>

			<button onClick={() => ReactDOM.render(<Analytics />, document.getElementById("root"))}>
				<p>Analytics</p>
            </button>

			<button onClick={() => ReactDOM.render(<Transcript />, document.getElementById("root"))}>
				<p>Transcript</p>
            </button>
		</div>
	);
}

export default StartScreen;