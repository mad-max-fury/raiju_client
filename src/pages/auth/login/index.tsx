import { LockedIcon } from "../../../assets/svg";
import UserIcon from "../../../assets/svg/userIcon";
import AuthLayout from "../../../layouts/authLayout";
import { Button } from "../../../uiElements/button";
import { CheckBox } from "../../../uiElements/checkbox";
import { Input } from "../../../uiElements/input";

const Login = () => {
  return (
    <AuthLayout
      heading="Welcome back, valued user!"
      subHeading={`"Enter your login information to manage your bill and utility payments. Let's get you powered up with energy."`}
      title="Welcome back!"
      subTitle="“Login to Manage Your Electricity Account”"
      footerLink="/register"
      footerText="Don't have an account?"
      footerLinkText=" Sign Up"
    >
      <div className=" flex flex-col gap-3">
        <Input icon1={<UserIcon />} name="name" placeholder="Username" />
        <Input
          icon1={<LockedIcon />}
          name="name"
          placeholder="Password"
          type="password"
        />
        <CheckBox name="rememberMe" label="Remember me" />
        <span className="mt-16">
          <Button name="Submit" size="medium" value={"Login"} loading={false}>
            Login
          </Button>
        </span>
      </div>
    </AuthLayout>
  );
};

export default Login;
