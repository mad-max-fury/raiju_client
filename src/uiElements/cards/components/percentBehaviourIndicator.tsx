export const statusColors = {
  success: "#F2FFF0", // green
  failed: "#FE343426", // Red
};
export const textStatusColors = {
  success: "#27CE76", // green
  failed: "#C61433", // Red
};
const PercentBehaviourIndicator = ({ percent }: { percent: number }) => {
  const color = textStatusColors[percent < 0 ? "failed" : "success"];
  const backgroundColor = statusColors[percent > -1 ? "success" : "failed"];
  const plusOrMinus = percent < 0 ? "" : "+";
  return (
    <div
      style={{
        color,
        backgroundColor,
      }}
      className="flex items-center justify-center w-fit px-4 py-1 text-xs font-semibold text-center rounded-md "
    >
      <span>
        {plusOrMinus}
        {percent}%
      </span>
    </div>
  );
};

export default PercentBehaviourIndicator;
