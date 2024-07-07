"use client"
import React, { useState } from 'react';
import Left from "./componets/left/left";
import { Button, Modal } from 'antd';
import Nav from './componets/navbar/nav';
import Image from "next/image"

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
        <div className='flex justify-evenly flex-col items-center '>
       
        <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] w-full min-h-[70px] tracking-wide relative z-50">
  <div className="flex flex-wrap items-center justify-between gap-5 w-full">
    <a href="javascript:void(0)">
      <img
        src="https://food-webapp-delta.vercel.app/static/media/Logo.e04f4319ea0059a833b1ca8d03810b60.svg"
        alt="logo"
        className="w-36"
      />
    </a>
    <div
      id="collapseMenu"
      className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
    >
      <button
        id="toggleClose"
        className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 fill-black"
          viewBox="0 0 320.591 320.591"
        >
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000"
          />
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000"
          />
        </svg>
      </button>
      <h1 className='text-2xl font-semibold'>Welcome To Customer Portal</h1>
    </div>
    <div className="flex max-lg:ml-auto space-x-3">
      <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-orange-400 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
       Logout
      </button>
      {/* <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
        Sign up
      </button> */}
      <button id="toggleOpen" className="lg:hidden">
        <svg
          className="w-7 h-7"
          fill="#000"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</header>


       {/* <Image alt={"pic"} className='py-4' src={""} width={200} height={120} /> */}
    
        {/* <div onClick={() => setOpen(true) }  class="block py-4 text-xl text-white w-60 text-center mx-auto bg-gray-800 px-7 hover:bg-gray-700 rounded-xl">
        Add Your Info
        </div> */}
        <Nav/>
       {/* <Modal
        centered
        open={open}
        okButtonProps={{ style: { display: 'none' } }}
        cancelText="Close"
        onCancel={() => setOpen(false)}
        width={500}
      >
       <div>
        
       </div>
      </Modal> */}

    {/* <Left/> */}
    
   <p className='text-center text-sm text-gray-400 font-mono'>
      created by ❤️ Foodie
   </p>
    </div>
   
   </>
  );
}
