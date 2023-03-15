import { React, useEffect, useState } from 'react';
export function MapFunction () {
    const imgs=[
        { id: 0, image:"https://thumbs.dreamstime.com/b/yellow-crash-test-dummy-yellow-crash-test-dummy-car-seat-116968697.jpg"},    
        { id: 1, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7BEpED5EP8FrXCc5Ntnw0a6_XL5tj51Uq1mWg5vDOQ&s"},    
        { id: 2, image:"https://stylecaster.com/wp-content/uploads/2022/12/Emily-the-Criminal-2.jpg"},     
    ]
    const [sliderData, setSliderData] = useState(imgs[0])

    const handleClick = (index) => {
        console.log(index)
        const slider = imgs[index]
        setSliderData(slider)
    }
    return (
        <>

            <img src={sliderData.image} height="300" width="500"/>
        <div className='imageThumbnail'>
                {imgs?.map((item,index) => (
                <>
                    <img key={index} src={item.image} onClick={() => handleClick(index)} height="200" />
                </>
                ))}
        </div>
        </>
        
        
    )
}