import { apiSlice } from "../../api/apiSlice";
export interface MetaData {
  page: number;
  totalRecords: number;
  limit: string;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}
export interface ITransaction {
  id: number;
  merchant_id: string;
  customername: string;
  address: string;
  meternumber: string;
  accountnumber: string;
  businessunit: string;
  servicehub: string;
  minimumpurchase: number;
  tariffcode: string;
  customerarrears: number;
  tariff: string;
  kct1: string;
  kct2: string;
  ismd: boolean;
  status: string;
  units?: string;
  token: string;
  disco_reference: string;
  amount: string;
  customerphone: string;
  disco: string;
  metercategory: string;
  commissionapplied: number;
  merchantreference: string;
  createdat: string;
  updatedat: string;
  transaction_id: string;
  remark: string;
  product: string;
  commission: number;
}

export type ITransactions = ITransaction[];
export interface Data {
  transactions: ITransactions;
  metaData: MetaData;
}
export interface getTransactionResponse {
  statusCode: number;
  message: string;
  data: Data;
}
interface filterProps {
  page: number;
}
export interface Wallet {
  main_bal: string;
  commission_bal: string;
}

export interface BalanceMetric {
  total_amount_month: number;
  total_amount_week: number;
  total_amount_day: number;
}
interface getBalancesResponse {
  statusCode: number;
  message: string;
  data: {
    wallet: Wallet[];
    balanceMetrics: BalanceMetric[];
  };
}

export const transactionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRecentTransaction: builder.query<getTransactionResponse, void>({
      query: () => ({
        url: "/merchant/listTransactions?limit=10",
        method: "GET",
      }),

      keepUnusedDataFor: 5,
    }),
    getRecentTransactionWithFilters: builder.query<
      getTransactionResponse,
      filterProps
    >({
      query: ({ page }) => ({
        url: `/merchant/listTransactions?limit=20&page=${page}`,
        method: "GET",
      }),

      keepUnusedDataFor: 5,
    }),
    getBalances: builder.query<getBalancesResponse, void>({
      query: () => ({
        url: `/merchant/dashboard/analytics`,
        method: "GET",
      }),

      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetRecentTransactionQuery,
  useGetRecentTransactionWithFiltersQuery,
  useGetBalancesQuery,
} = transactionApiSlice;
