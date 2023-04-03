import React from "react";
import icon1 from "../public/images/Icon.png"
import icon2 from "../public/images/Icon (1).png"
import icon3 from "../public/images/Icon (2).png"
import Image from "next/image";

const Servicebanner = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 mt-10 lg:mx-52 gap-10 lg:mt-32">
        <div className="service-first flex flex-col items-center justify-between gap-5">
            <Image 
            src={icon1}
            alt="webicon"
            />
            <h1 className="text-neon-green font-bold text-2xl">Web Design</h1>
            <p className="text-main-p-color text-center text-xl">Crafting websites that convert and<br/>
             grow your business</p>
        </div>

        <div className="service-first flex flex-col items-center justify-between gap-5">
            <Image 
            src={icon2}
            alt="appicon"
            />
            <h1 className="text-neon-green font-bold text-2xl">App Design</h1>
            <p className="text-main-p-color text-center text-xl">Beautifully designed apps that your<br/>
             users will love to use</p>
        </div>

        <div className="service-first flex flex-col items-center justify-between gap-5">
            <Image 
            src={icon3}
            alt="uxauditicon"
            />
            <h1 className="text-neon-green font-bold text-2xl">UX Audit</h1>
            <p className="text-main-p-color text-center text-xl">Get a detailed UX report on your<br/>
             marketing website</p>
        </div>
    
    </section>
  )
};

export default Servicebanner;
