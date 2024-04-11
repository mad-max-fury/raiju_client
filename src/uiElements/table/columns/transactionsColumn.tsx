import { ColumnDef } from "@tanstack/react-table";
import { formatCurrency, generateColors } from "../../../utils/helpers";
import { Typography } from "../../typography";
import { ITransaction } from "../../../app/slices/transactionSlice";
import Dots from "../../../assets/svg/dots";
import cn from "../../../utils/common";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Modal from "../../Modal";
import ViewTransactionDetails from "../modals/viewTransactionDetails";
import PrintTransactionDetailsReceipt from "../modals/printTransactionReceipt";
export const statusColors = {
  pending: "#FFAA054A", // yellow
  success: "#F2FFF0", // green
  failed: "#FE343426", // Red
};
export const textStatusColors = {
  pending: "#cd7d0d", // yellow
  success: "#27CE76", // green
  failed: "#C61433", // Red
};
const columns: ColumnDef<Partial<ITransaction>>[] = [
  {
    accessorKey: "provider",
    header: () => <div className="text-start pl-6">Provider</div>,
    cell: ({ row }) => {
      const transaction = row.original;
      const time = new Date(transaction?.createdat ?? "").toDateString();
      const { color, background } = generateColors();
      return (
        <div className="flex items-center gap-2 w-max">
          <div
            className=" h-[40px] w-[40px] uppercase flex items-center justify-center font-bold  text-center rounded-full"
            style={{ background, color, textShadow: "0px 0px 1px #000" }}
          >
            <span> {transaction?.disco?.slice(0, 2)}</span>
          </div>
          <div className="flex flex-col items-start ">
            <Typography variant="body-r" color="gray-1">
              {transaction?.disco}
            </Typography>
            <small className="text-xs  text-secondary">{time}</small>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "createdat",
    header: () => <div className="text-start sr-only"></div>,
    cell: ({ row }) => {
      const transaction = row.original;

      return (
        <div className="sr-ony w-0 h-0 overflow-hidden">
          {transaction.createdat}
        </div>
      );
    },
  },
  {
    accessorKey: "product",
    header: () => <div className="text-start">Product</div>,
    cell: ({ row }) => {
      const transaction = row.original;
      return (
        <Typography variant="body-s" color="gray-1">
          <span className="w-max"> {transaction?.product}</span>
        </Typography>
      );
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-start">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      return (
        <Typography variant="body-s" color="gray-1">
          {formatCurrency(amount)}
        </Typography>
      );
    },
  },
  {
    accessorKey: "transaction_id",
    header: () => <div className="text-start">Transaction ID</div>,
    cell: ({ row }) => {
      const transaction = row.original;
      return (
        <Typography variant="body-s" color="gray-1">
          {transaction?.transaction_id}
        </Typography>
      );
    },
  },
  {
    accessorKey: "beneficiary",
    header: () => <div className="text-start">Beneficiary</div>,
    cell: ({ row }) => {
      const transaction = row.original;
      return (
        <Typography variant="body-s" color="gray-1">
          {transaction?.meternumber}
        </Typography>
      );
    },
  },
  {
    accessorKey: "commission",
    header: () => <div className="text-start">Commission</div>,
    cell: ({ row }) => {
      const transaction = row.original;
      return (
        <Typography
          variant="body-s"
          customClassName="text-center "
          color="gray-1"
        >
          {formatCurrency(Number(transaction?.commission), true)}
        </Typography>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-start px-4">Status</div>,
    cell: ({ row }) => {
      const transaction = row.original;
      const status = transaction.status as "pending" | "success" | "failed";
      const backgroundColor = statusColors[status ?? "pending"] || "#000";
      const color = textStatusColors[status ?? "pending"] || "#000";
      return (
        <div
          style={{
            color,
            backgroundColor,
          }}
          className={cn(
            "flex items-center justify-center w-full p-2 text-xs font-semibold text-center rounded-md "
          )}
        >
          <span>{status}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: () => <div className="text-start"></div>,
    cell: ({ row }) => {
      const transaction = row.original;
      const [showDialog, setShowDialog] = useState<"view" | "print" | null>(
        null
      );
      return (
        <>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="">
                <button className="flex items-center gap-2 w-max bg-transparent hover:bg-white-lilac-50 py-2 transition-all ease-in-out duration-100">
                  <Dots />
                </button>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1 w-full">
                  {["View details", "Print receipt "].map((item) => (
                    <Menu.Item key={item}>
                      {({ active }) => (
                        <button
                          onClick={() =>
                            setShowDialog(
                              item === "View details" ? "view" : "print"
                            )
                          }
                          className={cn(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm w-full"
                          )}
                        >
                          {item}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {showDialog === "view" && (
            <ViewTransactionDetails
              transaction={transaction}
              show={showDialog === "view"}
              setShow={() => setShowDialog(null)}
              onClick={() => setShowDialog("print")}
            />
          )}
          {showDialog === "print" && (
            <PrintTransactionDetailsReceipt
              transaction={transaction}
              show={showDialog === "print"}
              setShow={() => setShowDialog(null)}
              onClick={() => null}
            />
          )}
        </>
      );
    },
  },
];

export default columns;
