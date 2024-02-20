"use client"
import React, { useState } from 'react';
import Left from "./componets/left/left";
import { Button, Modal } from 'antd';
import Nav from './componets/navbar/nav';


export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
        <div className='bg-red-50'>
        <h1 className='text-center text-5xl mb-4 py-6 font-bold cursor-pointer font-mono text-gray-800'>We are Shaheen from</h1>
        <h3 className="text-gray-700 font-mono font-semibold text-2xl text-center">Saint Theresa's Students</h3>

        <div onClick={() => setOpen(true) }  class="block py-4 text-xl text-white w-60 text-center mx-auto bg-gray-800 px-7 hover:bg-gray-700 rounded-xl">
        Add Your Info
        </div>
       
       <Modal
        centered
        open={open}
        okButtonProps={{ style: { display: 'none' } }}
        cancelText="Close"
        onCancel={() => setOpen(false)}
        width={500}
      >
       <div>
        <Nav/>
       </div>
      </Modal>

    <Left/>
    
   <p className='text-center text-sm text-gray-400 font-mono'>
      created by Noor Mustafa Ujjan
   </p>
    </div>
   
   </>
  );
}
