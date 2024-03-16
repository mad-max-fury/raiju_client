import { Link } from "react-router-dom";
import { LockedIcon } from "../../../assets/svg";
import MessageIcon from "../../../assets/svg/messageIcon";
import PhoneIcon from "../../../assets/svg/phoneIcon";
import UserIcon from "../../../assets/svg/userIcon";
import AuthLayout from "../../../layouts/authLayout";
import { Button } from "../../../uiElements/button";
import { CheckBox } from "../../../uiElements/checkbox";
import { Input } from "../../../uiElements/input";

const Register = () => {
  return (
    <AuthLayout
      heading="Connecting you to  power"
      subHeading={`"We provide reliable bill payment solutions tailored to your needs. Experience seamless services with our user-friendly platform."`}
      title={`Let's get you on board!`}
      subTitle={`“Join Us and Power Up Your Experience!”`}
      footerLink="/"
      footerText="Already have an account?"
      footerLinkText=" Sign in"
    >
      <div className=" flex flex-col gap-3">
        <Input
          icon1={<UserIcon />}
          name="fullname"
          placeholder="Enter full name"
        />
        <Input icon1={<UserIcon />} name="username" placeholder="Username" />
        <Input
          icon1={<MessageIcon />}
          name="email"
          placeholder="Email"
          type="email"
        />
        <Input
          icon1={<PhoneIcon />}
          name="phone"
          placeholder="Phone number"
          type="phone"
        />

        <Input
          icon1={<LockedIcon />}
          name="password"
          placeholder="Password"
          type="password"
        />
        <Input
          icon1={<LockedIcon />}
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
        />
        <CheckBox name="rememberMe">
          {
            <div>
              I hereby agree with the{" "}
              <b>
                <Link to={"/terms_and_conditions"}>Terms & Conditions</Link>
              </b>
            </div>
          }
        </CheckBox>
        <span className="mt-16">
          <Button name="Submit" size="medium" value={"Login"} loading={false}>
            Create account
          </Button>
        </span>
      </div>
    </AuthLayout>
  );
};

export default Register;
