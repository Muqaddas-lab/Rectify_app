// import React from "react";
// import Header from "@/component/header";

// function HomePage(){
// return(
//     <div>
//         <Header/>
//         <h1>Welcome to Shopping-cart</h1>
//     </div>
// )
// }
// export default HomePage;

import React from "react";
import Header from "@/component/header";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-pink-100">
      <Header />
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-pink-700 mb-6 shadow-lg p-4 rounded-lg bg-white inline-block">
          🛒 Welcome to Shopping Cart
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-4">
          Browse your selected items below. Manage your products, update quantities, or continue shopping.
        </p>
        <button className="mt-8 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
          Go to Checkout
        </button>
      </div>
    </div>
  );
}

export default HomePage;
