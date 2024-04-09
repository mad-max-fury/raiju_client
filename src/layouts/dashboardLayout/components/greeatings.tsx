import React from "react";
import { isBefore } from "date-fns";
import { Typography } from "../../../uiElements/typography";

interface GreetingComponentProps {
  primaryContactFirstName: string;
}

const GreetingComponent: React.FC<GreetingComponentProps> = ({
  primaryContactFirstName,
}) => {
  // Get the current date
  const currentDate = new Date();

  // Determine the appropriate greeting based on the user's local time
  let greeting = "";
  const currentHour = currentDate.getHours();
  if (isBefore(currentHour, 12)) {
    greeting = "Good Morning";
  } else if (isBefore(currentHour, 18)) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <Typography variant="h5" color="gray-1">
      {greeting}, {primaryContactFirstName}
    </Typography>
  );
};

export default GreetingComponent;
