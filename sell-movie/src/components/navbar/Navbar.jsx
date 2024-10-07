import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logoSellMovie.png";
export let Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <header className="bg-black sticky top-0 z-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link className="block text-teal-600" to="/">
              <div className="flex items-center ">
                <img src={Logo} className="h-16 w-16 object-cover" alt="" />
                <span className=" text-white   font-ju  ">Tenh Kh</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:block font-kh">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  {/* <li>
                    <Link
                      className="text-white md:text-xl transition hover:text-white/75"
                      to="/"
                    >
                      ទំព័រដើម
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      className="text-white md:text-xl transition hover:text-white/75"
                      to="/listing"
                    >
                      មុខទំនិញ
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white md:text-xl transition hover:text-white/75"
                      to="/prod"
                    >
                      អំពី
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white md:text-xl transition hover:text-white/75"
                      to="/api"
                    >
                      ផ្សេងៗ
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={toggleDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isDrawerOpen && (
          <div className="md:hidden bg-gray-800 text-white p-4 fixed top-0 left-0 w-full h-1/2 z-20">
            <div className="flex justify-end">
              <button
                className="text-gray-300 hover:text-white"
                onClick={toggleDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav aria-label="Mobile Menu" className="mt-8">
              <ul className="flex flex-col gap-6 text-lg">
                <li>
                  <Link
                    className="text-white transition hover:text-white/75 font-kh"
                    to="/"
                    onClick={toggleDrawer}
                  >
                    ទំព័រដើម
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-white/75 font-kh"
                    to="/listing"
                    onClick={toggleDrawer}
                  >
                    មុខទំនិញ
                  </Link>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-white/75 font-kh"
                    href="#"
                    onClick={toggleDrawer}
                  >
                    អំពី
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-white/75 font-kh"
                    href="#"
                    onClick={toggleDrawer}
                  >
                    ផ្សេងៗ
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
