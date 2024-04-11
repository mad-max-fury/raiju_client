import React from "react";
import PersonalInfoIcon from "../../../assets/svg/personalInfoIcon";
import { Typography } from "../../../uiElements/typography";
import ContactIcon from "../../../assets/svg/contactIcon";
import HomeIcon from "../../../assets/svg/homeIcon";
import { Button } from "../../../uiElements/button";
import { useSelector } from "react-redux";
import { getUser } from "../../../app/slices/authsplice";

type Props = {};

const UserProfile = (props: Props) => {
  const user = useSelector(getUser);
  console.log(user);
  return (
    <div className=" bg-white my-[30px] p-4 py-12 rounded-lg">
      {/* <div className="mb-6">
        <div className="w-[160px] h-[160px] border-[#cacaca] border-solid border rounded-md flex justify-center flex-col items-center"></div>
      </div> */}
      <div className="w-full h-fit  flex mmd:flex-wrap gap-8">
        <div className="flex flex-col gap-4 w-full">
          <header className="flex gap-2 items-center">
            <span>
              <PersonalInfoIcon />
            </span>
            <Typography variant="body-m" fontWeight={"medium"}>
              Personal Info
            </Typography>
          </header>
          <div className="grid gap-4 grid-cols-1 ">
            <div className="w-full flex gap-[93px] items-start">
              <Typography
                variant="body-r"
                customClassName=" w-[113px] text-[#8e8b8b]"
              >
                First name
              </Typography>
              <Typography
                variant="body-r"
                customClassName="text-end"
                color="gray-1"
              >
                {user?.primaryContactFirstName}
              </Typography>
            </div>
            {/* <div className="w-full flex gap-[93px] items-start">
              <Typography
                variant="body-r"
                customClassName=" w-[113px] text-[#8e8b8b]"
              >
                Middle name
              </Typography>
              <Typography
                variant="body-r"
                customClassName="text-end"
                color="gray-1"
              >
                Idanpha
              </Typography>
            </div>{" "} */}
            <div className="w-full flex gap-[93px] items-start">
              <Typography
                variant="body-r"
                customClassName=" w-[113px] text-[#8e8b8b]"
              >
                Last name
              </Typography>
              <Typography
                variant="body-r"
                customClassName="text-end"
                color="gray-1"
              >
                {user?.primaryContactLastName}
              </Typography>
            </div>{" "}
            {/* <div className="w-full flex gap-[93px] items-start">
              <Typography
                variant="body-r"
                customClassName=" w-[113px] text-[#8e8b8b]"
              >
                Gender
              </Typography>
              <Typography
                variant="body-r"
                customClassName="text-end"
                color="gray-1"
              >
                Male
              </Typography>
            </div>
            <div className="w-full flex gap-[93px] items-start">
              <Typography
                variant="body-r"
                customClassName=" w-[113px] text-[#8e8b8b]"
              >
                Date of Birth
              </Typography>
              <Typography
                variant="body-r"
                customClassName="text-end"
                color="gray-1"
              >
                02 March, 2024
              </Typography>
            </div>
            <div className="w-full flex gap-[93px] items-start">
              <Typography
                variant="body-r"
                customClassName=" w-[113px] text-[#8e8b8b]"
              >
                Nationality
              </Typography>
              <Typography
                variant="body-r"
                customClassName="text-end"
                color="gray-1"
              >
                Nigerian
              </Typography>
            </div>
            <div className="w-full flex gap-[93px] items-start">
              <Typography
                variant="body-r"
                customClassName=" w-[113px] text-[#8e8b8b]"
              >
                State of origin
              </Typography>
              <Typography
                variant="body-r"
                customClassName="text-end"
                color="gray-1"
              >
                Lagos
              </Typography>
            </div>{" "}
            <div className="w-full flex gap-[93px] items-start">
              <Typography
                variant="body-r"
                customClassName=" w-[113px] text-[#8e8b8b]"
              >
                LGA
              </Typography>
              <Typography
                variant="body-r"
                customClassName="text-end"
                color="gray-1"
              >
                Obirin
              </Typography>
            </div>
            <div className="w-full flex gap-[93px] items-start">
              <Typography
                variant="body-r"
                customClassName=" w-[113px] text-[#8e8b8b]"
              >
                Means of Identification
              </Typography>
              <Typography
                variant="body-r"
                customClassName="text-end"
                color="gray-1"
              >
                International passport
              </Typography>
            </div> */}
          </div>
        </div>
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-4 ">
            <header className="flex gap-2 items-center">
              <span>
                <ContactIcon />
              </span>
              <Typography variant="body-m" fontWeight={"medium"}>
                Contact Details
              </Typography>
            </header>
            <div className="grid gap-4 grid-cols-1">
              <div className="w-full gap-[93px] flex items-start">
                <Typography
                  variant="body-r"
                  customClassName="  whitespace-nowrap text-[#8e8b8b]"
                >
                  Email Address
                </Typography>
                <Typography
                  variant="body-r"
                  customClassName="text-start"
                  color="gray-1"
                >
                  {user?.primaryContactEmail}
                </Typography>
              </div>
              <div className="w-full flex gap-[93px] items-start">
                <Typography
                  variant="body-r"
                  customClassName="   whitespace-nowrap text-[#8e8b8b]"
                >
                  Home Address
                </Typography>
                <Typography
                  variant="body-r"
                  customClassName="text-start"
                  color="gray-1"
                >
                  {user?.businessAddress}
                </Typography>
              </div>
              <div className="w-full flex items-start gap-[93px]">
                <Typography
                  variant="body-r"
                  customClassName="    whitespace-nowrap text-[#8e8b8b]"
                >
                  Phone number
                </Typography>
                <Typography
                  variant="body-r"
                  customClassName="text-start"
                  color="gray-1"
                >
                  {user?.primaryContactPhone}
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <header className="flex gap-2 items-center">
              <span>
                <HomeIcon />
              </span>
              <Typography variant="body-m" fontWeight={"medium"}>
                Company Details
              </Typography>
            </header>
            <div className="grid gap-4 grid-cols-1">
              <div className="w-full gap-[93px] flex items-start">
                <Typography
                  variant="body-r"
                  customClassName="  whitespace-nowrap text-[#8e8b8b]"
                >
                  Company name
                </Typography>
                <Typography
                  variant="body-r"
                  customClassName="text-start"
                  color="gray-1"
                >
                  {user?.businessName}
                </Typography>
              </div>
              <div className="w-full flex gap-[93px] items-start">
                <Typography
                  variant="body-r"
                  customClassName="   whitespace-nowrap text-[#8e8b8b]"
                >
                  Office Address
                </Typography>
                <Typography
                  variant="body-r"
                  customClassName="text-start"
                  color="gray-1"
                >
                  {user?.businessAddress}
                </Typography>
              </div>
              <div className="w-full flex items-start gap-[93px]">
                <Typography
                  variant="body-r"
                  customClassName="    whitespace-nowrap text-[#8e8b8b]"
                >
                  Email Address
                </Typography>
                <Typography
                  variant="body-r"
                  customClassName="text-start"
                  color="gray-1"
                >
                  {user?.primaryContactEmail}
                </Typography>
              </div>
              <div className="w-full flex items-start gap-[93px]">
                <Typography
                  variant="body-r"
                  customClassName="    whitespace-nowrap text-[#8e8b8b]"
                >
                  Phone number
                </Typography>
                <Typography
                  variant="body-r"
                  customClassName="text-start"
                  color="gray-1"
                >
                  {user?.primaryContactPhone}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
