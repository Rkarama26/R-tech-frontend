import { Button, IconButton } from '@mui/material';
import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { updateCartItem, removeCartItem } from '../../../State/Cart/Action';
import { useDispatch } from 'react-redux';


const CartItem = ({item}) => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");

   

    const handleUpdateCartItem = (num) => {
        const data = {
            cartItemId: item?.id,       
            quantity: item.quantity + num,  
            jwt                           
        };
    
        dispatch(updateCartItem(data)); // Dispatch the action to update quantity
    };
    

    const handleRemoveCartItem =() =>{
        dispatch(removeCartItem(item.id))
    }


    return (
        <div className='p-4 shadow-lg border rounded-md h-[12rem]'>
            <div className='flex items-center'>
                <div className='w-[7rem] h-[7rem] lg:h-full'>
                    <img className='w-full h-full object-cover object-top' src={item.product.imageUrl} alt="" />
                </div>
                <div className='ml-5 space-y-1 text-left'>
                    <p className='font-semibold '>{item.product.title}</p>
                    <div className='flex space-x-4 items-center text-md text-gray-900 pt-6'>
                        <p className='font-semibold'> ₹{item.discountedPrice}</p>
                        <p className='opacity-50 line-through'>₹{item.price}</p>
                        <p className='text-green-600 font-semibold'>{item.product.discountPercent}% off</p>
                    </div>
                </div>
            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton sx={{color:"RGB(145 85 253) "}} onClick={() => handleUpdateCartItem(-1)} disabled={item.quantity<=1}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>
                        {item.quantity} {/* Display quantity here */}
                    </span>
                    <IconButton sx={{color:"RGB(145 85 253) "}} onClick={() => handleUpdateCartItem(1)}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                <div>
                    <Button onClick={handleRemoveCartItem} sx={{color:"RGB(145 85 253) "}}>
                        Remove 
                    </Button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
