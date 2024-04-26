import React from 'react';
import Maincarousel from '../../components/HomeCarousel/Maincarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { ArduinoBoards } from '../../../Data/ArduinoBoards';

const Homepage = () => {
    return (
        <div>
            <Maincarousel />
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarousel data={ArduinoBoards} sectionName={"You May Like"} />
                <HomeSectionCarousel data={ArduinoBoards} sectionName={"Arduino Boards"} />
                <HomeSectionCarousel data={ArduinoBoards} sectionName={"Sensors"} />
                <HomeSectionCarousel data={ArduinoBoards} sectionName={"Motors"} />

            </div>
        </div>
    );
}

export default Homepage;
