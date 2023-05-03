import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  //   const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    function handleClickOutsideMenu(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [menuRef]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  //   const handleSearchInputChange = (
  //     event: React.ChangeEvent<HTMLInputElement>
  //   ) => {
  //     setSearchTerm(event.target.value);
  //   };

  //   const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     console.log(`Search submitted with term: ${searchTerm}`);
  //     setSearchTerm("");
  //   };

  return (
    <>
      <header className="p-6 mx-auto w-full">
        <nav className="flex flex-row items-center justify-between relative">
          {/* Logo */}
          <div className="basis-2/6  text-center text-xl flex items-center text-orange-400 italic font-semibold">
            <NavLink to="/">Coffee Style.</NavLink>
          </div>

          {/* Menu */}
          <div className="basis-3/6 hidden lg:flex lg:items-center lg:justify-between lg:gap-8 text-sm text-gray-500 font-medium">
            <NavLink to="/" className="tct-top-menu-items">
              Home
            </NavLink>
            <NavLink to="/about" className="tct-top-menu-items">
              Products
            </NavLink>
            <NavLink to="/contact" className="tct-top-menu-items">
              blog
            </NavLink>
            <NavLink to="/contact" className="tct-top-menu-items">
              about
            </NavLink>
            <NavLink to="/contact" className="tct-top-menu-items">
              contact
            </NavLink>
            <NavLink to="/contact" className="tct-top-menu-items">
              Thanh Truong
            </NavLink>
          </div>

          <div className="basis-3/6 lg:basis-1/6 flex justify-end lg:justify-start items-center ml-16 uppercase text-gray-500 font-medium">
            <div className="flex items-center justify-center">
              <BsBag size={20} />
              <span className="mx-2">Cart</span>
              <span className="text-sm rounded-full bg-orange-400 p-1 text-white">
                7
              </span>
            </div>
          </div>

          {/* Toggle Menu */}
          <button
            onClick={toggleNavbar}
            className="basis-1/6 lg:hidden flex items-center cursor-pointer px-3 sm:px-8"
          >
            <AiOutlineMenu size={25} />
          </button>

          {/* <div className=" flex md:hidden">
          <button
           
            type="button"
            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div> */}
        </nav>
      </header>
      <div
        ref={menuRef}
        className={`${
          isOpen ? "block" : "hidden"
        } w-[70vw] h-[40vh] bg-slate-50 absolute top-10 left-[15%] transition-all animate-slideDown z-10`}
      >
        <div className="p-7 flex flex-col items-center justify-center gap-2">
          <NavLink
            to="/"
            className="text-lg text-gray-500 font-semibold hover:text-gray-300 hover:scale-105"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-lg text-gray-500 font-semibold hover:text-gray-300 hover:scale-105"
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className="text-lg text-gray-500 font-semibold hover:text-gray-300 hover:scale-105"
          >
            blog
          </NavLink>
          <NavLink
            to="/contact"
            className="text-lg text-gray-500 font-semibold hover:text-gray-300 hover:scale-105"
          >
            about
          </NavLink>
          <NavLink
            to="/contact"
            className="text-lg text-gray-500 font-semibold hover:text-gray-300 hover:scale-105"
          >
            contact
          </NavLink>
          <NavLink
            to="/contact"
            className="text-lg text-gray-500 font-semibold hover:text-gray-300 hover:scale-105"
          >
            Thanh Truong
          </NavLink>
        </div>
      </div>
    </>
  );
}
export default Header;
