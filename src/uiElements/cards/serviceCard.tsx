import { Typography } from "../typography";

import { IService } from "../../mocks/services";
import cn from "../../utils/common";
import { Link } from "react-router-dom";
import { ApplicationRoutes } from "../../utils/enums";

const ServiceCard = ({
  id,
  icon,
  name,
  isActive = false,
}: IService & {
  isActive: boolean;
}) => {
  return (
    <Link
      to={`${ApplicationRoutes.SERVICE_LINK}/${id}`}
      className={cn(
        " h-[118px] w-[112px] rounded-md flex items-center justify-center  flex-col gap-6 ",
        isActive
          ? "opacity-100 shadow-[0px_4px_4px_0px_#D7D7D740] ring-solid ring-1 ring-[#D7D7D740] "
          : "opacity-40 ring-solid ring-1 ring-[#D7D7D740] shadow-[0px_4px_4px_0px_#D7D7D740] cursor-not-allowed"
      )}
    >
      <div className="h-[40px] w-[40px]">
        <img src={icon} alt={name} className="h-full w-full object-contain" />
      </div>
      <Typography variant={"caption-s"} color={"gray-1"}>
        {name}
      </Typography>
    </Link>
  );
};

export default ServiceCard;
