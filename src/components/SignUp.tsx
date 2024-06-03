import Button from "./Button";
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";
import InputText from "./InputText";

export default function SignUp() {
  return (
    <div className="flex flex-col gap-8 items-center bg-transparent">
      <div className="flex flex-col gap-4 items-center w-full">
        <p className="font-semibold text-xl">Welcome To Study Buddy</p>
        <p className="text-md">Please create a new account</p>
      </div>
      <form className="flex flex-col gap-4 w-full">
        <InputText name="username" placeholder="username" required />
        <InputEmail name="email" required />
        <InputPassword name="password" required />
        <InputPassword
          name="password_confirmation"
          placeholder="confirm your password"
          required
        />
        <div className="w-full">
          <Button type="submit" title="Sign up" color={"bg-Purple"} />
        </div>
      </form>
    </div>
  );
}
