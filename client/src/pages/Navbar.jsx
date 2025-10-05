import CurrentTime from "./CurrentTime";
import TodayDate from "./todayDate";

function Navbar() {
  return (
    <div className="w-full h-16 flex justify-between items-center px-4 text-[#5f6368]">
      <div className="text-2xl letter tracking-wider">MeetGo</div>
      <div className="flex gap-4 text-lg items-center">
        <div className="flex gap-0 items-center mr-8">
          {" "}
          <CurrentTime className="mr-2" />
          &bull;
          <TodayDate className="ml-2" />
          <i className="fa-regular fa-circle-question mr-4 cursor-pointer"></i>
          <i className="fa-solid fa-circle-exclamation mr-4 cursor-pointer"></i>
          <i className="fa-solid fa-gear cursor-pointer"></i>
        </div>
        <div className="flex gap-4 items-center">
          <i className="fa-solid fa-bars cursor-pointer"></i>

          <i className="fa-solid fa-user cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
