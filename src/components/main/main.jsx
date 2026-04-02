import React, { use, useState } from "react";
import Cart from "./cart";
import Products from "./products";

const Main = ({dataPromise, isCart, setIsCart}) => {
    // console.log(dataPromise);
    const  datas = use(dataPromise);
    const [isProducts, setIsProducts] =useState("products");
    
     
    return (
        <>
            <div className=' bg-purple-50  md:p-3 sm:p-10 text-black' >
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
                         } btn rounded-4xl `}>Cart({isCart.length})</button>

                   </div>
                </div>

                         {isProducts === "products" ?
                          <Products datas={datas} setIsCart={setIsCart} isCart={isCart}></Products> :
                          <Cart isCart={isCart} setIsCart={setIsCart} ></Cart>}


             


          
             </div>




        </>
    );
};

export default Main;

