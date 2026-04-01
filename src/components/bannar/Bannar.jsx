import React from "react";

function bannar() {
    return (
        <div>
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
        </div>
    );
};
export default bannar;