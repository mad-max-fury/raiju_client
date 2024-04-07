import React, { useState } from "react";
import { Typography } from "../../../../../uiElements/typography";
import { Button } from "../../../../../uiElements/button";
import Modal from "../../../../../uiElements/Modal";
import ReactOtpInput from "react-otp-input";
type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: () => void;
};

const VerifyPinModal = ({ show, setShow, onClick }: Props) => {
  const [otp, setOtp] = useState<string>("");
  const handleChange = (value: string) => {
    setOtp(value);
  };
  return (
    <Modal
      open={show}
      setOpen={setShow}
      size="lg"
      customClassName="max-w-[450px]"
    >
      <div className="h-fit ">
        <Typography variant="body-r" customClassName="mb-6">
          <b>Enter Transaction Pin</b>
        </Typography>
        <div className="flex w-full gap-4 border-y-2 border-dashed border-border pt-4 mb-4 ">
          <ReactOtpInput
            value={otp}
            onChange={handleChange}
            numInputs={4}
            renderInput={(props) => (
              <input {...props} className=" disabled:cursor-not-allowed" />
            )}
            shouldAutoFocus
            containerStyle={"opt-container"}
          />
        </div>
        <div className="w-full flex justify-end  items-center gap-3">
          <Button size={"medium"} onClick={onClick}>
            <Typography variant="body-r"> Continue</Typography>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default VerifyPinModal;
