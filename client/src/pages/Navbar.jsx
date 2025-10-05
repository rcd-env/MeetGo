import CurrentTime from "./CurrentTime";
import TodayDate from "./TodayDate";
import AppLauncher from "./AppLauncher";
import {
  MessageSquareWarning,
  Settings,
  Grip,
  CircleUserRound,
  CircleQuestionMark,
} from "lucide-react";
function Navbar() {
  return (
    <div className="w-full h-16 flex justify-between items-center px-4 text-[#5f6368]">
      <div className="flex items-center">
        <img src="/images/MeetGo_Logo.png" alt="Logo" className="w-10 h-10" />
        <h1 className="text-2xl letter tracking-wider">MeetGo</h1>
      </div>
      <div className="flex gap-4 text-lg items-center">
        <div className="flex gap-0 items-center mr-8">
          <CurrentTime />
          <span className="hidden md:inline-block">&bull;</span>
          <TodayDate />
          <CircleQuestionMark className="cursor-pointer mr-4 hidden md:inline-block" />
          <MessageSquareWarning className="cursor-pointer mr-4 hidden md:inline-block" />
          <Settings className="cursor-pointer hidden md:inline-block" />
        </div>
        <div className="flex gap-4 items-center">
          <AppLauncher triggerButton={<Grip className="w-6 h-6" />} />
          <CircleUserRound className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
