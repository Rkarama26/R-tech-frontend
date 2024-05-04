import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import OrderTracker from '../Order/OrderTracker';
import { Box, Grid } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderDetail = () => {
    return (
        <div className='text-left px-5 lg:px-20'>

            <div>
                <h1 className='font-semibold text-xl py-8'>Delivery Address </h1>
                <AddressCard />
            </div>

            <div className='py-12'>
                <OrderTracker activeStep={3} />
            </div>

            <Grid className='space-y-5' container>

        {[1,1,1,1,1].map((item)=>  <Grid item container className='shadow-xl rounded-md p-5 border'
                    sx={{ alignItems: "center", justifyContent: "space-between" }}>

                    <Grid item xs={6}>
                        <div className='flex item-center space-x-4'>
                            <img className='w-[5rem] h-[5rem] objet-cover object-top '
                                src="/home_images/homesectionCard/arduino-nano-v3.jpg"
                                alt="" />
                            <div className='space-y-2 ml-5'>
                                <p className='font-semibold'>Arduino Nano Board SMT</p>
                                <p className='space-x-5 opacity-50 text-xs font-semibold '>
                                <span>Board: Nano</span>
                                <span>Type: SMT </span>
                                </p>
                                <p>₹400</p>
                            </div>



                        </div>

                    </Grid>

                    <Grid>
                        <Grid item>
                            <Box sx={{ color: deepPurple[500], textAlign: 'center' }}>
                      

                                <StarBorderIcon sx={{fontSize:"2rem"}} className="px-1" />
                                <span>Rate and Review Product</span>
                           

                            </Box>
                        </Grid>
                    </Grid>

                </Grid> ) }    
               

            </Grid>

        </div>
    );
}

export default OrderDetail;
