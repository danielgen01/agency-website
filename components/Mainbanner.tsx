import React from "react"
import { AiOutlineMail } from "react-icons/ai"
import Rating from "../public/images/Rating.png"
import Image from "next/image"

const Mainbanner = () => {
  return (
    <section className="w-screen flex flex-col mt-32 gap-5 items-center">
      <h1 className="text-center text-4xl lg:text-7xl text-white font-[DarkerGrotesqueExtraBold] leading-tight">
        We make great digital products <br />
        for <span className="text-neon-green">innovative</span> brands
      </h1>
      <p className="text-main-white-color text-center text-xl lg:text-3xl">
        Get your desired design services from our talented designers, <br />
        around the world at a reasonable cost
      </p>
      <div className="input-email-book w-full flex justify-center">
        <div className="elements flex  flex-col lg:flex-row justify-between gap-5">
          <input
            type="text"
            placeholder={"Your work E Mail"}
            className="h-12 w-80 rounded-3xl text-center text-2xl"
          />
          <button
            type="button"
            className="bg-neon-green font-bold px-5 py-3 rounded-3xl text-xl mr-5 hover:opacity-90"
          >
            Book a call
          </button>
        </div>
      </div>
        <Image 
        src={Rating}
        alt="Rating"
        />
    </section>
  )
}

export default Mainbanner
