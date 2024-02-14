
import React from 'react';
import Left from "./componets/left/left";
import Nav from "./componets/navbar/nav";

export default function Home() {
  
  return (
    <div className="flex justify-evenly items-center">
      {/* Right div */}

     <Left/>

      {/* Left div */}
      <div className="w-3/12 py-12 flex items-center fixed right-3 top-2 justify-center">
        <div>
          <Nav />
        </div>
      </div>
    </div>
  );
}
