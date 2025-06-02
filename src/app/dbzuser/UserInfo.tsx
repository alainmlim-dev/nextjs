"use client";

import { Typography } from "@mui/material"
import { useEffect, useState } from "react";


const UserInfo = ({ userid }: any) => {

    const [isLoading, setIsLoading] = useState(true)

    const fetchUserData = async () => {

        try {

            const resp = await fetch('http://localhost:3000/api/dbzusers/' + userid, {
                method: 'GET'
            });

            if(!resp.ok) {
                console.log(resp)
            }
            
            const json = await resp.json();
            const data = json;
            console.log('fetchedData Client:', data)
            setIsLoading(false)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchUserData()
    }, [])


    return (

        <>
            {isLoading ?
                <Typography variant="h3">
                    Loading...
                </Typography>
                :
                <Typography variant="h3">
                    User: {userid}
                </Typography>
            }
        </>

    )
}

export default UserInfo