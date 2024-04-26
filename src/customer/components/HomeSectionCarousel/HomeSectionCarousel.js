import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { ArduinoBoards } from '../../../Data/ArduinoBoards';

const HomeSectionCarousel = ({data, sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const slidePrev = () => {
        setActiveIndex(activeIndex - 1);
    };

    const slideNext = () => {
        setActiveIndex(activeIndex + 1);
    };

    const syncActiveIndex = ({ item }) => {
        setActiveIndex(item);
    };

    const items = data.slice(0, 8).map((item, index) => (
        <div key={index}>
            <HomeSectionCard product={item} />
        </div>
    ));

    return (
        <div className=" ">
        <h2 className='text-2xl font-extrabold text-gray-800 py- text-left'>{sectionName}</h2>
            <div className="relative p-5">
                <div style={{ position: 'relative' }}>
                    <AliceCarousel
                        items={items}
                        
                        responsive={responsive}
                        disableDotsControls
                        // disableButtonsControls
                        onSlideChanged={syncActiveIndex}
                        activeIndex={activeIndex}
                    />
                    {activeIndex > 0 && (
                        <button
                            className="z-50 absolute top-1/2 -translate-y-1/2 left-0 transform rotate-90 cursor-pointer"
                            onClick={slidePrev}
                            aria-label="previous"
                        >
                            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)' }} />
                        </button>
                    )}
                    {activeIndex < items.length - 5 && (
                        <button
                            className="z-50 absolute top-1/2 -translate-y-1/2 right-0 transform rotate-90 cursor-pointer"
                            onClick={slideNext}
                            aria-label="next"
                        >
                            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)' }} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
