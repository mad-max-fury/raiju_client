import {
  serviceAirtimeIcon,
  serviceBettingIcon,
  serviceDataIcon,
  serviceInsuranceIcon,
  serviceUtilityIcon,
} from "../assets/images";
export interface IService {
  id: number;
  name: string;
  icon: string;
}

export const servicesData: IService[] = [
  {
    id: 1,
    name: "Utility",
    icon: serviceUtilityIcon,
  },
  {
    id: 2,
    name: "Data",
    icon: serviceDataIcon,
  },
  {
    id: 3,
    name: "Insurance",
    icon: serviceInsuranceIcon,
  },
  {
    id: 4,
    name: "Airtime",
    icon: serviceAirtimeIcon,
  },
  {
    id: 5,
    name: "Betting",
    icon: serviceBettingIcon,
  },
];
