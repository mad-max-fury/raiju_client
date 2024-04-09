import { Typography } from "../../../uiElements/typography";
import HomeIcon from "../../../assets/svg/homeIcon";
import { Input } from "../../../uiElements/input";
import SelectComp from "../../../uiElements/select";
import ContactIcon from "../../../assets/svg/contactIcon";
import PersonalInfoIcon from "../../../assets/svg/personalInfoIcon";
import { Button } from "../../../uiElements/button";
import FileUploader from "../../../uiElements/fileUploader";

type Props = {};

const EditProfile = (props: Props) => {
  return (
    <div>
      <div className="w-full min-h-[calc(100vh_-_120px)] flex flex-col gap-8 bg-white my-[30px] p-4 rounded-lg">
        <FileUploader />
        <div className="flex flex-col gap-4 ">
          <header className="flex gap-2 items-center">
            <span>
              <PersonalInfoIcon />
            </span>
            <Typography variant="body-m" fontWeight={"medium"}>
              Personal Info
            </Typography>
          </header>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Input
              name="firstName"
              label="First name *"
              placeholder="Enter first name"
              type={"text"}
              variant="plain"
            />
            <Input
              name="middleName"
              label="Middle name *"
              placeholder="Enter middle name"
              type={"text"}
              variant="plain"
            />
            <Input
              name="lastName"
              label="Last name *"
              placeholder="Enter middle name"
              type={"text"}
              variant="plain"
            />
            <SelectComp
              label="Nationality *"
              name="nationalty"
              height={51}
              id="nationality"
              options={[
                {
                  value: "nigeria",
                  label: "Nigeria",
                },
                {
                  value: "ghana",
                  label: "Ghana",
                },
              ]}
            />
            <SelectComp
              label="State of origin *"
              name="state"
              height={51}
              id="state"
              options={[
                {
                  value: "enugu",
                  label: "Enugu",
                },
                {
                  value: "anambra",
                  label: "Anambra",
                },
              ]}
            />
            <SelectComp
              label="Local government area *"
              name="lga"
              height={51}
              id="lga"
              options={[
                {
                  value: "aninri",
                  label: "Aninri",
                },
                {
                  value: "agwu",
                  label: "Agwu",
                },
              ]}
            />
            <SelectComp
              label="Means of identification *"
              name="idMeans"
              height={51}
              id="idMeans"
              options={[
                {
                  value: "NIN",
                  label: "National identification",
                },
              ]}
            />
            <Input
              name="dOB"
              label="Date of birth"
              placeholder="DD/MM/YYYY"
              type={"date"}
              variant="plain"
            />
            <SelectComp
              label="Gender *"
              name="gender"
              height={51}
              id="gender"
              options={[
                {
                  value: "male",
                  label: "Male",
                },
                {
                  value: "female",
                  label: "Female",
                },
                {
                  value: "others",
                  label: "Others",
                },
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <header className="flex gap-2 items-center">
            <span>
              <ContactIcon />
            </span>
            <Typography variant="body-m" fontWeight={"medium"}>
              Contact Details
            </Typography>
          </header>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Input
              name="email"
              label="Email Address"
              placeholder="Enter your email"
              type={"email"}
              variant="plain"
            />{" "}
            <Input
              name="address"
              label="Home Address"
              placeholder="Enter your address"
              type={"text"}
              variant="plain"
            />{" "}
            <Input
              name="phoneNumber"
              label="Phone number *"
              placeholder="Enter your phone number"
              type={"number"}
              variant="plain"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <header className="flex gap-2 items-center">
            <span>
              <HomeIcon />
            </span>
            <Typography variant="body-m" fontWeight={"medium"}>
              Company Details
            </Typography>
          </header>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Input
              name="companyName"
              label="Company name"
              placeholder="Enter company name"
              type={"text"}
              variant="plain"
            />
            <Input
              name="officeAddress"
              label="Office Address"
              placeholder="Enter office address"
              type={"text"}
              variant="plain"
            />{" "}
            <Input
              name="CompanyEmail"
              label="Email Address"
              placeholder="Enter company email"
              type={"email"}
              variant="plain"
            />{" "}
            <Input
              name="phoneNumber"
              label="Phone number"
              placeholder="Enter phone number"
              type={"number"}
              variant="plain"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end items-center mb-10 gap-3">
        <Button variant={"outlined"} size={"sm"} fit>
          <Typography variant="body-r"> Cancel</Typography>
        </Button>
        <Button fit size={"sm"}>
          <Typography variant="body-r"> Save</Typography>
        </Button>
      </div>
    </div>
  );
};

export default EditProfile;
