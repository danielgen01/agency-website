import React from "react"
import logo from "../public/images/logo.png"
import Image from "next/image"
import { CgMenuRight } from "react-icons/cg"
import Link from "next/link"
import { BsChevronDown } from "react-icons/bs"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-32 w-full">
      <div className="logo flex items-center gap-5 lg:ml-10">
        <Image src={logo} alt="Logo" className="" />
        <h2 className="text-bright-neon-green font-bold text-4xl">Designzoo</h2>
      </div>

      <div className="menu-icon lg:hidden">
        <CgMenuRight className="text-bright-neon-green text-5xl mr-5 cursor-pointer" />
      </div>
      <div className="desktop-nav-links hidden lg:flex text-2xl  gap-10">
        <Link
          href={"/"}
          className="text-bright-neon-green underline underline-offset-8 font-bold"
        >
          Home
        </Link>
        <div className="case-studies-link flex items-center gap-2">
          <Link
            href={"/"}
            className="text-Nav-color-links-text font-semibold hover:text-bright-neon-green "
          >
            Case Studies
          </Link>
          <BsChevronDown className="text-white text-sm font-bold" />
        </div>
        <Link
          href={"/"}
          className="text-Nav-color-links-text font-semibold hover:text-bright-neon-green "
        >
          Blog
        </Link>
        <Link
          href={"/"}
          className="text-Nav-color-links-text font-semibold hover:text-bright-neon-green "
        >
          About us
        </Link>
      </div>
      <button
        type="button"
        className="bg-neon-green font-bold px-3 py-3 rounded-2xl text-xl mr-5 hover:opacity-90 hidden lg:block"
      >
        Book a call
      </button>
    </nav>
  )
}

export default Navbar
