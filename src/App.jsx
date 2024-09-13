import React from "react";
import Logo from "./Images/Logo.png";
import HeroImage from "./Images/image.png";
import Page2Image from "./Images/Page2.png";
import SofaImage from "./Images/sofa.png";
import CardComponent from "./Components/CardComponent";
import InputComponent from "./Components/InputComponent";
import { MdArrowOutward } from "react-icons/md";

function App() {
  return (
    <div className="main p-0 m-0 box-border">
      <header className="bg-green-500 relative min-h-screen">
        <nav className="absolute w-full p-4 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center justify-center text-3xl md:text-4xl text-white">
              <img className="w-8 h-8 md:w-[43px] md:h-[43px]" src={Logo} alt="Comfy logo" />
              <h1 className="font-semibold ml-2">Comfy.</h1>
            </div>
            <ul className="flex flex-wrap justify-center md:justify-around gap-8 md:gap-20 text-white font-semibold text-lg md:text-2xl mt-4 md:mt-0 md:pr-24">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <div className="flex flex-col md:flex-row justify-between items-center h-full pt-24 md:pt-0">
          <div className="w-full md:w-[40%] text-center md:text-left pl-40">
            <h2 className="text-white text-4xl md:text-6xl font-medium mb-6">Make your room comfy and beautiful.</h2>
            <button className="bg-white hover:bg-gray-100 text-green-600 font-medium rounded-lg text-xl px-8 py-2 mr-4 mb-4">
              Shop
            </button>
            <button className="bg-transparent hover:bg-green-600 text-white font-medium rounded-lg text-xl px-6 py-2 border border-white">
              Explore
            </button>
          </div>
          <img className="w-full md:w-1/2 object-cover h-64 md:h-screen" src={HeroImage} alt="Comfortable room interior" />
        </div>
      </header>

      <section id="about" className="bg-white w-full py-12">
        <div className="flex flex-col md:flex-row justify-between p-4 md:p-12">
          <div className="md:w-1/2 p-4 md:p-8">
            <h3 className="font-semibold text-5xl md:text-8xl mb-6">About us</h3>
            <p className="text-slate-400 font-medium max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque praesentium incidunt a, minima rerum mollitia perferendis ratione unde tempore. Animi vero sed a magni ipsam eligendi quaerat, vitae nisi vel.
              Ex debitis ea beatae perferendis voluptate nihil adipisci deserunt suscipit quam incidunt? Vel modi magnam cumque ullam maiores quo voluptates asperiores repellat numquam, distinctio deleniti quae molestiae sint consequuntur dolore.
              Perspiciatis quis dicta odit facilis fugit vero nostrum repudiandae repellendus at magnam sequi nulla libero.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src={Page2Image} alt="About us illustration" className="w-full h-auto" />
          </div>
        </div>
      </section>

      <section id="shop" className="w-full py-12">
        <div className="p-4 md:p-8">
          <h1 className="text-5xl md:text-7xl font-medium font-poppins text-center md:text-left mb-8 md:pl-[7.5rem]">Shop</h1>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8">
            <CardComponent image={SofaImage} />
            <CardComponent image={SofaImage} />
            <CardComponent image={SofaImage} />
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-12 px-4 md:px-0 md:py-8">
        <div className="w-full md:w-3/4 mx-auto bg-green-500 flex flex-col md:flex-row justify-between">
          <div className="p-4 w-full md:w-1/2 md:pt-24 md:px-16 ">
            <h1 className="text-4xl md:text-5xl font-medium text-white font-poppins mb-8">Contact</h1>
            <div className="flex flex-col gap-6">
              <InputComponent placeholder="Name" />
              <InputComponent placeholder="Email" />
              <textarea
                rows="4"
                className="w-full pl-6 pt-4 text-white placeholder-white bg-green-600 rounded placeholder-opacity-60 outline-none font-poppins"
                placeholder="Message"
              ></textarea>
              <button className="self-start bg-white hover:bg-gray-100 text-green-600 font-medium rounded-lg text-xl px-8 py-2">
                Send
              </button>
            </div>
          </div>
          <img className="w-full md:w-1/2 object-cover" src={HeroImage} alt="Contact illustration" />
        </div>
      </section>

      <footer className="bg-green-600 py-20 mt-20">
        <div className="flex flex-col md:flex-row justify-between px-4 md:px-20">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <img src={Logo} alt="Comfy logo" className="w-10 h-10" />
              <h1 className="font-semibold text-3xl text-white">Comfy.</h1>
            </div>
            <p className="text-white text-opacity-50">@ComfyTM 2021</p>
          </div>
          <div className="flex flex-col gap-4 text-white font-poppins">
            <p className="text-lg text-slate-300">Social Media</p>
            <a className="flex items-center" href="#">Instagram <MdArrowOutward className="ml-2" /></a>
            <a className="flex items-center" href="#">Facebook <MdArrowOutward className="ml-2" /></a>
            <a className="flex items-center" href="#">Twitter <MdArrowOutward className="ml-2" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;