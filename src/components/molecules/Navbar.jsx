"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@components/atoms/ThemeToggle";
import { LogoIcon } from "@/components/atoms/Icon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="primary-color p-2 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <Link href="/">
            <LogoIcon />
          </Link>
          <h1 className="text-lg font-bold">I'm Seereen Yangpaknam</h1>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-6">
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="/" className="block py-2 md:py-0 hover:scale-110">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className="block py-2 md:py-0 hover:scale-110"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="block py-2 md:py-0 hover:scale-110"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 md:py-0 hover:scale-110"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 md:py-0 hover:scale-110"
              >
                Contact
              </Link>
            </li>
            <ThemeToggle />
          </ul>
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
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
      </div>
      <ul className={`md:hidden ${isOpen ? "block" : "hidden"} mt-2 space-y-2`}>
        <li className="flex justify-end">
          <Link href="/" className="block py-2 hover:scale-110 mr-2">
            Home
          </Link>
        </li>
        <li className="flex justify-end">
          <Link href="/skills" className="block py-2 hover:scale-110 mr-2">
            Skills
          </Link>
        </li>
        <li className="flex justify-end">
          <Link href="/projects" className="block py-2 hover:scale-110 mr-2">
            Projects
          </Link>
        </li>
        <li className="flex justify-end">
          <Link href="/about" className="block py-2 hover:scale-110 mr-2">
            About
          </Link>
        </li>
        <li className="flex justify-end">
          <Link href="/contact" className="block py-2 hover:scale-110 mr-2">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
