import { ITransaction } from "../../../app/slices/transactionSlice";
import TFailed from "../../../assets/svg/tFailed";
import TPending from "../../../assets/svg/tPending";
import TSucessIcon from "../../../assets/svg/tSucess";
import { formatCurrency } from "../../../utils/helpers";
import Modal from "../../Modal";
import { Button } from "../../button";
import { Typography } from "../../typography";

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: () => void;
  transaction: Partial<ITransaction>;
};

const ViewTransactionDetails = ({
  show,
  setShow,
  onClick,
  transaction,
}: Props) => {
  return (
    <Modal
      open={show}
      setOpen={setShow}
      size="lg"
      customClassName="max-w-[550px]"
    >
      <div className="h-fit relative ">
        <header className="w-full flex items-center flex-col gap-3">
          {transaction.status === "success" ? (
            <TSucessIcon />
          ) : transaction.status === "failed" ? (
            <TFailed />
          ) : (
            <TPending />
          )}
          <Typography variant="body-s">
            Payment{" "}
            {transaction.status === "success"
              ? "Successful!"
              : transaction.status === "failed"
              ? "Failed"
              : "Pending"}
          </Typography>

          <Typography variant="h5" customClassName="mb-6">
            {formatCurrency(Number(transaction.amount))}
          </Typography>
        </header>
        <div className="border-y-2 border-dashed border-border py-3 ">
          <Typography align="center">TRANSACTION RECEIPT</Typography>
        </div>
        <div className="grid grid-cols-1 gap-4 border-b-2 border-dashed border-border pt-8 pb-8 mb-4 ">
          {[
            {
              name: "Token Number",
              value: transaction?.token,
            },
            {
              name: "Meter Number",
              value: transaction?.meternumber,
            },
            {
              name: "Customer Name",
              value: transaction?.customername,
            },
            {
              name: "Customer Phone",
              value: transaction?.customerphone,
            },
            {
              name: "Description",
              value: transaction?.remark,
            },
            {
              name: "Amount Paid",
              value: formatCurrency(Number(transaction.amount ?? 0), true),
            },
            {
              name: "Arrears",

              value: formatCurrency(
                Number(transaction?.customerarrears ?? 0),
                true
              ),
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
        <div className="grid grid-cols-1 gap-4 border-b-2 border-dashed border-border pt-8 pb-8 mb-4 ">
          {[
            {
              name: "Transaction ID",
              value: transaction?.transaction_id,
            },
            {
              name: "Status",
              value:
                transaction.status === "success"
                  ? "Successful!"
                  : transaction.status === "failed"
                  ? "Failed"
                  : "Pending",
            },
            {
              name: "Disco Ref",
              value: transaction?.disco_reference,
            },
            {
              name: "Api Ref",
              value: transaction?.merchantreference,
            },
            {
              name: "Merchant ID",
              value: transaction?.merchant_id,
            },
            {
              name: "Transaction Date",
              value: new Date(transaction?.createdat ?? "").toDateString(),
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
        <div className="mt-4 mb-6">
          <Typography variant="caption-s" align="center">
            Dear esteemed customer, handle receipt with care and do not misplace
            token before use. Thank you for using Raiju Capital Limited
          </Typography>
        </div>
        <div className="w-full flex justify-end  items-center gap-3">
          <Button size={"sm"} onClick={() => setShow(true)}>
            <Typography variant="body-r"> Close</Typography>
          </Button>
          <Button size={"sm"} onClick={onClick} customClassName="bg-blue-500">
            <Typography variant="body-r"> Print</Typography>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ViewTransactionDetails;
