"use client";
import Link from "next/link";
import React from "react";
interface satu {
  judul: string;
}
export default function Navbar(props: satu) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { judul } = props;
  return (
    <>
    <div className="navbar">
      <nav
      data-aos="fade-down"
      data-aos-delay="500"
      data-aos-anchor-placement="top-center"
      className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="hilang text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
              halooo
            </div>
            <div className="muncul text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
              {judul}
            </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <h3>{judul}</h3>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link href="/">
                  <span className=" px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 ml-2">
                    Halaman 1
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/Halaman2">
                  <span className=" px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 ml-2">
                    Halaman 2
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
}
