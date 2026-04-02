import React, { useState } from "react";
import Card from "./card";

const Products = ({datas, setIsCart, isCart}) => {

    return (
        <>
            <div className="mt-3 w-85 sm:w-190 lg:w-291 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    datas.map((data ) => {
                        return <Card key={data.id} data={data} setIsCart= {setIsCart} isCart={isCart} ></Card>
                        


                    }
                    )
                }</div>
        </>
    );
};

export default Products;