import SBLogo from "../assets/SBLogo.png";
import InputEmail from "../components/InputEmail";

export default function Login() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 bg-BGlight">
      <header className="flex flex-col gap-2 items-center">
        <div className="p-2 w-full">
          <img src={SBLogo} alt="Study Buddy Logo" />
        </div>
        <div className="bg-BGdark w-full text-white flex flex-col gap-2 items-center">
          <p className="font-semibold text-2xl">Login</p>
          <p className="text-lg text-Text-Grey">
            Dont have an account?
            <a className="text-base ms-2">Create account</a>
          </p>
        </div>
      </header>
      <section className="bg-BGmedium">
        <form>
          <InputEmail id="email" required />
        </form>
      </section>
    </main>
  );
}
