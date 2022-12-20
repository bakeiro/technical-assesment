import { Link } from "react-router-dom";

export default function Navbar() {
  return <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-gray-600 text-sm shadow-sm py-2.5 sm:py-4 lg:pl-64">
    <nav className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8" aria-label="Global">
      <div className="mr-5 lg:mr-0 flex">
        <img className="inline-block mr-4" src="../www/logo-umpa-loompa.png" height={40} width={40} />
        <Link className="flex-none text-xl font-semibold dark:text-white" to={"/"}>Oompas Loompa's Crew</Link>
      </div>
    </nav>
  </header>
}