import React from "react";

const LowerBody = () => {
    return (
        <>

            {/* setup */}

            <div className="bg-white text-black" >
                <div className="text-center">
                    <h2 className='text-4xl pt-10 font-bold'>Get Started in 3 Steps</h2>
                    <p className='p-3'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className="gap-2 grid grid-cols-1 lg:grid-cols-3 w-85 lg:w-4/5 m-auto">

                    <div className="card w-85 sm:w-96  card-md shadow-sm">
                        <div className="flex justify-end p-5"><p className='w-9 h-9 bg-purple-600 font-bold text-2xl  text-white rounded-full flex justify-center items-center'>1</p></div>
                        <div className="flex justify-center">
                            <img className=' bg-purple-200 rounded-full p-3' src="https://i.ibb.co.com/35n29J5K/user.png" alt="" />
                        </div>
                        <div className="card-body text-center">
                            <h2 className="text-3xl">Create Account</h2>
                            <p>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>



                    <div className="card w-85 sm:w-96  card-md shadow-sm">
                        <div className="flex justify-end p-5"><p className='w-9 h-9 bg-purple-600 font-bold text-2xl  text-white rounded-full flex justify-center items-center'>2</p></div>
                        <div className="flex justify-center">
                            <img className=' bg-purple-200 rounded-full p-3' src="https://i.ibb.co.com/sdMQjZ3h/package.png" alt="" />
                        </div>
                        <div className="card-body text-center">
                            <h2 className="text-3xl">Choose Products</h2>
                            <p>Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                    </div>

                    <div className="card w-85 sm:w-96 m-auto card-md shadow-sm">
                        <div className="flex justify-end p-5"><p className='w-9 h-9 bg-purple-600 font-bold text-2xl  text-white rounded-full flex justify-center items-center'>3</p></div>
                        <div className="flex justify-center">
                            <img className=' bg-purple-200 rounded-full p-3' src="https://i.ibb.co.com/ZPNMdbf/rocket.png" alt="" />
                        </div>
                        <div className="card-body text-center">
                            <h2 className="text-3xl">Start Creating</h2>
                            <p>Download and start using your premium tools immediately.</p>
                        </div>
                    </div>
                </div>
            </div>



            {/* card (3) */}
            <div className='bg-white pb-10' >
                <div className="  h-50 lg:h-40">
                    <div className="text-center ">
                        <h2 className='text-4xl px-2 lg:text-5xl font-bold pt-10 text-black'>Simple, Transparent Pricing</h2>
                        <p className='text-gray-500 py-4'>Choose the plan that fits your needs. Upgrade or downgrade anytime..</p>
                    </div>

                </div>

                <div className=' gap-3 grid grid-cols-1 md:grid-cols-3 w-66 md:w-200 m-auto'>
                    {/* 1 */}
                    <div>
                        <div className='bg-white text-black'>
                            <div className="card bg-blue-100 h-100  w-66 shadow-sm bg">
                                <div className="card-body">


                                    <div className="space-y-1  ">
                                        <h2 className="text-3xl font-bold">Starter</h2>
                                        <p className='text-gray-500'>Perfect for getting started</p>
                                        <span className="text-green-500 font-bold text-3xl">$0/month</span>
                                    </div>
                                    <ul className="mt-3 flex flex-col gap-2 text-xs">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>Access to 10 free tools</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>Basic templates</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>Community support</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>1 project per month</span>
                                        </li>

                                    </ul>
                                    <div className="mt-6">
                                        <button className="btn btn-primary btn-block w-55 m-auto rounded-4xl">Get Started Free</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div>
                        <div className='bg-white text-black'>
                            <div className="card bg-green-500 h-100 w-66 shadow-sm bg">
                                <div className="card-body">

                                    <div className="flex justify-center "><h5 className='bg-yellow-300 rounded-4xl px-3 relative bottom-8'>Most Popular</h5></div>

                                    <div className="space-y-1 ">
                                        <h2 className="text-3xl font-bold">Pro</h2>
                                        <p className='text-black-500'>Best for professionals</p>
                                        <span className="text-xl">$29/month</span>
                                    </div>
                                    <ul className="mt-3 flex flex-col gap-2 text-xs">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 text-red-600 inline-block " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>Access to all premium tools</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>Unlimited templates</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>Cloud sync</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>Priority support</span>
                                        </li>
                                        <li >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span >Unlimited projects</span>
                                        </li>
                                        <li >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>Advanced analytics</span>
                                        </li>
                                    </ul>
                                    <div className="mt-6">
                                        <button className="btn btn-secondary btn-block w-55 m-auto rounded-4xl">Start Pro Trial</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3 */}
                    <div>
                        <div className='bg-white text-black'>
                            <div className="card w-66 h-100 bg-blue-100 shadow-sm bg">
                                <div className="card-body">


                                    <div className="space-y-1 ">
                                        <h2 className="text-3xl font-bold">Enterprise</h2>
                                        <p className='text-gray-500'>For teams and businesses</p>
                                        <span className="text-2xl font-bold text-green-400">$99/month</span>
                                    </div>
                                    <ul className="mt-3 flex flex-col gap-2 text-xs">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>Everything in Pro</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>Team collaboration</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>Custom integrations</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>Dedicated support</span>
                                        </li>
                                        <li >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span >SLA guarantee</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>Custom branding</span>
                                        </li>
                                    </ul>
                                    <div className="mt-6 " >
                                        <button className="btn btn-primary  btn-block w-55 m-auto rounded-4xl">Contact Sales</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* footer */}

            <div className="footer sm:footer-horizontal bg-base-200 text-base-content p-10" >
                <div >
                    <div className="text-center ">
                        <h2 className='text-3xl lg:text-5xl font-bold text-white'>Premium Digital Tools</h2>
                        <p className='text-gray-500 py-6'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>

                </div>

                <nav>
                    <h6 className=" text-white text-xl">Product</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Templates</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav>
                    <h6 className="text-white text-xl">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press</a>
                </nav>
                <nav>
                    <h6 className="text-white text-xl">Resources</h6>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Documentation</a>
                </nav>

                <nav className="md:place-self-center md:justify-self-end">
                    <h4 className='text-white text-center '>Social Links</h4>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </div>
            <footer className="footer bg-base-200  text-base-content border-base-300 border-t p-10">
                <aside className="w-10/10 flex justify-between ">

                    <p>
                        © 2026 Digitools. All rights reserved.
                    </p>
                    <ul className='flex gap-4 '>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li> Cookies</li>
                    </ul>
                </aside>

            </footer>

        </>
    );
};
export default LowerBody;