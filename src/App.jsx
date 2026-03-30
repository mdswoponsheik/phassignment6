
import './App.css'

function App() {


  return (
    < >



      <div className=" bg-white">
        <div className='navbar  shadow-sm rounded-4xl px-5 w-4/5 m-auto'>
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
          <a className="btn btn-ghost font-bold text-blue-400 text-3xl">DigiTools</a>
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
              <p className='flex gap-1 text-2xl lg:text-3xl rounded-2xl text-purple-500 bg-gray-200 p-2'><div className='w-10 h-10 bg-purple-400 rounded-full'></div>New: AI-Powered Tools Available</p>
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
      </div>


      {/* rating */}

      <div className='h-40 flex items-center  bg-[#4F39F6]'>
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



      <div className="bg-white  h-70">
        <div className="text-center ">
          <h2 className='text-4xl lg:text-5xl font-bold pt-10 text-black'>Premium Digital Tools</h2>
          <p className='text-gray-500 py-6'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
        </div>
        <div className="text-center border-black m-auto w-40  bg-white">
          <button className='btn btn-primary'>Product</button>
          <button className='btn bg-white text-blue-600'>Cart<samp ></samp></button>

        </div>



        {/* card */}



      </div>


      <div>
        <div className='bg-white text-black'>
          <div className="card w-96 shadow-sm bg">
            <div className="card-body">

              <div className="flex justify-between">
                <img src="./src/assets/rocket.png" alt="" />
                <span className="badge badge-xs badge-warning ">Most Popular</span>
              </div>
              <div className="space-y-1 ">
                <h2 className="text-3xl font-bold">Premium</h2>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet.</p>
                <span className="text-xl">$29/mo</span>
              </div>
              <ul className="mt-3 flex flex-col gap-2 text-xs">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>High-resolution image generation</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Customizable style templates</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Batch processing capabilities</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>AI-driven image enhancements</span>
                </li>
                <li className="opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span className="line-through">Seamless cloud integration</span>
                </li>
                <li className="opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span className="line-through">Real-time collaboration tools</span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block w-60 m-auto rounded-4xl">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>



       {/* setup */}

      <div className="bg-white text-black">
        <div className="text-center">
          <h2 className='text-4xl pt-10 font-bold'>Get Started in 3 Steps</h2>
          <p className='p-3'>Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className="gap-2 grid grid-cols-1 lg:grid-cols-3 w-96 lg:w-4/5 m-auto">

          <div className="card w-96  card-md shadow-sm">
          <div className="flex justify-end p-5"><p className='w-9 h-9 bg-purple-600 font-bold text-2xl  text-white rounded-full flex justify-center items-center'>1</p></div>
          <div className="flex justify-center">
            <img className=' bg-purple-200 rounded-full p-3'  src="./src/assets/user.png" alt="" />
          </div>
          <div className="card-body text-center">
            <h2 className="text-3xl">Create Account</h2>
            <p>Sign up for free in seconds. No credit card required to get started.</p>
          </div>
        </div>

        <div className="card w-96  card-md shadow-sm">
          <div className="flex justify-end p-5"><p className='w-9 h-9 bg-purple-600 font-bold text-2xl  text-white rounded-full flex justify-center items-center'>2</p></div>
          <div className="flex justify-center">
            <img className=' bg-purple-200 rounded-full p-3'  src="./src/assets/package.png" alt="" />
          </div>
          <div className="card-body text-center">
            <h2 className="text-3xl">Choose Products</h2>
            <p>Browse our catalog and select the tools that fit your needs.</p>
          </div>
        </div>

        <div className="card w-96  card-md shadow-sm">
          <div className="flex justify-end p-5"><p className='w-9 h-9 bg-purple-600 font-bold text-2xl  text-white rounded-full flex justify-center items-center'>3</p></div>
          <div className="flex justify-center">
            <img className=' bg-purple-200 rounded-full p-3'  src="./src/assets/rocket.png" alt="" />
          </div>
          <div className="card-body text-center">
            <h2 className="text-3xl">Start Creating</h2>
            <p>Download and start using your premium tools immediately.</p>
          </div>
        </div>
        </div>
      </div>



      

    </>
  )
}

export default App
