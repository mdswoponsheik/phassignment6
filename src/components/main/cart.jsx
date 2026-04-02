import React, { useState } from "react";
import { toast } from "react-toastify";

const Cart = ({ isCart, setIsCart }) => {
    const cartRemove = (cart) => {

        const filterCart = isCart.filter(selectedCart => selectedCart.id !== cart.id);
        toast.success(`${cart.name} is Removed`)
        setIsCart(filterCart);
    };
    const hendleAllRemove = () => {
        toast.success('ALL Cart is checkout')
        setIsCart([]);
    };

    return (
        <>
            <div>
                <div className='bg-white text-black pb-10'>

                    <div className="card-body w-4/5 m-auto shadow-2xl rounded-2xl bg-gray-50">
                        <div className="">
                            <h2 className="text-3xl font-bold">Your Cart</h2>
                        </div>
                        {
                            isCart.length === 0 ?
                                <div className="bg-blue-50 p-5 border rounded-2xl">
                                    <h2 className="text-xl sm:text-2xl flex justify-center ">There is no cart hear </h2>
                                    <p className="text-center text-2xl sm:text-4xl"> Please add a cart</p>
                                </div>

                                :


                                isCart.map((cart, id) => {
                                    return <div key={id} className="">
                                        <div className="flex justify-between items-center bg-gray-200 rounded-xl p-2">
                                            <div className="flex gap-1">
                                                <img className='w-7 h-7' src={cart.img} alt="" />
                                                <div className="">
                                                    <h4 className='text-xs sm:text-xl'>{cart.name}</h4>
                                                    <samp>${cart.price}</samp>
                                                </div>
                                            </div>
                                            <div className="">
                                                <button onClick={() => cartRemove(cart)} className='btn btn-error '>remove</button>
                                            </div>

                                        </div>
                                    </div>

                                })}
                        <div className="flex justify-between bg-amber-50 px-5 rounded-2xl">
                            <p>Total</p>
                            <samp className='text-xl'>$ {isCart.reduce((sum, item) => sum + item.price, 0)}
                            </samp>
                        </div>


                        <div className="mt-6">
                            <button onClick={() => hendleAllRemove()} className="btn btn-primary btn-block m-auto rounded-4xl">{isCart.length === 0 ? <p></p>: <h1>Clears all cart</h1>}</button>
                        </div>
                    </div>

                </div>
            </div>




        </>
    );
};

export default Cart;