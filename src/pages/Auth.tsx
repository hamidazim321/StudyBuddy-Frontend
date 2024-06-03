import AppBanner from "../components/AppBanner";
import Button from "../components/Button";
import Logo from "../assets/SBLogo.png";

export default function Auth() {
  return (
    <main className="flex flex-col gap-5 md:gap-0 md:grid md:grid-cols-2 md:min-h-screen bg-Main">
      <section className="order-2 md:order-1 flex flex-col md:justify-around md:items-center">
        <div className="hidden md:block">
          <img src={Logo} />
        </div>
        <div className="md:w-1/2">
          <Button title="Login" color="bg-blue-600" type="button" />
          <Button title="SignUp" color="bg-blue-600" type="button" />
        </div>
      </section>
      <section className="border-2 order-1 md:order-2 flex p-4 md:p-20 bg-Secondary">
        <AppBanner />
      </section>
    </main>
  );
}
