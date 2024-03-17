import React from "react";
import { Typography } from "../../uiElements/typography";
import { authImageBanner, logoWithText } from "../../assets/images";
import { ProfileCircleIcon } from "../../assets/svg";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactElement;
  heading: string;
  subHeading: string;
  title: string;
  subTitle: string;
  footerText: string;
  footerLink: string;
  footerLinkText: string;
};

const AuthLayout = ({
  children,
  heading,
  subHeading,
  title,
  subTitle,
  footerLink,
  footerLinkText,
  footerText,
}: Props) => {
  return (
    <main className="flex w-full">
      <aside className="w-full border-r max-w-[800px] items-center border-solid border-border  sticky  left-0 top-0 h-screen  flex-col hidden bg-white/95 overflow-hidden lg:flex">
        <div className={" h-[50px]  px-6 w-4/5 pt-6 "}>
          <img
            src={logoWithText}
            alt="raiju logo"
            className="h-[44px] w-[118px]"
          />
        </div>
        <div className="flex flex-col my-auto items-center justify-center w-full px-6">
          <picture className="w-4/5 max-h-[560px] aspect-video">
            <img src={authImageBanner} alt=" banner" />
          </picture>
          <Typography variant="h4" color="gray-1">
            {heading}
          </Typography>
          <Typography
            color="gray-1"
            variant={"body-m"}
            customClassName="max-w-[533px] text-center mt-4"
          >
            {subHeading}
          </Typography>
        </div>
      </aside>
      <aside className="w-full flex items-center justify-center pt-14 pb-6">
        <div className="w-full max-w-[470px]">
          <header className="flex flex-col gap-2 items-center">
            <span className="mb-4">
              <ProfileCircleIcon />
            </span>
            <Typography variant="h3" color="gray-1">
              {title}
            </Typography>
            <Typography variant="body-r" color="gray-1">
              {subTitle}
            </Typography>
          </header>
          <div className="mt-10">{children}</div>
          <footer className="flex items-center gap-1 justify-center mt-6">
            <Typography variant="body-r" color="gray-1">
              {footerText}
              <b>
                <Link to={footerLink}>{footerLinkText}</Link>
              </b>
            </Typography>
          </footer>
        </div>
      </aside>
    </main>
  );
};

export default AuthLayout;
