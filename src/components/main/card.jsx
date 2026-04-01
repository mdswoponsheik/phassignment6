import React from "react";

const Card = ({data, setIsCart, isCart})=>{

    const [buy, setBuy] = useState("false");

    const buyProduct = ()=>{
        setIsCart([...isCart, data])
    };
    return (
        <>
        <div className="card w-95 bg-purple-200 shadow-sm  ">
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
                                    <button onClick={ ()=>{buyProduct(); setBuy(prev => ({ ...prev, [data.id]: true }))}} className="btn btn-primary btn-block rounded-4xl">
                                        { buy[data.id] === true ? "Added to Cart" :"Buy Now" }</button>
                                </div>
                            </div>

                        </div>
        </>
    );
};
export default Card;