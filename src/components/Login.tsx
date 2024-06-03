import Button from "./Button";
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";

export default function Login() {
  return (
    <div className="flex flex-col gap-8 items-center bg-transparent">
      <div className="flex flex-col gap-4 items-center w-full">
        <p className="font-semibold text-xl">Welcome Back</p>
        <p className="text-md">Please login to your account</p>
      </div>
      <form className="flex flex-col gap-4 w-full">
        <InputEmail name="email" required />
        <InputPassword name="password" required />
      </form>
      <div className="w-full">
        <Button type="submit" title="Login" color={"bg-Purple"} />
      </div>
    </div>
  );
}
