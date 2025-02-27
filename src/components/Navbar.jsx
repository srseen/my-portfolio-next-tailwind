"use client";

import { useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import LogoIcon from "../../public/Logo.svg";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-color text-color p-2">
      <div className="mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src={LogoIcon}
            alt="Logo"
            width={40}
            height={40}
            className="bg-icon cursor-pointer"
          />
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black dark:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex md:items-center md:space-x-6 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              href="/"
              className="text-black dark:text-white block py-2 md:py-0"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-black dark:text-white block py-2 md:py-0"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              className="text-black dark:text-white block py-2 md:py-0"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-black dark:text-white block py-2 md:py-0"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-black dark:text-white block py-2 md:py-0"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-black dark:text-white block py-2 md:py-0"
            >
              Contact
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
