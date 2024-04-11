import React, { useState } from "react";
import FundTypeCard, { FundWalletType } from "./components/fundTypeCard";
import { funds1, funds2, funds3 } from "../../../assets/images";
import Modal from "../../../uiElements/Modal";
import { Typography } from "../../../uiElements/typography";

import { formatCurrency } from "../../../utils/helpers";
import { Button } from "../../../uiElements/button";
import cn from "../../../utils/common";
import { Input } from "../../../uiElements/input";
import {
  useGetBalancesQuery,
  useLiquidateCommissionMutation,
} from "../../../app/slices/transactionSlice";
import PageLoader from "../../../uiElements/pageLoader";
import { HttpStatus } from "../../../utils/errors";
import toast from "react-hot-toast";

const FundsManagement = () => {
  const [showLiquidateModal, setShowLiquidateModal] = useState(false);

  const [showFundWallet, setShowFundWallet] = useState(false);

  const {
    data: walletBalances,
    isFetching: gettingWallet,
    isError,
    refetch,
  } = useGetBalancesQuery();
  const commissionsBalance = walletBalances?.data?.wallet[0].commission_bal;
  const [liquidate, { isLoading }] = useLiquidateCommissionMutation();
  const [selectedpercent, setSelectedPercent] = useState<number>(0);
  const [liquidateAmount, setLiquidateAmount] = useState(0);
  const maxBalance = Number(commissionsBalance) ?? 0;
  const minBalance = 0.0;
  const withdrawAmountPercent = [25, 50, 75, 100];
  const onLiquidate = async () => {
    if (liquidateAmount > 0 && liquidateAmount <= maxBalance) {
      try {
        const res = await liquidate({
          liquidityAmount: liquidateAmount,
        }).unwrap();
        if (res.statusCode === HttpStatus.OK) {
          refetch();
          setLiquidateAmount(0);
          setShowLiquidateModal(false);
          setSelectedPercent(0);
          return toast.success(res?.message ?? "Commission Liquidated");
        }
      } catch (error) {
        if (!error) {
          return toast.error("Something went wrong, check your network");
        }
        // @ts-expect-error
        return toast.error(error?.data?.message ?? "unable to liquidate");
      }
    }
    if (liquidateAmount <= minBalance) {
      return toast.error("Amount too low");
    }
    return toast.error("Amount too high");
  };

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
      btnOnClick: () => setShowFundWallet(true),
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
  if (gettingWallet) {
    return (
      <div className="w-full h-screen">
        <PageLoader />
      </div>
    );
  }
  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[30px] gap-6 min-h-screen">
        {fundsTypes.map((fundWalletType, index) =>
          index === 2 ? (
            <div className={" pointer-events-none opacity-[.7] "} key={index}>
              <FundTypeCard {...fundWalletType} />
            </div>
          ) : (
            <FundTypeCard {...fundWalletType} key={index} />
          )
        )}
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
                name="amounyt"
                label="Enter  Liquidity Amount"
                placeholder="0.00"
                max={maxBalance.toString()}
                value={liquidateAmount}
                onChange={(e) => {
                  setLiquidateAmount(Number(e.target.value));
                  return setSelectedPercent(0);
                }}
                type={"number"}
                variant="plain"
              />
              <div className="w-fit flex gap-2 items-center self-end">
                {withdrawAmountPercent.map((amount) => (
                  <Button
                    variant={
                      selectedpercent === amount ||
                      (liquidateAmount / maxBalance) * 100 === amount
                        ? "filled"
                        : "outlined"
                    }
                    size={"sm"}
                    fit
                    customClassName={cn("p-2 !ring-0 text-xs text-[#2e2e2e]")}
                    onClick={() => {
                      setLiquidateAmount((maxBalance * amount) / 100);
                      return setSelectedPercent(amount);
                    }}
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
            <Button fit size={"sm"} onClick={onLiquidate} loading={isLoading}>
              <Typography variant="body-r"> Liquidate</Typography>
            </Button>
          </div>
        </div>
      </Modal>
      <Modal
        open={showFundWallet}
        setOpen={setShowFundWallet}
        size="lg"
        customClassName="max-w-[518px]"
      >
        <div className="h-fit">
          <Typography variant="body-r" customClassName="mb-6">
            <b>Fund Wallet</b>
          </Typography>
          <div className="grid grid-cols-1 gap-4 border-b pb-8 mb-4">
            <Typography
              variant="caption-s"
              customClassName="text-center text-red-600 mt-3 "
            >
              <b>
                Please make a transfer to the following account details to
                credit your wallet account.
              </b>
            </Typography>
            <Input
              name="acc_bank"
              label="Service Bank"
              type={"text"}
              variant="plain"
              value={"Providus Bank"}
              disabled
            />
            <div className="flex flex-col gap-2">
              <Input
                name="acc_number"
                label="Account Number"
                value={"8937592571"}
                type={"text"}
                variant="plain"
              />
            </div>
          </div>
          <div className="w-full flex justify-end items-center gap-3">
            <Button
              size={"sm"}
              onClick={() => setShowFundWallet(!showFundWallet)}
            >
              <Typography variant="body-r">Close</Typography>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FundsManagement;
