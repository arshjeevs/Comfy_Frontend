import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import myImage from "./Images/image.png";
import Logo from "./Images/Logo.png";
import page2 from "./Images/Page2.png";
import sofa from "./Images/sofa.png";
import CardComponent from "./Components/CardComponent";
import InputComponent from "./Components/InputComponent";
import { MdArrowOutward } from "react-icons/md";

function App() {
  return (
    <>
      <div className="main p-0 m-0 box-border">
        <div className="Hero bg-green-500 relative">
          <div className="nav absolute w-full h-[110px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-center text-4xl text-white p-4">
                <img className="w-[43 px] h-[43px] " src={Logo} alt="" />
                <h1 className="font-semibold text-4xl p-2">Comfy.</h1>
              </div>
              <div className="flex justify-around gap-24 text-white font-semibold text-2xl pr-36">
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Shop</h3>
                <h3>Contact</h3>
              </div>
            </div>
          </div>
          <div className="bg-green-500 h-screen flex justify-between items-center">
            <div className="h-3/6 w-6/12 flex justify-center items-center">
              <div className="text-white text-6xl font-medium w-[330px]">
                <h1>Make your room comfy and beautiful.</h1>
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-7 py-2.5  me-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Shop
                </button>
                <button
                  type="button"
                  class="text-white bg-transparent outline hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-7 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Shop
                </button>
              </div>
            </div>
            <img
              className="w-6/12 object-cover h-screen"
              src={myImage}
              alt=""
            />
          </div>
        </div>
        <div className="bg-white w-screen h-full">
          <div className="flex justify-between p-12">
            <div className="p-20 m-4">
              <h3 className="font-semibold text-8xl my-8">About us</h3>
              <p className="w-[21rem]  text-slate-400 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <div className="w-6/12 h-full">
              <img src={page2} alt="" />
            </div>
          </div>
        </div>
        <div className="w-screen h-full">
          <div className="p-8">
            <h1 className="text-7xl font-medium font-poppins pl-20 m-8">
              Shop
            </h1>
            <div className="flex justify-between mx-16 px-12 gap-16">
              <CardComponent image={sofa} />
              <CardComponent image={sofa} />
              <CardComponent image={sofa} />
            </div>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center py-[10rem] m-18">
          <div className="w-3/4 h-full bg-green-500 flex justify-between">
            <div className="p-4">
              <h1 className="text-5xl font-medium pt-8 pl-1 m-8 text-white font-poppins">
                Contact
              </h1>
              <div className="p-8 flex flex-col justify-between gap-10 items-center">
                <InputComponent placeholder={"Name"} />
                <InputComponent placeholder={"Email"} />
                <textarea
                  id="message"
                  rows="4"
                  className="block py-4 px-6  placeholder-opacity-60 p-2.5 w-full text-sm rounded border text-white placeholder-white font-poppins text-xl border-none outline-none bg-green-600"
                  placeholder="Message"
                ></textarea>
                <div className="flex flex-start w-full">
                  <button
                    type="button"
                    class="text-green-600 bg-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-7 py-2.5  me-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>

            <img className="w-3/6 object-cover" src={myImage} alt="" />
          </div>
        </div>
        <div className="footer w-full h-[400px] bg-green-600">
          <div className="flex justify-between">
            <div className="logo p-20">
              <div className="flex gap-2 pb-2">
                <img src={Logo} alt="" />
                <h1 className="font-semibold text-4xl p-2 text-white">
                  Comfy.
                </h1>
              </div>
              <p className="text-white text-opacity-50">@ComfyTM 2021</p>
            </div>
            <div className="links flex flex-col justify-between p-20 text-4xl gap-4 text-white font-poppins">
              <p className="text-lg text-slate-300 font-poppins">Social Media</p>
              <a className='flex' href="">Instagram <MdArrowOutward /></a>
              <a className='flex' href="">Facebook <MdArrowOutward /></a>
              <a className='flex' href="">Twitter <MdArrowOutward /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
