import React from "react";
import { Typography } from "../../uiElements/typography";
import { authImageBanner } from "../../assets/images";
import { ProfileCircleIcon } from "../../assets/svg";

type Props = {
  children: React.ReactElement;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <main className="flex w-full h-screen border">
      <aside className="w-full border-r max-w-[800px] flex items-center justify-center border-solid border-border h-full">
        <div className="flex flex-col  items-center justify-center w-full px-6">
          <picture className="w-4/5 max-h-[560px] aspect-video">
            <img src={authImageBanner} alt=" banner" />
          </picture>
          <Typography variant="h4" color="gray-1">
            Welcome back, valued user!
          </Typography>
          <Typography
            color="gray-1"
            variant={"body-m"}
            customClassName="max-w-[533px] text-center mt-4"
          >
            “Enter your login information to manage your bill and utility
            payments. Let's get you powered up with energy."
          </Typography>
        </div>
      </aside>
      <aside className="w-full flex items-center justify-center ">
        <div className="w-full max-w-[450px]">
          <header className="flex flex-col gap-2 items-center">
            <span className="mb-4">
              <ProfileCircleIcon />
            </span>
            <Typography variant="h4" color="gray-1">
              Welcome back!
            </Typography>
            <Typography variant="caption-s" color="gray-1">
              “Login to Manage Your Electricity Account”
            </Typography>
          </header>
          <div className="mt-10">{children}</div>
          <footer className="flex items-center gap-1 justify-center mt-6">
            <Typography variant="body-r" color="gray-1">
              Already have an account? Sign in
            </Typography>
          </footer>
        </div>
      </aside>
    </main>
  );
};

export default AuthLayout;
