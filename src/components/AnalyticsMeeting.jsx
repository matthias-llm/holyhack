import Image from "../../node_modules/next/image";

const Analytics = () => {
	return (
		<div className="flex flex-row divide-x-2 divide-black min-h-screen">
			<div className="w-1/2 flex flex-col items-center">
				<p className="bold">Past month</p>

				<Image src={require("../meeting/activity.png")} alt="Lopo"/>
			</div>

			<div className="w-1/2 flex flex-col items-center">
				<p className="bold">Last session</p>
			</div>
		</div>
	);
}

export default Analytics;