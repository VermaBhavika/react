import React, { useState, useEffect } from 'react';

export function IpWithLocalStorage() {

    const [ip, setIP] = useState();
    const [newCount, setNewCount] = useState(null);
    const checkItem = (localStorage.getItem('IP') !== null)
    const [dataValue, setDataValue] = useState()

    const fetchData = async () => {
        const getResponse = await fetch(`https://api.countapi.xyz/get/reactjs.org/c3da476f-a9cd-401e-a932-9f2533d3fde9`)
        // .then(function (response) {
        //     return response.text();
        // })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.value)
                return setDataValue(data.value)
            })
        console.log(dataValue)
        const response = await fetch(`https://api.countapi.xyz/set/reactjs.org/c3da476f-a9cd-401e-a932-9f2533d3fde9?value=${dataValue}`)
        const hitResponse = await fetch(`https://api.countapi.xyz/hit/reactjs.org/c3da476f-a9cd-401e-a932-9f2533d3fde9`)
        // console.log(response.value)
        if (!hitResponse.ok) {
            throw new Error('count is not there')
        }
        else {
            return hitResponse.json()
        }

    }

    const fetchIp = () => {
        return fetch("https://ipapi.co/json")
            .then((response) => response.json())
            .then((data) => {
                setIP(data.ip)
            })
    }
    useEffect(() => {
        
        fetchData()
            .then((res) => {
                setNewCount(res.value)
            })
            .catch((e) => {
                console.log(e.message)
            })
        fetchIp();

    }, [])

    localStorage.setItem("IP", ip);

    return (
        <>
            <h1>Count: {newCount}</h1>
            <h2>Ip: {ip}</h2>
        </>
    );

};




