import React from 'react';
import "./ProductCart.css";
import { useNavigate } from 'react-router-dom';

const ProductCart = ({product}) => {
    const navigate=useNavigate();
    return (
        <div onClick={()=>navigate(`/product/${5}`)} className='productCart w-[15rem] m-3 transition-all cursor-pointer'>
            <div className='aspect-w-1 aspect-h-1'>
                <img className='object-cover w-full h-full' src={product.imageUrl} alt="" />
            </div>

            <div className='textPart bg-white p-3 '>
                <div className="flex justify-center mb-2">
                    <p className='font-bold opacity-70'>{product.title}</p>
                </div>

                <div className='flex items-center space-x-2'>
                    <div>
                        <p className='font-semibold'>{product.discountedPrice}</p>
                    </div>
                    <div>
                        <p className='line-through opacity-50'>{product.price}</p>
                    </div>
                    <div>
                        <p className='text-green-600 font-semibold'>{product.discountPercent}% off</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCart;
