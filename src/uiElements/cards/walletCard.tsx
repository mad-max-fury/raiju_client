import { Typography } from "../typography";
import { formatCurrency } from "../../utils/helpers";
import CopyIcon from "../../assets/svg/copyIcon";
import { walletNoMarkIcon } from "../../assets/images";
import EyeCloseIcon from "../../assets/svg/eyeCloseIcon";
import EyeOpenIcon from "../../assets/svg/eyeOpenIcon";
import { Tooltip } from "../tooltip";
import { useState } from "react";

type Props = {};

const WalletCard = (props: Props) => {
  const [showBalance, setShowBalance] = useState(false);
  return (
    <div className=" w-[334px] h-fit flex flex-col justify-between  bg-[#1B1B1E] rounded-lg">
      <div className="w-full flex flex-col gap-12 p-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              src={walletNoMarkIcon}
              alt="wallet"
              className="h-[40px] w-[40px] object-contain"
            />

            <Typography variant="body-m" color="white">
              Wallet Balance
            </Typography>
          </div>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="h-fit w-[40px] flex items-center "
          >
            {showBalance ? (
              <>
                <span
                  data-tooltip-id="ICON-WALLET-BTN"
                  data-tooltip-content="Show wallet balance"
                >
                  <EyeCloseIcon />
                </span>
              </>
            ) : (
              <>
                <span
                  data-tooltip-id="ICON-WALLET-BTN"
                  data-tooltip-content="Hide wallet balance"
                >
                  <EyeOpenIcon />
                </span>
              </>
            )}
            <Tooltip id="ICON-WALLET-BTN" />
          </button>
        </div>
        <Typography variant={"h5"} color="white">
          {!showBalance
            ? formatCurrency(21497965.0)
            : "*************************"}
        </Typography>
      </div>
      <div className=" bg-[#262626] flex  p-4 rounded-b-lg  justify-between">
        <div>
          <Typography
            variant="caption-s"
            customClassName="text-white text-[10px]"
          >
            Service Provider
          </Typography>
          <Typography
            variant="body-r"
            customClassName="text-white text-sm mt-1"
          >
            Providus Bank
          </Typography>
        </div>
        <div className="flex items-end gap-2">
          <div>
            <Typography
              variant="caption-s"
              customClassName="text-white text-[10px]"
            >
              Wallet Number
            </Typography>
            <Typography
              variant="body-r"
              customClassName="text-white mt-1 text-sm"
            >
              8937592571
            </Typography>
          </div>
          <CopyIcon />
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
