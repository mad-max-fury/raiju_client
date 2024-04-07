import React, { useState } from "react";
import { Input } from "../../../../uiElements/input";
import SelectComp from "../../../../uiElements/select";
import { Button } from "../../../../uiElements/button";
import TransactionConfirmationModal from "./modals/transactionConfirmationModal";
import VerifyPinModal from "./modals/verifyPinModal";

type Props = {};

const ElectricityForm = (props: Props) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [verifyPin, setVerifyPin] = useState(false);

  const onConfirmed = () => {
    setShowConfirmationModal(false);
    setVerifyPin(true);
  };
  const handleVerify = () => {
    setVerifyPin(false);
  };
  return (
    <>
      <div className="gap-4 flex-col flex">
        <Input
          name="name"
          label="Billing Wallet ID"
          placeholder="8937592571"
          type={"text"}
          variant="plain"
        />
        <div className="h-[75px]">
          <SelectComp
            label="Service Provider"
            name="product"
            height={60}
            id="product"
            options={[
              {
                value: "eedc",
                label: "Enugu Electricity Distribution Company",
              },
              { value: "daily", label: "Daily" },
              { value: "weekly", label: "Weekly" },
            ]}
          />
        </div>
        <div className="h-[75px]">
          <SelectComp
            label="Service Provider"
            name="product"
            height={60}
            id="product"
            options={[
              {
                value: "eedc",
                label: "Enugu Electricity Distribution Company",
              },
              { value: "daily", label: "Daily" },
              { value: "weekly", label: "Weekly" },
            ]}
          />
        </div>
        <Input
          name="name"
          label="Enter  Liquidity Amount"
          placeholder="0.00"
          type={"text"}
          variant="plain"
        />{" "}
        <Input
          name="name"
          label="Enter  Liquidity Amount"
          placeholder="0.00"
          type={"text"}
          variant="plain"
        />
        <Input
          name="name"
          label="Enter  Liquidity Amount"
          placeholder="0.00"
          type={"text"}
          variant="plain"
        />
        <Button
          customClassName="mt-4"
          name="Submit"
          size="medium"
          value={"Login"}
          loading={false}
          onClick={() => setShowConfirmationModal(true)}
        >
          Pay
        </Button>
      </div>
      <TransactionConfirmationModal
        show={showConfirmationModal}
        setShow={setShowConfirmationModal}
        onClick={onConfirmed}
      />
      <VerifyPinModal
        show={verifyPin}
        setShow={setVerifyPin}
        onClick={handleVerify}
      />
    </>
  );
};

export default ElectricityForm;
