import { Typography } from "../typography";
import { formatCurrency } from "../../utils/helpers";

import { Button } from "../button";
import ArrowBehaviourIndicator from "./components/arrowBehavourIndicator";
import SelectComp from "../select";
import { walletNoMarkIcon } from "../../assets/images";
import Modal from "../Modal";
import { useState } from "react";
import { Input } from "../input";
import cn from "../../utils/common";

type Props = {};

const CommissionOverviewCard = (props: Props) => {
  const [showLiquidateModal, setShowLiquidateModal] = useState(false);
  const [selectedpercent, setSelectedPercent] = useState<number>(0);
  const maxBalance = 21497965;
  const minBalance = 0.0;
  const withdrawAmountPercent = [25, 50, 75, 100];
  const onLiquidate = () => {};
  return (
    <div className=" w-[334px] h-[234px] flex flex-col justify-between  bg-white rounded-lg">
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
          <div className="[&>*]:h-[40px] relative h-[45px]">
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
        </div>
        <div>
          <Typography variant={"h5"} color="gray-1">
            {formatCurrency(21497965.0)}
          </Typography>
          <ArrowBehaviourIndicator remark={"since last month"} percent={15} />
        </div>
      </div>
      <div className="w-full flex pt-3 p-4">
        <Button
          name="trigger"
          size="medium"
          onClick={() => setShowLiquidateModal(true)}
          value={"Login"}
          loading={false}
        >
          Liquidate
        </Button>
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
      </div>
    </div>
  );
};

export default CommissionOverviewCard;
