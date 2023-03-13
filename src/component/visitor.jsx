import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';

export function VisitorCount() {
    const [visiterCounter, setVisiterCounter] = useState(0)
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    const [cookies, setCookie] = useCookies(['user']);
    const handle = () => {
        setCookie('Name', name, { path: '/' });
        setCookie('Password', pwd, { path: '/' });
        setCookie('access_token', 'hello')
    };



    console.log(cookies.access_token)

    //
    //     const onPageLoad = () => {
    //         setVisiterCounter(visiterCounter+1);
    //     };

    //     // Check if the page has already loaded
    //     if (document.readyState === 'complete') {
    //         onPageLoad();
    //     } else {
    //         window.addEventListener('load', onPageLoad);
    //         // Remove the event listener when component unmounts
    //         return () => window.removeEventListener('load', onPageLoad);
    //     }
    // });

    return (
        <div className="App">
            {visiterCounter}
            <h1>Name of the user:</h1>
            <input
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <h1>Password of the user:</h1>
            <input
                type="password"
                placeholder="name"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
            />
            <div>
                <button onClick={handle}>Set Cookie</button>
            </div>
            {cookies.Name && (
                <div>
                    Name: <p>{cookies.Name}</p>
                </div>
            )}
            {cookies.Password && (
                <div>
                    Password: <p>{cookies.Password}</p>
                </div>
            )}
        </div>
        // <h1>Number of Visitors <span>{visiterCounter}</span></h1>

    )

}
