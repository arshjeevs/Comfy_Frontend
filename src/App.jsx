import React from "react";
import Logo from "./Images/Logo.png";
import HeroImage from "./Images/image.png";
import Page2Image from "./Images/Page2.png";
import SofaImage from "./Images/sofa.png";
import CardComponent from "./Components/CardComponent";
import InputComponent from "./Components/InputComponent";
import { MdArrowOutward } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function App() {
  const [Drop, setDrop] = useState(0);
  return (
    <div className="main p-0 m-0 box-border">
      <header className="bg-green-500 relative h-full">
        <nav className="absolute w-full p-4 md:p-8 bg-green-500 sm:bg-transparent">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center max-w-full">
            <div className="flex  text-2xl md:text-4xl text-white mb-4 md:mb-0">
              <img
                className="w-8 h-8 md`z:w-[43px] md:h-[43px]"
                src={Logo}
                alt="Comfy logo"
              />
              <h1 className="font-semibold ml-2">Comfy.</h1>
            </div>
            <input class="peer hidden" type="checkbox" id="navbar-open" />
            <label
              class="absolute right-0 cursor-pointer text-2xl sm:hidden text-white p-4"
              for="navbar-open"
            >
              <span class="sr-only">Toggle Navigation</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.88em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
                />
              </svg>
            </label>
            <div className="peer-checked:block hidden sm:block  mb-4 border-b-2 sm:border-none">
              <ul className="flex flex-col m-4 sm:flex-row flex-wrap justify-center md:justify-around gap-8 md:gap-8 text-white font-semibold text-sm md:text-xl ">
                <li>
                  <a className="py-4 px-3 hover:bg-green-700 sm:hover:bg-transparent" href="#home">Home</a>
                </li>
                <li>
                  <a className="py-4 px-3 hover:bg-green-700 sm:hover:bg-transparent" href="#about">About</a>
                </li>
                <li>
                  <a className="py-4 px-3 hover:bg-green-700 sm:hover:bg-transparent" href="#shop">Shop</a>
                </li>
                <li>
                  <a className="py-4 px-3 hover:bg-green-700 sm:hover:bg-transparent" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="flex flex-col md:flex-row justify-between items-center h-full pt-24 md:pt-0">
          <div className="w-full md:w-[40%] text-center md:text-left p-12 md:pl-12 lg:pl-40">
            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-medium mb-6 mx-8">
              Make your room comfy and beautiful.
            </h2>
            <div className="px-8">
            <button className="bg-white hover:bg-gray-100 text-green-600 font-medium rounded-lg text-lg md:text-xl px-6 md:px-8 py-2 mr-2 md:mr-4 mb-4">
              Shop
            </button>
            <button className="bg-transparent hover:bg-green-600 text-white font-medium rounded-lg text-lg md:text-xl px-4 md:px-6 py-2 border border-white">
              Explore
            </button>
            </div>
          </div>
          <img
            className="w-full object-cover  md:w-1/2 md:block md:h-screen mt-6 md:mt-0"
            src={HeroImage}
            alt="Comfortable room interior"
          />
        </div>
      </header>

      <section id="about" className="bg-white w-full py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between p-4 md:p-12">
          <div className="md:w-1/2 p-4 md:p-8">
            <h3 className="font-semibold text-4xl md:text-6xl lg:text-8xl mb-6">
              About us
            </h3>
            <p className="text-slate-400 font-medium text-sm md:text-base lg:text-lg max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              praesentium incidunt a, minima rerum mollitia perferendis ratione
              unde tempore. Animi vero sed a magni ipsam eligendi quaerat, vitae
              nisi vel. Ex debitis ea beatae perferendis voluptate nihil
              adipisci deserunt suscipit quam incidunt? Vel modi magnam cumque
              ullam maiores quo voluptates asperiores repellat numquam,
              distinctio deleniti quae molestiae sint consequuntur dolore.
              Perspiciatis quis dicta odit facilis fugit vero nostrum
              repudiandae repellendus at magnam sequi nulla libero.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={Page2Image}
              alt="About us illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section id="shop" className="w-full py-8 md:py-12">
        <div className="p-4 md:p-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium font-poppins text-center md:text-left mb-8 md:pl-4 lg:pl-[7.5rem]">
            Shop
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8">
            <CardComponent image={SofaImage} />
            <CardComponent image={SofaImage} />
            <CardComponent image={SofaImage} />
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-8 md:py-12 px-4 md:px-0">
        <div className="w-full md:w-3/4 mx-auto bg-green-500 flex flex-col md:flex-row justify-between">
          <div className="p-4 w-full md:w-1/2 md:pt-16 lg:pt-24 md:px-8 lg:px-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white font-poppins mb-8">
              Contact
            </h1>
            <div className="flex flex-col gap-6">
              <InputComponent placeholder="Name" />
              <InputComponent placeholder="Email" />
              <textarea
                rows="4"
                className="w-full pl-4 md:pl-6 pt-4 text-white placeholder-white bg-green-600 rounded placeholder-opacity-60 outline-none font-poppins text-sm md:text-base"
                placeholder="Message"
              ></textarea>
              <button className="self-start bg-white hover:bg-gray-100 text-green-600 font-medium rounded-lg text-lg md:text-xl px-6 md:px-8 py-2">
                Send
              </button>
            </div>
          </div>
          <img
            className="w-full md:w-1/2 hidden md:block object-cover"
            src={HeroImage}
            alt="Contact illustration"
          />
        </div>
      </section>

      <footer className="bg-green-600 py-12 md:py-20 mt-12 md:mt-20">
        <div className="flex flex-col md:flex-row justify-between px-4 md:px-12 lg:px-20">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={Logo}
                alt="Comfy logo"
                className="w-8 h-8 md:w-10 md:h-10"
              />
              <h1 className="font-semibold text-2xl md:text-3xl text-white">
                Comfy.
              </h1>
            </div>
            <p className="text-white text-opacity-50 text-sm md:text-base">
              @ComfyTM 2021
            </p>
          </div>
          <div className="flex flex-col gap-4 text-white font-poppins">
            <p className="text-base md:text-lg text-slate-300">Social Media</p>
            <a className="flex items-center text-sm md:text-base" href="#">
              Instagram <MdArrowOutward className="ml-2" />
            </a>
            <a className="flex items-center text-sm md:text-base" href="#">
              Facebook <MdArrowOutward className="ml-2" />
            </a>
            <a className="flex items-center text-sm md:text-base" href="#">
              Twitter <MdArrowOutward className="ml-2" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
