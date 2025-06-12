// import React from "react";
// import Header from "@/component/header";

// function HomePage(){
// return(
//     <div>
//         <Header/>
//         <h1 className="bg-red-700">Welcome Home Page</h1>
//     </div>
// )
// }
// export default HomePage;

import React from "react";
import Header from "@/component/header";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <Header />
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-red-700 mb-6 shadow-lg p-4 rounded-lg bg-white inline-block">
          👋 Welcome to the Home Page
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-4">
          This is your beautiful home screen. Feel free to explore the
          navigation above and enjoy the layout!
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Explore More
        </button>
      </div>
    </div>
  );
}

export default HomePage;
