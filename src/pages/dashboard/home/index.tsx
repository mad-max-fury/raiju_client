import TableComp from "../../../uiElements/table";
import { transactionsColumn } from "../../../uiElements/table/columns";
import { ApplicationRoutes } from "../../../utils/enums";
import TransactionOverview from "../../../uiElements/cards/transactionOverview";
import ServiceCard from "../../../uiElements/cards/serviceCard";
import { Typography } from "../../../uiElements/typography";
import { servicesData } from "../../../mocks/services";
import { ITransactionSummary } from "../../../mocks/transactionSummary";
import WalletCard from "../../../uiElements/cards/walletCard";
import CommissionOverviewCard from "../../../uiElements/cards/commissionOverviewCard";

import PageLoader from "../../../uiElements/pageLoader";
import {
  useGetBalancesQuery,
  useGetRecentTransactionQuery,
} from "../../../app/slices/transactionSlice";

const Home = () => {
  const { data: walletBalances, isFetching: gettingWallet } =
    useGetBalancesQuery();
  const { data, isFetching, isError } = useGetRecentTransactionQuery(
    undefined,
    {
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
    }
  );
  if (isFetching || gettingWallet) {
    return (
      <div className="w-full h-screen">
        <PageLoader />
      </div>
    );
  }
  if (isError) {
    return <div>Error...</div>;
  }
  const balanceMetrics = walletBalances?.data?.balanceMetrics ?? [];
  const walletBalance = walletBalances?.data?.wallet[0].main_bal;
  const commissionsBalance = walletBalances?.data?.wallet[0].commission_bal;

  const transactionSummariesData: ITransactionSummary[] = [
    {
      type: "daily",
      amount: balanceMetrics[0]?.total_amount_day,
      percentage: 0,
      remark: "Higher than yesterday",
    },
    {
      type: "weekly",
      amount: balanceMetrics[0]?.total_amount_month,
      percentage: 0,
      remark: "Lower than last week",
    },
    {
      type: "monthly",
      amount: balanceMetrics[0]?.total_amount_week,
      percentage: 0,
      remark: "Higher than last month",
    },
  ];
  return (
    <div className="w-full ">
      <div className="flex w-full mt-6 gap-4 mxl:flex-wrap">
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex gap-4">
            <WalletCard balance={Number(walletBalance)} />
            <CommissionOverviewCard balance={Number(commissionsBalance)} />
          </div>
          <div className="flex w-full  flex-col max-w-[681px] bg-white p-4 rounded-lg">
            <Typography variant="h6" customClassName="pl-2" color="gray-1">
              Services{" "}
            </Typography>
            <div className="w-full overflow-x-auto">
              <div className="w-fit flex gap-6  h-fit py-2 pl-2  ">
                {servicesData.map((service, index) => (
                  <ServiceCard
                    {...service}
                    key={index}
                    isActive={service.name === "Electricity"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 w-full">
          {transactionSummariesData.map((summary, index) => (
            <TransactionOverview {...summary} key={index} />
          ))}
        </div>
      </div>
      <TableComp
        heading="Recent Transactions"
        goToText="View history"
        goTo={ApplicationRoutes.DASHBOARD_TRANSACTIONS}
        data={data?.data?.transactions ?? []}
        columns={transactionsColumn}
        pageSize={30}
      />
    </div>
  );
};

export default Home;
