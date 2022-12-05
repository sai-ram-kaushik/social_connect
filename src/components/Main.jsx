import React from "react";
import image from "../assets/sairam-kaushik.png";
import {AiOutlineInstagram, AiFillLinkedin} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {FcBusinessman} from 'react-icons/fc'
import Footer from "./Footer";
const Main = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-[#0b131f] ">
      <div className="flex flex-col justify-center items-center">
        <img
          src={image}
          className="rounded-full mt-9 border-4 border-orange-500"
          width="150px"
        />
        <div className="flex justify-center mt-4">
          <h1 className="text-2xl text-orange-500 text-center font-poppins p-2 font-bold">
            Hey There! My Name is Sairam Kaushik
          </h1>
        </div>
        <div className="flex item-center justify-center mt-8 flex-col gap-4">
          <a
            href="https://www.instagram.com/sairamkaushik/"
            target="_blank"
          >
            <button className="text-white border-2 bg-[#FFA500] p-2 rounded-xl min-w-[15rem] text-xl border-orange-500 hover:bg-white hover:text-orange-500 flex justify-center gap-2 font-poppins font-bold">
                <AiOutlineInstagram  className="text-3xl justify-center"/>
              Instagram
            </button>
          </a>

          <a href="https://www.linkedin.com/in/sairam-kaushik-711a40210/" target="_blank">
            <button className="text-white border-2 bg-[#FFA500] p-2 rounded-xl min-w-[15rem] text-xl border-orange-500 hover:bg-white hover:text-orange-500 flex justify-center gap-2 font-poppins font-bold">
                <AiFillLinkedin className="text-3xl justify-center"/>
              Linkedin
            </button>
          </a>

          <a href="https://twitter.com/SairamKaushik" target="_blank">
            <button className="text-white border-2 bg-[#FFA500] p-2 rounded-xl min-w-[15rem] text-xl border-orange-500 hover:bg-white hover:text-orange-500 flex justify-center gap-2 font-poppins font-bold">
                <BsTwitter className="text-3xl justify-center"/>
              Twitter
            </button>
          </a>

          <a href="https://sairamkaushik.vercel.app" target="_blank">
            <button className="text-white border-2 bg-[#FFA500] p-2 rounded-xl min-w-[15rem] text-xl border-orange-500 hover:bg-white hover:text-orange-500 flex justify-center gap-2 font-poppins font-bold">
                <FcBusinessman className="text-3xl justify-center"/>
              Portfolio
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
