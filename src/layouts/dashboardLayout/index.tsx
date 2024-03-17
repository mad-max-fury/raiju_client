import { Outlet } from "react-router-dom";
import SideBar from "./components/sideBar";
import TopNav from "./components/topNav";

const DashboardLayout = () => {
  return (
    <div className="w-full flex">
      <div className="lg:block hidden">
        <SideBar />
      </div>
      <main className="  bg-[#F7F7F7] min-h-[calc(100dvh)] w-full">
        <TopNav />
        <div className="w-full h-fit overflow-x-hidden px-[1.5625rem]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
