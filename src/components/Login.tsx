import Button from "./Button";
import InputEmail from "./InputEmail";

export default function Login() {
  return (
    <main className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <p>Welcome Back</p>
        <p>Please login to your account</p>
      </div>
      <form className="flex flex-col gap-4">
        <InputEmail name="email" required />
        <InputEmail name="email" required />
      </form>
      <div>
        <Button type="submit" title="Login" color={"bg-purple-600"} />
      </div>
    </main>
  );
}
