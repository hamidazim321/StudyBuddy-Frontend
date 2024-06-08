import AppBanner from "../components/AppBanner";
import Logo from "../assets/SBLogo.png";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Auth() {
  const location = useLocation();

  const removeTrailingSlash = (path: string): string =>
    path.endsWith("/") ? path.slice(0, -1) : path;

  const [path, setPath] = useState<string>(
    removeTrailingSlash(location.pathname)
  );

  useEffect(() => {
    setPath(removeTrailingSlash(location.pathname));
  }, [location.pathname]);

  return (
    <main className="flex flex-col gap-5 md:gap-0 md:grid md:grid-cols-2 min-h-screen bg-Main">
      <section className="flex flex-col md:justify-around md:items-center p-4 order-2 md:order-1">
        <div className="hidden md:flex flex-col justify-around grow ">
          <img src={Logo} />
          {path == "/Auth" && (
            <h1 className="text-2xl text-center">
              A smart solution for your study goals and keeping yourself
              accountable
            </h1>
          )}
        </div>
        <div className="w-full">
          <Outlet />
        </div>
        <div
          className={`md:w-1/2 flex flex-col ${
            path !== "/Auth" ? "hidden" : "block"
          }`}
        >
          <NavLink
            to="/Auth/login"
            className="bg-blue-600 text-center text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full"
          >
            Login
          </NavLink>
          <NavLink
            to="/Auth/signup"
            className="bg-blue-600 text-center text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full"
          >
            Sign Up
          </NavLink>
        </div>
      </section>
      <section
        className={`${
          path !== "/Auth" ? "hidden md:flex" : ""
        } flex p-4 md:p-20 bg-Secondary order-1 md:order-2`}
      >
        <AppBanner />
      </section>
    </main>
  );
}
