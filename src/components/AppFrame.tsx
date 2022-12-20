import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

export default function AppFrame() {
  return <>
    <Navbar />
    <div className="w-full pt-10 px-4 sm:px-6 md:px-8">
      <main>
        <Outlet />
      </main>
    </div>
  </>
}