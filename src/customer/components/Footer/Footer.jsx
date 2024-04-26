import { Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10'
                container
                sx={{ bgcolor: "black", color: "white", py: 3 }}
            >
                <Grid item xs={12} sm={6} md={3} >

                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div>
                        <button className='pb-5' variant='h6'>About Us </button>

                    </div>
                    <div>
                        <button className='pb-5' variant='h6'>Contact Us</button>

                    </div>
                    <div>
                        <button className='pb-5' variant='h6'>Shiping policy</button>

                    </div>

                    <div>
                        <button className='pb-5' variant='h6'>Partners</button>

                    </div>

                </Grid>

                <Grid item xs={12} sm={6} md={3} >

                    <Typography className='pb-5' variant='h6'>Connect With Us</Typography>

                    <div>
                        <button className='pb-5' variant='h6'>Blog</button>

                    </div>
                    <div>
                        <button className='pb-5' variant='h6'>Facebook</button>

                    </div>
                    <div>
                        <button className='pb-5' variant='h6'>Twitter</button>

                    </div>
                    <div>
                        <button className='pb-5' variant='h6'>Instagram</button>

                    </div>

                </Grid>

                <Grid item xs={12} sm={6} md={3} >

                    <Typography className='pb-5' variant='h6'>Solutions</Typography>
                    <div>
                        <button className='pb-5' variant='h6'>Marketing</button>

                    </div>
                    <div>
                        <button className='pb-5' variant='h6'>Commerce</button>

                    </div>
                    <div>
                        <button className='pb-5' variant='h6'>Analytics</button>

                    </div>
                    <div>
                        <button className='pb-5' variant='h6'>Supports</button>

                    </div>


                </Grid>

                <Grid item xs={12} sm={6} md={3} >

                    <Typography className='pb-5' variant='h6'>Legal</Typography>
                    <div>
                        <button className='pb-5' variant='h6'>Claim</button>

                    </div>
                    <div>
                        <button className='pb-5' variant='h6'>Privacy</button>

                    </div>
                    <div>
                        <button className='pb-5' variant='h6'>Terms</button>

                    </div>


                </Grid>

                <Grid className='pt-20' items xs={12}>
                    <Typography variant='body2' component="p" align="center">
                        &copy; 2024 My Company. All rights reserved.
                    </Typography>

                    <Typography variant='body2' component="p" align="center">
                        Made with love by Me.
                    </Typography>

                    <Typography variant='body2' component="p" align="center">
                        Icons made by{' '}
                        <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">
                            Freepik
                        </a>{' '}
                        from{' '}
                        <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer">
                            www.flaticon.com
                        </a>
                    </Typography>
                </Grid>


            </Grid >
        </div >
    );
}

export default Footer;
