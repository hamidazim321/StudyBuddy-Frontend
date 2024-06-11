import React, { useRef } from "react";
import Button from "./Button";
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";
import { loginUser } from "../redux/auth/authThunk";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

export default function Login() {
  const loginForm = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (loginForm.current) {
      const formData = new FormData(loginForm.current);
      dispatch(loginUser(formData));
    }
  };
  return (
    <div className="flex flex-col gap-8 items-center bg-transparent">
      <div className="flex flex-col gap-4 items-center w-full">
        <p className="font-semibold text-xl">Welcome Back</p>
        <p className="text-md">Please login to your account</p>
      </div>
      <form
        ref={loginForm}
        onSubmit={submitForm}
        className="flex flex-col gap-4 w-full"
      >
        <InputEmail name="email" required />
        <InputPassword name="password" required />
        <div className="w-full">
          <Button type="submit" title="Login" color={"bg-Purple"} />
        </div>
      </form>
    </div>
  );
}
