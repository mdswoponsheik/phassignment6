import React, { use, useState } from "react";
import Cart from "./cart";
import Products from "./products";

const Main = ({dataPromise}) => {
    // console.log(dataPromise);
    const  data = use(dataPromise);
    const [isProducts, setIsProducts] =useState("products");
    console.log(isProducts);
    return (
        <>
            <div className=' bg-purple-50 p-10 text-black' >
            <div className=" h-70" >
                <div className="text-center ">
                    <h2 className='text-4xl lg:text-5xl font-bold pt-10 text-black'>Premium Digital Tools</h2>
                    <p className='text-gray-500 py-6'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                </div>
                <div className="text-center ">
                    <button onClick={() => setIsProducts("products")}
                     className={`
                        ${isProducts === "products" ?
                         "bg-blue-500 text-white" :
                          "bg-white text-blue-600"
                         }
                           btn rounded-4xl  mr-1.5`}>products</button>
                    <button onClick={() => setIsProducts("cart")}
                    className={`
                        ${isProducts === "cart" ?
                         "bg-blue-500 text-white" :
                          "bg-white text-blue-600"
                         } btn rounded-4xl `}>Cart</button>

                </div>
            </div>

                         {isProducts === "products" ?  <Products data={data}></Products> : <Cart></Cart>}


             <div className="w-95 sm:w-193 lg:w-291 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    data.map((data) => {
                        return <div className="card w-95 bg-purple-200 shadow-sm  ">
                            <div className="card-body  ">

                                <div className="flex justify-between">
                                    <img src={data.img} alt="" />
                                    <span className="badge badge-xs badge-warning ">{data.tag}</span>
                                </div>
                                <div className="space-y-1 ">
                                    <h2 className="text-3xl font-bold">{data.name}</h2>
                                    <p className='text-gray-500'>{data.description}</p>
                                    <span className="text-xl font-bold">${data.price}/{data.period}</span>
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
                                <div className="mt-6 w-9/10 m-auto">
                                    <button className="btn btn-primary btn-block rounded-4xl">Buy Now</button>
                                </div>
                            </div>

                        </div>


                    }
                    )
                }</div>


          
            </div>




        </>
    )
};

export default Main;

