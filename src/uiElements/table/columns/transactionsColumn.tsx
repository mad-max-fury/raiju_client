import { ColumnDef } from "@tanstack/react-table";
import { ITransaction } from "../../../mocks/transactions";
import { formatCurrency, generateColors } from "../../../utils/helpers";
import { Typography } from "../../typography";

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
            <span> {transaction?.provider?.slice(0, 2)}</span>
          </div>
          <div className="flex flex-col items-start ">
            <Typography variant="body-r" color="gray-1">
              {transaction?.provider}
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
          {transaction?.beneficiary}
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
          {formatCurrency(Number(transaction?.commission))}
        </Typography>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-start px-4">Status</div>,
    cell: ({ row }) => {
      const transaction = row.original;
      const { status } = transaction;
      const backgroundColor = statusColors[status ?? "pending"] || "#000";
      const color = textStatusColors[status ?? "pending"] || "#000";
      return (
        <div
          style={{
            color,
            backgroundColor,
          }}
          className="flex items-center justify-center w-full p-2 text-xs font-semibold text-center rounded-md "
        >
          <span>{status}</span>
        </div>
      );
    },
  },
];

export default columns;
