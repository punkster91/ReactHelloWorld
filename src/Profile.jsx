import React, { useState, useEffect } from 'react'
import './Profile.css'
function Profile() {
    const [userId, setUserId] = useState(1);
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);  // loading state
    const [error, setError] = useState(null);   // error state
    const userCache = React.useRef({});    // create a cache to store user data locally

    // fetch user data whenever userId changes
    useEffect(() => {
        setIsLoading(true);
        setError(null);

        // if user data is already cached, use it
        if (userCache.current[userId]) {
            setUserData(userCache.current[userId]);
            setIsLoading(false);
            return;
        }

        const controller = new AbortController();
        const signal = controller.signal;
        const fetchData = async () => {
            try {
                const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
                const response = await fetch(url, { signal });

                if (response.status === 404) {
                    throw new Error("User not found (404)");
                }

                const data = await response.json();
                setUserData(data);

                // cache the fetched data
                userCache.current[userId] = data;
            } catch (error) {
                if (error.name === 'AbortError') return;    // ignore abort errors
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();

        // clean up code by aborting the fetch if userId changes or component unmounts
        return () => controller.abort();
    }, [userId]);

    const nextUser = () => {
        setUserId(prevUserId => prevUserId + 1);
    }

    const prevUser = () => {
        if (userId > 1) {
            setUserId(u => u - 1);
        }
    };
    const isPrevUserDiabled = () => userId <= 1;


    return (
        <div>
            <h1>User Profile</h1>
            <h2>User id: {userId}</h2>

            {isLoading && <p>Loading...</p>}

            {error && <p style={{ color: "red" }}>{error}</p>}

            {userData && !error && !isLoading && (
                <div>

                    <h2>{userData.name}</h2>
                    <p>{userData.email}</p>
                </div>)
            }



            <button onClick={prevUser} disabled={isPrevUserDiabled()}>Previous User</button>
            <button onClick={nextUser}>Next User</button>
        </div>
    )
}

export {Profile}