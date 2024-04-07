import Modal from "../../../../../uiElements/Modal";
import { Button } from "../../../../../uiElements/button";
import { Typography } from "../../../../../uiElements/typography";
import { formatCurrency } from "../../../../../utils/helpers";

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: () => void;
};

const TransactionConfirmationModal = ({ show, setShow, onClick }: Props) => {
  return (
    <Modal
      open={show}
      setOpen={setShow}
      size="lg"
      customClassName="max-w-[550px]"
    >
      <div className="h-fit ">
        <Typography variant="body-r" customClassName="mb-6">
          <b>Payment Details</b>
        </Typography>
        <div className="grid grid-cols-1 gap-4 border-y-2 border-dashed border-border pt-8 pb-12 mb-4 ">
          {[
            {
              name: "Service Provider",
              value: "Enugu Electricity Distribution Company",
            },
            {
              name: "Product",
              value: "Electricity",
            },
            {
              name: "Billing from",
              value: "8937592571",
            },
            {
              name: "Beneficiary",
              value: "45060385841",
            },
            {
              name: "Customer Name",
              value: "Welsh Bush",
            },
            {
              name: "Amount Paid",
              value: formatCurrency(4000),
            },
            {
              name: "Fee",
              value: formatCurrency(0, true),
            },
          ].map((paymentDetails) => (
            <div className="w-full flex justify-between items-start">
              <b>
                <Typography variant="body-r" customClassName=" text-[#8e8b8b]">
                  {paymentDetails.name}
                </Typography>
              </b>
              <span>
                <Typography
                  variant="body-r"
                  customClassName="text-end"
                  color="gray-1"
                >
                  {paymentDetails.value}
                </Typography>
              </span>
            </div>
          ))}
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

export default TransactionConfirmationModal;
