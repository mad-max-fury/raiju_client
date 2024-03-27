import { Typography } from "../typography";

import { IService } from "../../mocks/services";

const ServiceCard = ({ id, icon, name }: IService) => {
  return (
    <div className=" h-[118px] w-[112px] rounded-md flex items-center justify-center border-solid border-[#D7D7D740] border-2 flex-col gap-2 ">
      <div className="h-[40px] w-[40px]">
        <img src={icon} alt={name} className="h-full w-full object-contain" />
      </div>
      <Typography variant={"caption-s"} color={"gray-1"}>
        {name}
      </Typography>
    </div>
  );
};

export default ServiceCard;
