import ProgressDownIcon from "../../../assets/svg/progressDownIcon";
import ProgressUpIcon from "../../../assets/svg/progressUpIcon";
import { Typography } from "../../typography";

const ArrowBehaviourIndicator = ({
  percent,
  remark,
}: {
  percent: number;
  remark: string;
}) => {
  const isDown = percent < 0;
  const plusOrMinus = isDown ? "" : "+";
  return (
    <div className="flex items-center gap-2">
      <span>{isDown ? <ProgressDownIcon /> : <ProgressUpIcon />}</span>
      <Typography
        variant="caption-s"
        customClassName="text-gray-400"
      >{`${plusOrMinus}${percent} % ${remark}`}</Typography>
    </div>
  );
};

export default ArrowBehaviourIndicator;
