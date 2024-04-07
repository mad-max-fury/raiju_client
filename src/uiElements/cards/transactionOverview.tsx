import React from "react";
import { Typography } from "../typography";
import { formatCurrency } from "../../utils/helpers";
import PercentBehaviourIndicator from "./components/percentBehaviourIndicator";
import { walletIcon } from "../../assets/images";
import ArrowBehaviourIndicator from "./components/arrowBehavourIndicator";
import { ITransactionSummary } from "../../mocks/transactionSummary";

const TransactionOverview = ({
  type,
  amount,
  percentage,
  remark,
}: ITransactionSummary) => {
  return (
    <div className="w-[396px] p-4 bg-white rounded-lg">
      <div className="w-full flex  justify-between pb-4">
        <div className="flex gap-2 items-center">
          <img
            src={walletIcon}
            alt="wallet"
            className="h-[40px] w-[40px] object-contain"
          />
          <div className="flex flex-col items-start">
            <Typography variant="body-m" color="gray-1">
              Total transaction
            </Typography>
            <ArrowBehaviourIndicator remark={remark} percent={percentage} />
          </div>
        </div>
        <span className="h-[37px] flex items-center justify-center capitalize w-[88px] text-center  rounded-md  ring-solid ring-1 ring-[#DDDDDD] text-[#2e2e2e]/60">
          <span>{type}</span>
        </span>
      </div>
      <hr />
      <div className="w-full pt-4 flex justify-between items-center">
        <Typography variant={"h5"} customClassName="font-medium" color="gray-1">
          {formatCurrency(amount)}
        </Typography>
        <PercentBehaviourIndicator percent={percentage} />
      </div>
    </div>
  );
};

export default TransactionOverview;
