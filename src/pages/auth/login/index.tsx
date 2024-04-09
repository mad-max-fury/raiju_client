import { useNavigate } from "react-router-dom";
import { LockedIcon } from "../../../assets/svg";
import UserIcon from "../../../assets/svg/userIcon";
import AuthLayout from "../../../layouts/authLayout";
import { Button } from "../../../uiElements/button";
import { CheckBox } from "../../../uiElements/checkbox";
import { Input } from "../../../uiElements/input";
import { ApplicationRoutes } from "../../../utils/enums";
import { FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  LoginCredentials,
  useGetUserProfileQuery,
  useLoginMutation,
} from "../../../app/slices/authUserSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthToken, setUser } from "../../../app/slices/authsplice";
import { HttpStatus } from "../../../utils/errors";
import PageLoader from "../../../uiElements/pageLoader";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  rememberMe: Yup.boolean(),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const [login, { isLoading, isSuccess }] = useLoginMutation();
  const {
    data,
    isFetching,
    isError,
    isSuccess: isFetched,
  } = useGetUserProfileQuery(undefined, {
    skip: !isSuccess,
  });

  const onSubmit = async (data: LoginCredentials) => {
    try {
      const res = await login(data).unwrap();
      if (res.statusCode === HttpStatus.OK) {
        dispatch(setAuthToken(res.data));
        toast.success(res?.message ?? "Login successful");
      }
    } catch (error) {
      if (!error) {
        toast.error("Something went wrong, check your network");
      }
      // @ts-expect-error
      if (error?.status === HttpStatus.BAD_REQUEST) {
        // @ts-expect-error
        toast.error(error?.data?.message);
      }
    }
  };

  useEffect(() => {
    if (isFetched && data.data) {
      dispatch(setUser(data?.data));
      navigate(ApplicationRoutes.DASHBOARD_HOME);
      toast.success("user logged in");
    }
  }, [isFetched, isSuccess]);

  if (isFetching) {
    return (
      <div className="w-screen h-screen">
        <PageLoader />
      </div>
    );
  }
  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <AuthLayout
      heading="Welcome back, valued user!"
      subHeading="Enter your login information to manage your bill and utility payments. Let's get you powered up with energy."
      title="Welcome back!"
      subTitle="Login to Manage Your Electricity Account"
      footerLink="/register"
      footerText="Don't have an account?"
      footerLinkText=" Sign Up"
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className=" flex flex-col gap-3 mmd:px-6">
            <Input
              icon1={<UserIcon />}
              name="email"
              placeholder="Email"
              register={methods.register}
            />
            <Input
              icon1={<LockedIcon />}
              name="password"
              placeholder="Password"
              type="password"
              register={methods.register}
            />
            <CheckBox name="rememberMe" label="Remember me" />
            <Button
              name="Submit"
              size="medium"
              value="Login"
              type="submit"
              loading={isLoading}
            >
              {isLoading ? "Logging In..." : "Login"}
            </Button>
          </div>
        </form>
      </FormProvider>
    </AuthLayout>
  );
};

export default Login;
