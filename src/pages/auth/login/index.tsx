import AuthLayout from "../../../layouts/authLayout";
import { Button } from "../../../uiElements/button";
import { Input } from "../../../uiElements/input";

const Login = () => {
  return (
    <AuthLayout>
      <div className=" flex flex-col gap-3">
        <Input name="name" placeholder="Enter your name" />

        <Input name="name" placeholder="Enter your name" />
        <span className="mt-3">
          <Button name="Submit" size="medium" value={"Login"} loading={false}>
            Login
          </Button>
        </span>
      </div>
    </AuthLayout>
  );
};

export default Login;
