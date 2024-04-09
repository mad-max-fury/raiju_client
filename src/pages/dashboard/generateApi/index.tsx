import React, { useState } from "react";
import { Typography } from "../../../uiElements/typography";
import { Button } from "../../../uiElements/button";
import { emptyApi } from "../../../assets/images";
import { Input } from "../../../uiElements/input";

const GenerateApi = () => {
  const [isApiKey, setIsApiKey] = useState(false);
  return (
    <div className="w-full min-h-[calc(100vh_-_120px)] bg-white my-[30px] pt-12">
      {isApiKey ? (
        <div className="flex flex-col my-auto gap-6 h-fit mt-8 max-w-[600px] mx-auto px-6">
          <Typography variant="h3" customClassName="text-center" color="gray-1">
            API Tokens
          </Typography>
          <Input
            name="address"
            label="Live Public API Key"
            placeholder="Enter your address"
            type={"text"}
            variant="plain"
            disabled
            value={"ETRLC 15B26GSD9T362BGC092A3FGD9"}
            icon2={
              <button className="cursor-pointer flex gap-1 bg-white px-4 items-center">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 19.5H16.7C16.11 20.97 14.68 22 13 22H6C3.79 22 2 20.21 2 18V10C2 7.96 3.53 6.28003 5.5 6.03003V14C5.5 17.03 7.97 19.5 11 19.5ZM19.5 6.25H21.62C21.56 6.16 21.49 6.08 21.41 6L18 2.59009C17.92 2.51009 17.84 2.43989 17.75 2.38989V4.5C17.75 5.46 18.54 6.25 19.5 6.25ZM19.5 7.75C17.71 7.75 16.25 6.29 16.25 4.5V2H11C8.79 2 7 3.79 7 6V14C7 16.21 8.79 18 11 18H18C20.21 18 22 16.21 22 14V7.75H19.5Z"
                      fill="#B1B0B3"
                    />
                  </svg>
                </span>
                <span>Copy</span>
              </button>
            }
          />
          <Input
            name="address"
            label="Secret API key"
            placeholder="Enter your address"
            type={"password"}
            value={"ETRLC 15B26GSD9T362BGC092A3FGD9"}
            disabled
            variant="plain"
          />
          <Button
            customClassName="mt-4 max-w-[318px] mx-auto"
            name="Submit"
            size="medium"
            value={"Login"}
            loading={false}
            onClick={() => setIsApiKey(!isApiKey)}
          >
            Reset API Key
          </Button>
        </div>
      ) : (
        <EmptyKeyState btnOnClick={() => setIsApiKey(!isApiKey)} />
      )}
    </div>
  );
};

export default GenerateApi;

const EmptyKeyState = ({ btnOnClick }: { btnOnClick: () => void }) => {
  return (
    <div className="w-full  flex flex-col items-center py-[50px] px-6 mt-8 ">
      <div className="w-full max-w-sm aspect-square">
        <img
          src={emptyApi}
          alt={"emptyApi"}
          className=" h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col mt-6 gap-4">
        <Typography variant="h3" customClassName="text-center" color="gray-1">
          No API Keys yet?
        </Typography>
        <Typography
          variant="body-r"
          customClassName="text-center"
          color="gray-1"
        >
          Do not panic, you can generate a new API by clicking the button
          bellow.
        </Typography>
        <Button
          customClassName="mt-4 max-w-[318px] mx-auto"
          name="Submit"
          size="medium"
          value={"Login"}
          loading={false}
          onClick={btnOnClick}
        >
          Generate API
        </Button>
      </div>
    </div>
  );
};
