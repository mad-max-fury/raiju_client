import React from "react";
import { Typography } from "../../../uiElements/typography";
import { useParams } from "react-router-dom";
import ElectricityForm from "./components/electricityForm";
const serviceForms = [
  {
    id: "1",
    name: "Electricity",
    form: <ElectricityForm />,
  },
];
const Services = () => {
  const params = useParams();
  const id = params?.id ?? "";
  const service = serviceForms.find((service) => service.id === id);
  if (!service) return <div>wrong id</div>;
  return (
    <main className="bg-white flex min-h-[calc(100vh_-_130px)] px-4 py-10 w-fit mt-[30px] rounded-md">
      <div className="max-w-md flex flex-col w-screen h-fit ">
        <header>
          <Typography
            variant="body-r"
            customClassName="font-semibold"
            color="gray-1"
          >
            {service?.name}
          </Typography>
        </header>
        <div className="mt-6">{service.form}</div>
      </div>
    </main>
  );
};

export default Services;
