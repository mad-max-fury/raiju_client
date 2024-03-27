import { Typography } from "../typography";
import { formatCurrency } from "../../utils/helpers";
import CopyIcon from "../../assets/svg/copyIcon";
import { walletNoMarkIcon } from "../../assets/images";
import EyeCloseIcon from "../../assets/svg/eyeCloseIcon";
import EyeOpenIcon from "../../assets/svg/eyeOpenIcon";
import { Tooltip } from "../tooltip";
import { useState } from "react";
import { Button } from "../button";
import ArrowBehaviourIndicator from "./components/arrowBehavourIndicator";
import SelectComp from "../select";

type Props = {};

const CommissionOverviewCard = (props: Props) => {
  return (
    <div className=" w-[334px] h-fit flex flex-col justify-between  bg-white rounded-lg">
      <div className="w-full flex flex-col gap-10 p-4 pb-0">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              src={walletNoMarkIcon}
              alt="wallet"
              className="h-[40px] w-[40px] object-contain"
            />

            <Typography variant="body-m" color="gray-1">
              Commission
            </Typography>
          </div>
          <SelectComp
            label=""
            name="product"
            id="product"
            options={[
              { value: "monthly", label: "Monthly" },
              { value: "daily", label: "Daily" },
              { value: "weekly", label: "Weekly" },
            ]}
          />
        </div>
        <div>
          <Typography variant={"h5"} color="gray-1">
            {formatCurrency(21497965.0)}
          </Typography>
          <ArrowBehaviourIndicator remark={"since last month"} percent={15} />
        </div>
      </div>
      <div className="w-full flex pt-3 p-4">
        <Button name="trigger" size="medium" value={"Login"} loading={false}>
          Liquidate
        </Button>
      </div>
    </div>
  );
};

export default CommissionOverviewCard;
