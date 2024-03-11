import { Button } from "../../../uiElements/button";
import { Input } from "../../../uiElements/input";

const Login = () => {
  return (
    <div className=" prose-slate">
      <p>dhhdhdhd</p>
      <Input name="name" placeholder="Enter your name" />
      <Button name="Submit" value={"Submit"} loading />
    </div>
  );
};

export default Login;
