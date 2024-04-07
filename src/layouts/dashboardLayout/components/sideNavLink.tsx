import React from "react";
import { Link } from "react-router-dom";
import cn from "../../../utils/common";
import { Tooltip } from "../../../uiElements/tooltip";

type Props = {
  title: string;
  path: string;
  icon: React.ReactElement;
  isActive: boolean;
  isOpen: boolean;
  isExternal: boolean;
};

const SideNavLink = ({
  title,
  path,
  icon,
  isActive,
  isOpen,
  isExternal = false,
}: Props) => {
  return (
    <>
      {isExternal ? (
        <a
          href={path}
          target="_blank"
          rel="noopener"
          data-tooltip-id="SIDE-NAV-BTN-LINK"
          data-tooltip-content={title}
          className={cn(
            " w-[90%] relative text-sm transition-all duration-400 ease-in-out font-normal after:content-[''] after:absolute after:w-[4px] after:left-0 after:top-0 rounded-r-md flex px-5 py-3 items-center gap-3 hover:bg-gray-50 after:transition-all after:duration-300 after:ease-in-out bg-transparent",
            isActive
              ? " bg-gray-200 text-gray-1 after:h-full after:bg-gray-1"
              : " after:h-0 text-secondary"
          )}
        >
          {icon}
          <span
            className={`${
              !isOpen && "hidden"
            } transition-all origin-left duration-200 whitespace-nowrap `}
          >
            {title}
          </span>
          <Tooltip id="SIDE-NAV-BTN-LINK" place="right" />
        </a>
      ) : (
        <Link
          to={path}
          data-tooltip-id="SIDE-NAV-BTN-LINK"
          data-tooltip-content={title}
          className={cn(
            " w-[90%] relative text-sm transition-all duration-400 ease-in-out font-normal after:content-[''] after:absolute after:w-[4px] after:left-0 after:top-0 rounded-r-md flex px-5 py-3 items-center gap-3 hover:bg-gray-50 after:transition-all after:duration-300 after:ease-in-out bg-transparent",
            isActive
              ? " bg-gray-200 text-gray-1 after:h-full after:bg-gray-1"
              : " after:h-0 text-secondary"
          )}
        >
          {icon}
          <span
            className={`${
              !isOpen && "hidden"
            } transition-all origin-left duration-200 whitespace-nowrap `}
          >
            {title}
          </span>
          <Tooltip id="SIDE-NAV-BTN-LINK" place="right" />
        </Link>
      )}
    </>
  );
};

export default SideNavLink;
