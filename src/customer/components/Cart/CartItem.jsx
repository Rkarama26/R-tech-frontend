import { Button, IconButton } from '@mui/material';
import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
    return (
        <div className='p-4 shadow-lg border rounded-md h-[12rem]'>
            <div className='flex items-center'>
                <div className='w-[7rem] h-[7rem] lg:h-full'>
                    <img className='w-full h-full object-cover object-top' src="/home_images/sensor_images/tcs3200.jpg" alt="" />
                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>TCS3200 Color Detector</p>
                    <div className='flex space-x-5 items-center text-md text-gray-900 pt-6'>
                        <p className='font-semibold'> ₹199</p>
                        <p className='opacity-50 line-through'>₹211</p>
                        <p className='text-green-600 font-semibold'>5% off</p>
                    </div>
                </div>
            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton sx={{color:"RGB(145 85 253) "}}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>
                        1 {/* Display quantity here */}
                    </span>
                    <IconButton sx={{color:"RGB(145 85 253) "}}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                <div>
                    <Button sx={{color:"RGB(145 85 253) "}}>
                        Remove
                    </Button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
