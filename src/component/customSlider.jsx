import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export const CustomSlider = () => {
    const [getData, setGetData] = useState();
    const [indexData, setIndexData] = useState(0);
    const fetchData = () => {
        return fetch('https://random-data-api.com/api/v2/users?size=5&is_xml=true')
            .then((response) => response.json())
            .then((data) => {
                setGetData(data)
            })
    }
    useEffect(() => {
        const lastIndex = getData?.length - 1;
        if (indexData < 0) {
            setIndexData(lastIndex);
        }
        if (indexData > lastIndex) {
            setIndexData(0);
        }
        let slider = setInterval(() => {
            setIndexData(indexData + 1)
        }, 1000);
        return () => {
            clearInterval(slider)
        }
    }, [indexData, getData]);

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>          
            <div className="section-center">
                {getData?.map((item, index) => {
                    const { avatar } = item;
                    let position = "nextSlide";
                    if (index === indexData) {
                        position = "activeSlide"
                    }
                    if (index === indexData - 1 || (indexData === 0 && index === getData?.length - 1)) {
                        position = 'lastSlide'
                    }
                    return (
                        <article className={position} >
                            <img src={avatar} alt="api data"  />
                        </article>
                    );
                        
                })}
                <button className="prev" onClick={() => setIndexData(indexData - 1)}>&lt;&lt;</button>
                <button className="next" onClick={() => setIndexData(indexData + 1)}>	&gt;&gt;</button>
            </div>
        </>
    );
};