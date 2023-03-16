import { React, useEffect, useState } from 'react';
import { PreviewData } from './previewData';
export function MainLayout () {
    const [getData, setGetData] = useState();
    const fetchData = () =>{
        return fetch('https://random-data-api.com/api/v2/users?size=5&is_xml=true')
            .then((response) => response.json())
            .then((data) => {
                setGetData(data)
            })
    }
    console.log(getData)
    useEffect(() => {
        fetchData();
    },[])
    return (
        
        getData?.map((item,index) => (
        
                <PreviewData data={item} i={index}/>
            
        ))
        
    )
}