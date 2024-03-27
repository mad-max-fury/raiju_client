import TableComp from "../../../uiElements/table";
import { transactionsColumn } from "../../../uiElements/table/columns";
import { transactsData } from "../../../mocks/transactions";

const TransactionHistory = () => {
  return (
    <div className="w-full ">
      <TableComp
        withSearch
        withPagination
        data={transactsData}
        columns={transactionsColumn}
      />
    </div>
  );
};

export default TransactionHistory;
