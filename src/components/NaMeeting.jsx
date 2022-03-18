const NaMeeting = () =>  {
	const [swiped, setSwipe] = useState(false);

	const onSwipe = () => {
		setSwipe(!swiped);
	};

	return (
		<div className="flex flex-row">
			<div className="flex flex-col">

			</div>

			<div className="flex flex-col">

			</div>
		</div>
	);
}

export default NaMeeting;
