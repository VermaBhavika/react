import { React, useEffect, useState } from 'react';
export function MapFunction () {
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
            <>
                <div className="data" key={index}>
                    <h1>Data from Api {index + 1}</h1>
                    <img src={item.avatar}/>
                    <h3>Personal Information</h3>
                    <ul>
                        <li>Usename: {item.username}</li>
                        <li>First Name: {item.first_name}</li>
                        <li>Last Name: {item.last_name}</li>
                        <li> Gender: {item.gender}</li>
                        <li>Phone Number: {item.phone_number}</li>
                    </ul>
                    <h3>Address:</h3>
                    <ul>
                        <li>Street: {item.address.street_address}</li>
                        <li>City: {item.address.city}</li>
                        <li>State: {item.address.state}</li>
                        <li>Country {item.address.country}</li>
                        <li>Zip Code: {item.address.zip_code}</li>
                    </ul>
                </div> 
            </>
        ))
        
    )
}