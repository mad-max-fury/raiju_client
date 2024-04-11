import TableComp from "../../../uiElements/table";
import { transactionsColumn } from "../../../uiElements/table/columns";
import { useGetRecentTransactionWithFiltersQuery } from "../../../app/slices/transactionSlice";
import PageLoader from "../../../uiElements/pageLoader";
import { useState } from "react";

const TransactionHistory = () => {
  const [page, setCurrentPage] = useState(1);
  const { data, isFetching, isError } = useGetRecentTransactionWithFiltersQuery(
    {
      page: page,
    },
    {
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
      skip: false,
    }
  );
  if (isFetching) {
    return (
      <div className="w-full h-screen">
        <PageLoader />
      </div>
    );
  }
  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div className="w-full ">
      <TableComp
        withSearch
        withPagination
        pageSize={25}
        data={data?.data?.transactions ?? []}
        metaData={data?.data?.metaData}
        columns={transactionsColumn}
        currentPage={page}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TransactionHistory;
