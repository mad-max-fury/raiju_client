import { useReactToPrint } from "react-to-print";
import { ITransaction } from "../../../app/slices/transactionSlice";
import { logoSmall } from "../../../assets/images";
import { formatCurrency } from "../../../utils/helpers";
import Modal from "../../Modal";
import { Button } from "../../button";
import { Typography } from "../../typography";
import { useRef } from "react";

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  onClick: () => void;
  transaction: Partial<ITransaction>;
};

const pageStyle = `
@page {
size: 13mm x 22mm;

}
 



`;

const PrintTransactionDetailsReceipt = ({
  show,
  setShow,
  onClick,
  transaction,
}: Props) => {
  const recieptRef = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Transaction History Raiju",
    content: () => recieptRef.current,
    pageStyle: pageStyle,
  });

  return (
    <Modal
      open={show}
      setOpen={setShow}
      size="lg"
      customClassName="max-w-[550px]"
    >
      <div className="h-fit relative">
        <div className="h-fit" ref={recieptRef}>
          <header className="w-full flex items-center flex-col gap-3">
            <img src={logoSmall} alt="logo" className="h-[40px] w-[40px] " />
            <Typography variant="h5">Raiju Capital Limited</Typography>
            <div className="flex gap-2 w-[80%] flex-col mb-6 mt-2">
              <div className="flex items-start gap-2 mx-auto">
                <Typography variant="h6" color="gray-1">
                  Address:
                </Typography>
                <Typography variant="body-s" color="gray-1">
                  Plot 76, Maryland Avenue, of Idanre
                  <br /> hills road, Lagos Nigeria.
                </Typography>
              </div>
              <div className="flex items-start gap-4 mx-auto">
                <Typography variant="h6" color="gray-1">
                  Tel:
                </Typography>
                <Typography variant="body-s" color="gray-1">
                  +234 9037703994
                </Typography>
              </div>
            </div>
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
               
                value: formatCurrency(Number(transaction?.customerarrears ?? 0), true),
              },
            ].map((paymentDetails) => (
              <div className="w-full flex justify-between items-start">
                <b>
                  <Typography
                    variant="body-r"
                    customClassName=" text-[#8e8b8b]"
                  >
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
                  <Typography
                    variant="body-r"
                    customClassName=" text-[#8e8b8b]"
                  >
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
              Dear esteemed customer, handle receipt with care and do not
              misplace token before use. Thank you for using Raiju Capital
              Limited
            </Typography>
          </div>
        </div>
        <div className="w-full flex justify-end  items-center gap-3 sticky bg-white py-4 bottom-0 left-0">
          <Button size={"sm"} onClick={() => setShow(true)}>
            <Typography variant="body-r"> Close</Typography>
          </Button>
          <Button
            size={"sm"}
            onClick={handlePrint}
            customClassName="bg-blue-500"
          >
            <Typography variant="body-r"> Print</Typography>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default PrintTransactionDetailsReceipt;
