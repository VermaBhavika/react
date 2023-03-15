import { React, useEffect, useState } from 'react'
export function IpWithLocalStorage() {
    const [count, setCount] = useState();
    const [ip, setIp] = useState();
    const [newCount, setNewCount] = useState(0);
    const fetchIp = () => {
        return fetch('https://ipapi.co/json/')
            .then((response) => response.json())
            .then((data) => {
                setIp(data.ip)
            })
    }
    const fetchCount = async () => {
        const getResponse = await fetch(`https://api.countapi.xyz/get/google.com/dea111ed-fea4-4552-a450-5278c9695a53`)
        const response = await fetch(`https://api.countapi.xyz/set/google.com/dea111ed-fea4-4552-a450-5278c9695a53?value=${newCount}`)
        const hitResponse = await fetch(`https://api.countapi.xyz/hit/google.com/dea111ed-fea4-4552-a450-5278c9695a53`)
        // console.log(response.value)
        if (!hitResponse.ok) {
            throw new Error('count is not there')
        }
        else {
            return hitResponse.json()
        }

    }
    const checkItem = (localStorage.getItem('ip') !== null)
    // const local = localStorage.setItem("ip", ip);
    const localget = localStorage.getItem("ip");
    console.log(checkItem)
    useEffect(() => {
        fetchIp();
        fetchCount()
            .then((res) => {
                setNewCount(res.value)
            })
            .catch((e) => {
                console.log(e.message)
            })
        // if(checkItem == false){
        //     localStorage.setItem("ip", ip);
        //     setNewCount(newCount + 1)
        // }
    }, [])
    console.log(newCount)

    return (
        <>
            <h3>Count: {newCount}</h3>
            <h3>IP Address: {ip}</h3>
        </>
    )
}