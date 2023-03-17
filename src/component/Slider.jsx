import { React, useEffect, useState } from 'react'
// import { Data } from './data'

export const Slider = () => {
    const [index, setIndex] = useState();
    // const [people] = useState(Data)
    const [data, setData] = useState();
    const fetchData = () => {
        return fetch('https://mocki.io/v1/d480b785-19d9-45cd-b6ac-369fb2be3196')
        .then((response) => response.json())
        .then ((d) => {
            setData(d);
            console.log(d)
        })
    }
    useEffect(() => {
         fetchData()
        console.log('hello')

        })
    // console.log(people)
    // useEffect(() => {
    //     fetchData()
    //     const lastIndex = data.length - 1;
    //     if (index <0 ){
    //         setIndex(lastIndex);
    //     }
    //     if(index>lastIndex){
    //         setIndex(0)
    //     }
    // },[index,data]);
    // useEffect(() => {
    //     let slider = setInterval(() => {
    //         setIndex(index+1)
    //     }, 5000)
    //     return () => {
    //         clearInterval(slider)
    //     }
    // }, [index])
    return (
        <>
            {/* {data?.map((item) => (
                // <img src={item.avatar}/>
            ))} */}
        </>
    )
}

