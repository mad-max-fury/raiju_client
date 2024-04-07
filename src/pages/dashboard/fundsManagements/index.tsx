import React, { useState } from "react";
import FundTypeCard, { FundWalletType } from "./components/fundTypeCard";
import { funds1, funds2, funds3 } from "../../../assets/images";
import Modal from "../../../uiElements/Modal";
import { Typography } from "../../../uiElements/typography";

import { formatCurrency } from "../../../utils/helpers";
import { Button } from "../../../uiElements/button";
import cn from "../../../utils/common";
import { Input } from "../../../uiElements/input";

const FundsManagement = () => {
  const [showLiquidateModal, setShowLiquidateModal] = useState(false);
  const [selectedpercent, setSelectedPercent] = useState<number>(0);
  const maxBalance = 21497965;
  const minBalance = 0.0;
  const withdrawAmountPercent = [25, 50, 75, 100];
  const onLiquidate = () => {};
  const fundsTypes: FundWalletType[] = [
    {
      src: funds1,
      title: "Liquidated commissions are received into wallet balance",
      alt: "fund Card",
      btnText: "Liquidate commission ",
      btnOnClick: () => setShowLiquidateModal(true),
    },
    {
      src: funds2,
      title:
        "Seamlessly fund your wallet from any financial platform using your wallet ID",
      alt: "fund Card",
      btnText: "Fund wallet ",
      btnOnClick: () => {},
    },
    {
      src: funds3,
      title:
        "Move funds between different wallet IDs or any other financial platform",
      alt: "fund Card",
      btnText: "Wallet transfer",
      btnOnClick: () => {},
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[30px] gap-6 min-h-screen">
        {fundsTypes.map((fundWalletType, index) => (
          <FundTypeCard {...fundWalletType} key={index} />
        ))}
      </div>
      <Modal
        open={showLiquidateModal}
        setOpen={setShowLiquidateModal}
        size="lg"
        customClassName="max-w-[518px]"
      >
        <div className="h-fit">
          <Typography variant="body-r" customClassName="mb-6">
            <b>Liquidate Commission</b>
          </Typography>
          <div className="grid grid-cols-1 gap-4 border-b pb-8 mb-4">
            <Input
              name="balance"
              label="Available Commission Balance"
              placeholder="0.00"
              type={"text"}
              variant="plain"
              min={minBalance}
              value={formatCurrency(maxBalance)}
              disabled
            />
            <div className="flex flex-col gap-2">
              <Input
                name="name"
                label="Enter  Liquidity Amount"
                placeholder="0.00"
                min={minBalance}
                value={formatCurrency((maxBalance * selectedpercent) / 100)}
                type={"text"}
                variant="plain"
              />
              <div className="w-fit flex gap-2 items-center self-end">
                {withdrawAmountPercent.map((amount) => (
                  <Button
                    variant={"outlined"}
                    size={"sm"}
                    fit
                    customClassName={cn(
                      "p-2 !ring-0 text-xs text-[#2e2e2e]",
                      selectedpercent === amount
                        ? "!bg-[#2e2e2e] text-white"
                        : ""
                    )}
                    onClick={() => setSelectedPercent(amount)}
                  >
                    <div className="">{amount}%</div>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end items-center gap-3">
            <Button
              variant={"outlined"}
              size={"sm"}
              fit
              onClick={() => setShowLiquidateModal(!showLiquidateModal)}
            >
              <Typography variant="body-r">Cancel</Typography>
            </Button>
            <Button fit size={"sm"} onClick={onLiquidate}>
              <Typography variant="body-r"> Liquidate</Typography>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FundsManagement;
