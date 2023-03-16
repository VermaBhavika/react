import {React, useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export function SlickSlider(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000
    };
    const [getData, setGetData] = useState()
    const fetchData = () => {
        return fetch('https://random-data-api.com/api/v2/users?size=5&is_xml=true')
            .then((response) => response.json())
            .then((data) => {
                setGetData(data)
            })
    }
    console.log(getData)
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <Slider {...settings} className='slider'>
            {getData?.map((item, index) => (            
                <img src={item?.avatar}  height="300" width="100" key={index}/>
            ))}
            
        </Slider>
    );
}