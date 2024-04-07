import TableComp from "../../../uiElements/table";
import { transactionsColumn } from "../../../uiElements/table/columns";
import { transactsData } from "../../../mocks/transactions";
import { ApplicationRoutes } from "../../../utils/enums";
import TransactionOverview from "../../../uiElements/cards/transactionOverview";
import ServiceCard from "../../../uiElements/cards/serviceCard";
import { Typography } from "../../../uiElements/typography";
import { servicesData } from "../../../mocks/services";
import { transactionSummariesData } from "../../../mocks/transactionSummary";
import WalletCard from "../../../uiElements/cards/walletCard";
import CommissionOverviewCard from "../../../uiElements/cards/commissionOverviewCard";

const Home = () => {
  return (
    <div className="w-full ">
      <div className="flex w-full mt-6 gap-4 mxl:flex-wrap">
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex gap-4">
            <WalletCard />
            <CommissionOverviewCard />
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
        data={transactsData}
        columns={transactionsColumn}
      />
    </div>
  );
};

export default Home;
