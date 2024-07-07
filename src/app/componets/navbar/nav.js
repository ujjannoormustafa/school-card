"use client"
import React, { useState } from 'react';
import axios from 'axios';


const Nav = () => {
  const preset_key = "school";
  const cloud_name = "dg5feq191";

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false); // State to track uploading status

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', preset_key);
    
    setUploading(true); // Set uploading to true when starting upload
    
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setImage(response.data.secure_url);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploading(false); // Set uploading to false when upload completes or fails
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    detail: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Ensure image is uploaded before submitting form
    if (!image) {
      alert('Please upload an image.');
      return;
    }

    try {
      const response = await fetch('https://stschool-card.vercel.app/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          imageUrl: image
        })
      });

      if (!response.ok) {
        throw new Error('Failed to add student');
      }

      // Reset form data after successful submission
      setFormData({
        name: '',
        detail: '',
        imageUrl: ''
      });

      alert('Student added successfully!');
    } catch (error) {
      console.error('Error adding student:', error);
      alert('Failed to add student');
    }
  };

  return (
    <div className="font-[sans-serif] w-[1240px]  text-[#333] relative">
      <div className="relative w-full m-4">
        <form onSubmit={handleSubmit} className="bg-white max-w-xl w-full mx-auto shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-md">
          <div className="mb-3">
            <h3 className="text-xl  text-center">Add your Items</h3>
          </div>
          <div>
            <label className="text-xs block mb-2">Item Name</label>
            <div className="relative flex items-center">
              <input name="name" type="text" required value={formData.name} onChange={handleChange} className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" placeholder="Item name" />
            </div>
          </div>
          <div className="mt-10">
            <label className="text-xs block mb-2">Price</label>
            <div className="relative flex items-center">
              <input name="detail" type="text" required value={formData.detail} onChange={handleChange} className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" placeholder="Price" />
            </div>
          </div>



          <div className="mt-10">
  <label className="text-xs block mb-2">Image URL</label>
  <div className="relative flex items-center">
    <div class="grid w-full max-w-xs items-center  gap-1.5">
      {/* <label class="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Picture</label> */}
      <input
        accept="image/*"
        onChange={handleImageUpload}
        id="picture"
        type="file"
        class="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
      />
    </div>
    </div>

    {uploading && (
      <div className='flex justify-center items-center mt-5' >
        <svg
          className="animate-spin h-8 w-8 mx-2 text-black block"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span>Uploading...</span>
        97%
      </div>
    )}

  
    <div className="flex justify-center items-center my-3">
      {image && <img src={image} alt="Uploaded" />}
      
    </div>
 
</div>;



          <div className="mt-6">
            <button type="submit" className="w-full shadow-xl py-2.5 px-8 text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all">
              Add Your Info
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Nav;
