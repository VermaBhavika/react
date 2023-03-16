import React, { useEffect, useState } from 'react'
import { SliderButton } from './sliderButton';
export  function CustomSlider() {

    const [slideIndex, setSlideIndex] = useState(1)
    const [slideData, setSlideData] = useState();
    const fetchData = () => {
        return fetch('https://random-data-api.com/api/v2/users?size=5&is_xml=true')
            .then((response) => response.json())
            .then((data) => {
                setSlideData(data)
            })
    }
    const nextSlide = () => {
        if (slideIndex !== slideData.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === slideData.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(slideData.length)
        }
    }

    useEffect(() => {
       fetchData() 
    },[])

    return (   
        <h1>Custom Slider</h1>,
        <div className="container-slider">
            {slideData?.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img
                            src={item.avatar} alt="slider"
                        />
                    </div>
                )
            })}
            <SliderButton moveSlide={nextSlide} direction={"next"} />
            <SliderButton moveSlide={prevSlide} direction={"prev"} />

            
        </div>
    )
}