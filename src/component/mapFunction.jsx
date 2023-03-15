import { React, useEffect, useState } from 'react';
export function MapFunction () {
    const [getData, setGetData] = useState();
    const fetchData = () =>{
        return fetch('https://random-data-api.com/api/v2/users?size=2&is_xml=true')
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
            <>
                <div className="data" key={index}>
                    <h1>Data from Api {index + 1}</h1>
                    <img src={item.avatar}/>
                    <h3>Personal Information</h3>
                    <p>Usename: {item.username}, First Name: {item.first_name}, Last Name: {item.last_name}, Gender: {item.gender}, Phone Number: {item.phone_number}</p>
                    <h3>Address:</h3>
                    <p>Street: {item.address.street_address} City: {item.address.city}, State: {item.address.state}, Country {item.address.country}, Zip Code: {item.address.zip_code}</p>
                </div> 
            </>
        ))
        
    )
}