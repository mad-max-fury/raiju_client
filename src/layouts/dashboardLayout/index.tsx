import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const loc = useLocation();
  const secHeading = loc.pathname.split("/")[2];
  const page = secHeading === undefined ? "home" : secHeading;

  return (
    <div className="w-full">
      <main className="mt-16 px-[1.5625rem] bg-[#F9F9F9] min-h-[calc(100dvh-4rem)]">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
