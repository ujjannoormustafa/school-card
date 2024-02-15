"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Left = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data
  const fetchData = async () => {
    try {
      const response = await axios.get('https://stschool-card.vercel.app/api/students');
      if (Array.isArray(response.data.result)) {
        setStudents(response.data.result.reverse()); // Reverse the array to display in descending order
      } else {
        console.error('API response is not an array:', response.data.result);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to generate random hex color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
 
  // Function to handle image load error
  const handleImageError = (event) => {
    event.target.style.backgroundColor = '#000'; // Set background color to black
  };

  return (
        <div className='px-12 py-10 bg-red-50 '>
       
        <div className="flex justify-center items-center flex-wrap w-full">
          {students.map((student, index) => (
            <div
              key={index}
              className="bg-[#43739e] px-2 lg:px-8 flex justify-center py-10 shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4"
              style={{ backgroundColor: getRandomColor() }}
            >
              <div className="flex flex-col items-center">
                <img
                  src={student.imageUrl}
                  className=" w-[145px] custom-width h-[145px] rounded-full lg:border-4 border-white"
                  alt={student.name}
                  onError={handleImageError}
                />
                <div className="mt-6 text-center">
                  <p className="text-base text-gray-100 font-semibold">{student.name}</p>
                  <h3 className="text-white text-sm mt-4">{student.detail}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
  );
};

export default Left;
