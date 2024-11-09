
import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { Box, Grid, LinearProgress, Rating } from '@mui/material'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ProductReviewCard from './ProductReviewCard';
import { Sensors } from '../../../Data/Sensors';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findProductById } from '../../../State/Product/Action';

const product = {

    name: 'Temperature & Humidity Sensor',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Electronics', href: '#' },
        { id: 2, name: 'Sensors', href: '#' },
    ],
    images: [
        {
            src: '/home_images/sensor_images/dht11.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: '/home_images/sensor_images/hc-sr04.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: '/home_images/sensor_images/mpu-6050.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },

    ],


    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',

    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',


    "specifications": {
        "Sensor Type": "Temperature and Humidity",
        "Operating Voltage": "3-5.5V",
        "Output Type": "Digital",
        "Temperature Range": "0-50°C",
        "Humidity Range": "20-90% RH",
        "Accuracy": "±2°C, ±5% RH",
        "Response Time": "2s",
        "Interface": "Single-wire digital interface",
        "Dimensions": "15.5mm x 12mm x 5.5mm",
        "Weight": "1g"

    },



    features: [
        "Low power consumption.",
        "DHT11 sensor adopts.",
        "The module can detect the surrounding environment of the humidity and temperature.",
        "High reliability and excellent long-term stability.",
        "The output from the digital output.",
        "Has fixed bolt hole and easy installation.",
        "It can detect the humidity and temperature of the surrounding environment."
    ]




}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {

    const [showFeatures, setShowFeatures] = useState(true);
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const { customerProduct } = useSelector((store) => store);


    console.log('Current product state:', customerProduct);


    const handleAddToCart = () => {
        navigate("/cart")
    }

    useEffect(() => {
        const data = { productId: params.productId }
        dispatch(findProductById(data))
    }, [params.productId])

    return (
        <div className="text-left bg-white lg:px-10">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                {/* section */}
                <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>

                    {/* Image gallery */}
                    <div className="flex flex-col items-center">
                        <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                            <img
                                src={customerProduct.product?.imageUrl}
                                alt={product.images[0].alt}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="flex flex-wrap space-x-2 justify-center">
                            {product.images.map((item, index) =>
                                <div key={index} className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>)}

                        </div>

                    </div>

                    {/* Product info */}
                    <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="lg:col-span-2">
                            <h1 className="text-left text-lg lg:text-2xl font-bold text-gray-900">
                                { customerProduct.product?.title}
                            </h1>
                            <hr className="my-4 border-gray-200" />

                        </div>

                        {/* Specifications */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0 lg:col-start-2 lg:col-end-3">
                            <h2 className="sr-only">Product Specifications</h2>
                            <div className="text-left opacity-80 ">
                                <ol className="list-inside mt-2 text-sm text-gray-800" style={{ listStyleType: 'decimal', paddingLeft: '1.5em' }}>
                                   
                                    {customerProduct.product?.description}
                                </ol>
                            </div>


                            <hr className="my-4 border-gray-200" />

                        </div>



                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>

                            <div className='flex space-x-5 items-center   text-gray-900 mt-6'>

                                <p className='font-semibold text-lg'>₹{customerProduct.product?.discountedPrice}</p>
                                <p className='opacity-50 line-through'>₹{customerProduct.product?.price}</p>
                                <p className='text-green-600 font-semibold'>{customerProduct.product?.discountPercent }% off</p>

                            </div>
                            <div>
                                <p className=' mt-1 text-left text-sm opacity-50'>(Inclusive of all taxes)</p>

                            </div>

                            {/* Reviews */}
                            <div className="mt-6">
                                <div className='flex items-center space-x-3'>
                                    <Rating name="read-only" value={3.5} readOnly />
                                    <p className='opacity-70'>|</p>
                                    <p className='opacity-50 text-sm'>78943 Rtings</p>
                                    <p className='opacity-70'>|</p>
                                    <p className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-5000'>490 Reviews</p>
                                </div>

                            </div>
                            <hr className="my-4 border-gray-200" />

                            {/* Free Delivery, Replacements, COD, Support */}
                            <div className="mt-8">
                                <div className="flex items-center space-x-3 mt-2 text-sm text-gray-800 opacity-80">
                                    <LocalShippingOutlinedIcon fontSize="large" />
                                    <p className="ml-2">Free Delivery</p>
                                    <KeyboardReturnOutlinedIcon fontSize="large" />
                                    <p className="ml-2">7 Day Replacement </p>
                                </div>
                                <div className="flex items-center space-x-3 mt-2 text-sm text-gray-800 opacity-80">
                                    <PaidOutlinedIcon fontSize="large" />
                                    <p className="ml-2">COD available</p>
                                    <SupportAgentOutlinedIcon fontSize="large" />
                                    <p className="ml-2">Support </p>
                                </div>

                            </div>
                            <hr className="my-4 border-gray-200" />



                            <form className="mt-10">

                                <button onClick={handleAddToCart}
                                    type="submit"
                                    className="mt-10 flex  items-center justify-center 
                                    rounded-md border border-transparent bg-indigo-600 px-8 
                                    py-3 text-base font-medium text-white hover:bg-indigo-700 
                                    focus:outline-none focus:ring-2 focus:ring-indigo-500 
                                    focus:ring-offset-2">
                                    Add To Cart
                                </button>
                            </form>

                        </div>
                    </div>

                </section>

                {/* Features and Specifications */}
                <section>
                    <div className="px-4 ">
                        <div className="flex  space-x-4 my-8">

                            <button
                                className={`px-4 py-2 rounded-md focus:outline-none ${showFeatures ? 'bg-gray-200' : 'bg-white'}`}
                                onClick={() => setShowFeatures(true)}
                            >
                                Features
                            </button>
                            <button
                                className={`px-4 py-2 rounded-md focus:outline-none ${!showFeatures ? 'bg-gray-200' : 'bg-white'}`}
                                onClick={() => setShowFeatures(false)}
                            >
                                Specifications
                            </button>
                        </div>

                        <div className='text-left mx-8'>
                            <hr className="my-4 border-gray-200" />

                            {showFeatures ? (

                                <div >
                                    <ul className="list-disc list-inside">
                                        {product.features.map((feature, index) => (
                                            <li key={index} className="mb-2 text-gray-600">{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <div >
                                    <ul className="mt-4 space-y-1 list-disc list-inside">
                                        {Object.entries(product.specifications).map(([key, value]) => (
                                            <li key={key} className="text-gray-600">
                                                <span className="font-medium">{key}: </span>
                                                {value}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            )}
                        </div>
                    </div>
                </section>

                {/* rating and reviews*/}
                <section className='  mt-10 text-left'>
                    <h1 className='font-semibold  pb-4'>Recent Review & Rating</h1>
                    <div className='border p-5'>

                        <Grid container spacing={7}>
                            <Grid item xs={7}>
                                <div className='space-y-5'>
                                    {[1, 1, 1].map((item) => <ProductReviewCard />)}

                                </div>

                            </Grid>
                            <Grid item xs={5}>
                                <h1 className='text-x1 font-semibold pb-2'>Product Ratings</h1>

                                <div className='flex items-center space-x-3'>
                                    <Rating value={4.6} precision={.5} readOnly />
                                    <p className='opacity-60'>5489</p>
                                </div>


                                <Box className="mt-5 space-y-1">
                                    <Grid container alignItems="center" gap={2}></Grid>

                                    <Grid item xs={2}>
                                        <p>Excellent</p>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                                            variant='determinate' value={80} color="success" />

                                    </Grid>

                                    <Grid container alignItems="center" gap={2}></Grid>

                                    <Grid item xs={2}>
                                        <p>Very Good</p>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                                            variant='determinate' value={60} color="success" />

                                    </Grid>
                                    <Grid container alignItems="center" gap={2}></Grid>

                                    <Grid item xs={2}>
                                        <p>Good</p>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                                            variant='determinate' value={40} className='bg-yellow-300' />

                                    </Grid>
                                    <Grid container alignItems="center" gap={2}></Grid>

                                    <Grid item xs={2}>
                                        <p>Average</p>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                                            variant='determinate' value={20} color="warning" />

                                    </Grid>
                                    <Grid container alignItems="center" gap={2}></Grid>

                                    <Grid item xs={2}>
                                        <p>Poor</p>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                                            variant='determinate' value={10} color="error" />

                                    </Grid>

                                </Box>
                            </Grid>

                        </Grid>

                    </div>

                </section>

                {/* similar products */}
                <section className='pt-10'>
                    <h1 className='py-5 text-x1 text-lg font-bold'>Similar Products</h1>

                    <div className='flex flex-wrap space-y-5'>
                        {Sensors.map((item) => <HomeSectionCard product={item} />)}

                    </div>

                </section>

            </div>

        </div>
    )
}
