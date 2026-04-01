import React from "react";


const UpperBody = () => {
  return (
    <>
      <div className=" bg-white">
        <div className='navbar  shadow-sm rounded-4xl px-5 w-1/1 lg:w-9/10 m-auto'>
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-black h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a>Products</a></li>
                <li>
                  <a>Features</a>
                </li>
                <li><a>Pricing</a></li>
                <li><a>Tesimonials</a></li>
                <li><a>FAQ</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost font-bold text-blue-400 text-2xl md:text-3xl">DigiTools</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Products</a></li>
              <li>
                <a>Features</a>
              </li>
              <li><a>Pricing</a></li>
              <li><a>Tesimonials</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </div>
          <div className="gap-1.5 navbar-end">
            <img src="./src/assets/products/shopping-cart.png" alt="zcart" />
            <button className=' text-black'>Login</button>
            <button className='btn rounded-4xl bg-blue-500 p-2'>get Started</button>
          </div>
        </div>
      </div>


      {/* bannar section */}

      <div className="hero bg-white min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="./src/assets/banner.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="h-100 sm:h-70 p-3">
            <div className='text-center lg:text-left'>
              <p className='flex gap-1 text-2xl lg:text-3xl rounded-2xl text-purple-500 bg-gray-200 p-2'><samp className='w-10 h-10 bg-purple-400 rounded-full'></samp>New: AI-Powered Tools Available</p>
              <h1 className="text-4xl lg:text-7xl text-black font-bold">Supercharge Your Digital Workflow</h1>
              <p className="text-gray-500 py-6">Access premium AI tools, design assets, templates, and productivity <br />
                software—all in one place. Start creating faster today.

                Explore Products
              </p>
              <button className="btn mr-3 rounded-4xl btn-primary">Explore Products</button>
              <button className="btn rounded-4xl btn-outline btn-accent"><img src="./src/assets/Play.png" alt="" />Watch Demo</button>
            </div>
          </div>

        </div>
      </div >



      {/* rating */}

      <div className='h-40 flex items-center  bg-[#4F39F6]' >
        <div className='flex justify-between text-xl w-4/5 m-auto'>
          <div className="text-center">
            <h2 className='text-4xl font-bold'>59K+</h2>
            <p>Active Users </p>
          </div>
          <div className=" text-center">
            <h2 className='text-4xl font-bold'>200+ </h2>
            <p>Premium Tools </p>
          </div>
          <div className="text-center">
            <h2 className='text-4xl font-bold'>4.9</h2>
            <p>Rating</p>
          </div>
        </div>
      </div>



    </>
  );
};

export default UpperBody;