import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import SideDrawer from "../../../uiElements/SideDrawer";
import SideBar from "./sideBar";
import { useState } from "react";
import { Typography } from "../../../uiElements/typography";
import NotificationIcon from "../../../assets/svg/notificationIcon";
import cn from "../../../utils/common";
import { Button } from "../../../uiElements/button";

const TopNav = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="h-[100px] bg-white  w-full  flex justify-between items-center px-6 sticky top-0 ">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setShow(!show)}
          className="w-10 h-10 rounded-full bg-black/80 grid place-items-center lg:hidden "
        >
          <span className="sr-only">Open Menu</span>
          <BsThreeDotsVertical className="text-white w-5 h-5" />
        </button>
        <div className="flex flex-col gap-1 justify-center mmd:hidden">
          <Typography variant="h5" color="gray-1">
            Good Afternoon, Wils
          </Typography>
          <Typography variant={"body-s"} color="gray-1">
            Here’s what’s happening with your account today.
          </Typography>
        </div>
      </div>
      <div className="flex items-center gap-3 ml-auto">
        <button className="w-10 h-10 rounded-full bg-[#F0F2F5] grid place-items-center">
          <NotificationIcon />
        </button>
        <UserProfileDropdown />
      </div>
      <div className="lg:hidden block">
        <SideDrawer
          showCloseBtn={false}
          isOpen={show}
          setIsOpen={setShow}
          size="sm"
          align="left"
        >
          <SideBar />
        </SideDrawer>
      </div>
    </nav>
  );
};

export default TopNav;

const UserProfileDropdown = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className="relative ">
      <button
        onClick={() => setShowDropDown(!showDropDown)}
        onBlur={() => setShowDropDown(false)}
        className="w-fit flex gap-1"
      >
        <div className="w-[40px] h-[40px] rounded-full bg-gray-400"></div>
        <div className=" mxs:hidden flex flex-col justify-center">
          <Typography variant="h6" color="gray-1">
            Gabriel Wils
          </Typography>
          <Typography variant={"caption-s"} color="gray-1">
            userexample@gmail.com
          </Typography>
        </div>
      </button>

      <div
        className={cn(
          " fixed top-[100px] p-3 flex flex-col rounded-md gap-4 shadow-sm w-[245px] bg-white h-fit transition-all duration-300 ease-in-out",
          showDropDown ? " right-[20px]" : "right-[-100vw]"
        )}
      >
        <Link
          to="/dashboard/profile"
          className="px-6 py-2.5 hover:shadow-sm rounded hover:bg-gray-200"
          onClick={() => setShowDropDown(!showDropDown)}
        >
          <Typography variant="body-s" color="gray-1">
            Profile
          </Typography>
        </Link>
        <Link
          to="/dashboard/profile"
          className="px-6 py-2.5 hover:shadow-sm rounded hover:bg-gray-200"
          onClick={() => setShowDropDown(!showDropDown)}
        >
          <Typography variant="body-s" color="gray-1">
            Settings
          </Typography>
        </Link>{" "}
        <Button size="sm" onClick={() => setShowDropDown(!showDropDown)}>
          <Typography variant="body-r" color="white">
            Log Out
          </Typography>
        </Button>
      </div>
    </div>
  );
};
