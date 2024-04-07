import { Outlet } from "react-router-dom";
import SideBar from "./components/sideBar";
import TopNav from "./components/topNav";

const DashboardLayout = () => {
  return (
    <div className="w-full flex isolate">
      <div className="lg:block hidden sticky top-0 left-0 h-screen z-[1]">
        <SideBar />
      </div>
      <main className="bg-[#F7F7F7] min-h-[calc(100dvh)] w-full z-[-1]">
        <TopNav />
        <div className="w-full h-fit overflow-x-hidden mlg:px-[1.5625rem] max-w-[1096px] mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
