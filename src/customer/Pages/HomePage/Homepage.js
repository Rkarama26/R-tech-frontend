import React, { useEffect } from 'react';
import Maincarousel from '../../components/HomeCarousel/Maincarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { ArduinoBoards } from '../../../Data/ArduinoBoards';
import { Sensors } from '../../../Data/Sensors';
import { useDispatch, useSelector } from 'react-redux';
import { findProductByCategory } from '../../../State/Product/Action';

const Homepage = () => {

    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.productList);


    useEffect(() => {
        dispatch(findProductByCategory({ category: "sensors" })); // Change category as needed
    }, [dispatch]);


    return (
        <div>
            <Maincarousel />
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>

            {!loading && !error && products.length > 0 ? (
                <HomeSectionCarousel data={products} sectionName={"Sensors"} />
            ) : (
                <p>No products available</p>
            )}
                
                {/* <HomeSectionCarousel data={ArduinoBoards} sectionName={"You May Like"} />
                <HomeSectionCarousel data={ArduinoBoards} sectionName={"Arduino Boards"} />
                <HomeSectionCarousel data={Sensors} sectionName={"Sensors"} />
                <HomeSectionCarousel data={ArduinoBoards} sectionName={"Motors"} /> */}

            </div>
        </div>
    );
}

export default Homepage;
