import { useState } from "react";
import meeting from "../meeting/Meeting_20.mp4";

const NaMeeting = () =>  {
	const [clicked_1, setSwipe_1] = useState(false);
	const [clicked_2, setSwipe_2] = useState(false);
	const [clicked_3, setSwipe_3] = useState(false);
	const [clicked_4, setSwipe_4] = useState(false);
	const [clicked_5, setSwipe_5] = useState(false);
	const [clicked_6, setSwipe_6] = useState(false);

	const onSwipe = () => { 
		setSwipe_1(!clicked_1);
		setSwipe_2(!clicked_1);
		setSwipe_3(!clicked_1);
		setSwipe_4(!clicked_1);
		setSwipe_5(!clicked_1);
		setSwipe_6(!clicked_1);
	};

	return (
		<div className="flex flex-row min-w-screen min-h-screen bg-gray-100" id="NaMeeting-window">
			<div className="flex flex-col w-1/3">
				
			</div>

			<div className="flex items-center">
				<video autoPlay muted>
					<source src={meeting} type="video/mp4"/>
				</video>
			</div>
		</div>
	);
}

export default NaMeeting;
