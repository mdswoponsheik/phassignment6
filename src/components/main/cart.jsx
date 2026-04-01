import React from "react";

const Cart = ({isCart}) => {
    console.log(isCart);

    return (
        <>
            
            <div>
                <div className='bg-white text-black pb-10'>

                    <div className="card-body w-4/5 m-auto shadow-2xl rounded-2xl bg-gray-50">
                        <div className="">
                            <h2 className="text-3xl font-bold">Your Cart</h2>
                        </div>
                        <div className="">
                            <div className="flex justify-between items-center bg-gray-200 rounded-xl p-2">
                                <div className="flex gap-1">
                                    <img className='w-10 h-10' src="./src/assets/user.png" alt="" />
                                    <div className="">
                                        <h4 className='text-xl'>{isCart.name}</h4>
                                        <samp>$34</samp>
                                    </div>
                                </div>
                                <div className="">
                                    <button className='btn btn-error'>remove</button>
                                </div>

                            </div>
                        </div>
                        <div className="flex justify-between bg-amber-50 px-5 rounded-2xl">
                            <p>Total</p>
                            <samp className='text-xl'>$34</samp>
                        </div>


                        <div className="mt-6">
                            <button className="btn btn-primary btn-block m-auto rounded-4xl">Buy Now</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Cart;