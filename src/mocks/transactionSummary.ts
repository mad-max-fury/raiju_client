export interface ITransactionSummary {
  type: "weekly" | "monthly" | "daily";
  amount: number;
  percentage: number;
  remark: string;
}
export const transactionSummariesData: ITransactionSummary[] = [
  {
    type: "daily",
    amount: 11497965,
    percentage: 15,
    remark: "Higher than yesterday",
  },
  {
    type: "weekly",
    amount: 1249796500,
    percentage: -4,
    remark: "Lower than last week",
  },
  {
    type: "monthly",
    amount: 114979650078,
    percentage: 25,
    remark: "Higher than last month",
  },
];
