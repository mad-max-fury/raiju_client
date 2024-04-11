import { useState } from "react";
import { logoSmall, logoWithText } from "../../../assets/images";
import cn from "../../../utils/common";
import DashboardIcon from "../../../assets/svg/dashboardIcon";
import WalletIcon from "../../../assets/svg/walletIcon";
import TransfersIcon from "../../../assets/svg/transfersIcon";
import BarsIcon from "../../../assets/svg/barsIcon";
import SideNavLink from "./sideNavLink";
import { useLocation } from "react-router-dom";
import UserIcon from "../../../assets/svg/userIcon";
import CogIcon from "../../../assets/svg/cogIcon";
import { FaAngleLeft } from "react-icons/fa";
import { Tooltip } from "../../../uiElements/tooltip";
import KeyIcon from "../../../assets/svg/keyIcon";
import FilesIcon from "../../../assets/svg/filesIcon";
const Menus = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
    isExternal: false,
  },
  {
    title: "Funds management",
    path: "/dashboard/funds_management",
    icon: <WalletIcon />,
    isExternal: false,
  },
  {
    title: "Transactions",
    path: "/dashboard/transactions",
    icon: <TransfersIcon />,
    isExternal: false,
  },
  // {
  //   title: "Analytics",
  //   path: "/dashboard/analytics",
  //   icon: <BarsIcon />,
  //   isExternal: false,
  // },
  {
    title: "Generate API",
    path: "/dashboard/generate_api",
    icon: <KeyIcon />,
    isExternal: false,
  },
  {
    title: "Documentation",
    path: "https://cloudhashiras-corp.gitbook.io/raiju-capital",
    icon: <FilesIcon />,
    isExternal: true,
  },
  {
    title: "Profile",
    path: "/dashboard/profile",
    icon: <UserIcon fill="currentColor" />,
    isExternal: false,
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: <CogIcon />,
    isExternal: false,
  },
];
const SideBar = () => {
  const pathName = useLocation().pathname;
  const pSplit = pathName.split("/")[2];
  const [open, setOpen] = useState(true);

  return (
    <div
      className={` ${
        open ? "w-[240px]" : "w-20 "
      } bg-white h-screen  pt-4 relative  duration-300`}
    >
      <div className="relative p-5">
        <div className={!open ? "" : "w-[118px] h-[44px] transition-none"}>
          <img
            src={!open ? logoSmall : logoWithText}
            className={`cursor-pointer h-full w-full object-contain transition-none `}
          />
        </div>

        <button
          data-tooltip-id="EXPAND-BTN"
          data-tooltip-content={open ? "Collapse Menu" : "Expand Menu"}
          className={cn(
            "transition-all absolute right-[-12px] rounded-sm top-[30px] ease-in-out duration-300 text-gray-200 h-[24px] w-[24px] bg-black",
            open ? "rotate-0" : " rotate-180"
          )}
          onClick={() => setOpen(!open)}
        >
          <FaAngleLeft size={20} />
        </button>
        <Tooltip id="EXPAND-BTN" place="right" />
      </div>
      <ul className="pt-6 flex gap-2 flex-col">
        {Menus.slice(0, 3).map((menu, index) => (
          <li key={index}>
            <SideNavLink
              {...menu}
              isActive={
                menu.path === "/dashboard"
                  ? pSplit === "services" || pSplit === undefined
                  : menu.path.includes(pSplit)
              }
              isOpen={open}
            />
          </li>
        ))}
        <li className="w-full px-5 my-6">
          <div className="w-full h-[1px] bg-[#0D163A]  mx-auto"></div>
        </li>
        {Menus.slice(3).map((menu, index) => (
          <li key={index}>
            <SideNavLink
              {...menu}
              isActive={
                menu.path === "/dashboard"
                  ? pSplit === "services" || pSplit === undefined
                  : menu.path.includes(pSplit)
              }
              isOpen={open}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SideBar;
