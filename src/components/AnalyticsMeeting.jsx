<<<<<<< HEAD
// import Image from "../../node_modules/next/image";

=======
>>>>>>> a1c6e995 (m)
const Analytics = () => {
  return (
    <div className="flex flex-row divide-x-2 divide-black min-h-screen">
      <div className="w-1/2">
        <div className="w-full flex flex-col items-center">
          <p className="font-bold flex items-center">Past month</p>
        </div>
        <div className="w-full items-start">
          <p className="font-bold text-2xl">Previous meetings</p>
          <div className="flex flex-col pl-5 py-3">
            <li>19/03/2022: Recruitment</li>
            <li>15/03/2022: Monthly meeting R&D</li>
            <li>10/03/2022: Weekly meeting project</li>
          </div>
        </div>
        <div className="pt-20 flex justify-end">
          <img src={require("../meeting/activity.png")} alt="Lopo" />
        </div>
        <div>
          <img
            className="h-48 w-48"
            src={require("../meeting/meeting_time.png")}
            alt="Logo"
          />
        </div>
      </div>

<<<<<<< HEAD
				{/* <Image src={require("../meeting/activity.png")} alt="Lopo"/> */}
			</div>
=======
      <div className="w-1/2 flex flex-col items-center">
        <p className="bold">Last session</p>
      </div>
    </div>
  );
};
>>>>>>> a1c6e995 (m)

export default Analytics;
