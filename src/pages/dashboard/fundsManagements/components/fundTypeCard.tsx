import React from "react";
import { Typography } from "../../../../uiElements/typography";
import { Button } from "../../../../uiElements/button";

export type FundWalletType = {
  src: string;
  title: string;
  alt: string;
  btnText: string;
  btnOnClick: () => void;
};

const FundTypeCard = ({
  src,
  title,
  btnText,
  alt,
  btnOnClick,
}: FundWalletType) => {
  return (
    <div className="w-full max-w-[350px] h-[487px] flex flex-col items-center py-[50px] px-6 hover:bg-white/70 rounded-md hover:shadow-md ">
      <div className="h-[250px] w-[250px]">
        <img src={src} alt={alt} className=" h-full w-full object-cover" />
      </div>
      <div className="flex flex-col mt-6 gap-4">
        <Typography
          variant="body-s"
          customClassName="text-center"
          color="gray-1"
        >
          {title}
        </Typography>
        <Button
          customClassName="mt-4"
          name="Submit"
          size="medium"
          value={"Login"}
          loading={false}
          onClick={btnOnClick}
        >
          {btnText}
        </Button>
      </div>
    </div>
  );
};

export default FundTypeCard;
