"use client";

import { Typography, Box, Container, Divider, FormControl, InputLabel, Input, FormHelperText, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const EditForm = ({ userInfo }: any) => {

    const [newUserData, setNewUserData] = useState(userInfo)
    const {push} = useRouter();

    const handleNewName = (e: any) => {
        setNewUserData({
            ...newUserData,
            name: e.target.value
        })
    }

    const handleNewPlanet = (e: any) => {
        setNewUserData({
            ...newUserData,
            planet: e.target.value
        })
    }

    const handleNewSpouse = (e: any) => {
        setNewUserData({
            ...newUserData,
            spouse: e.target.value
        })
    }

    const handleUpdateUser = async () => {

        const resp = await fetch('http://localhost:3000/api/dbzuser/edit/', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserData)
        });
        const json = await resp.json();
        console.log(json)
        // push('/dbuser/' + userInfo._id)
        

    }

    useEffect(() => {
        console.log(newUserData)
    }, [newUserData])

    return (
        <Box sx={{display: "flex", flexDirection: "column"}}>
            <FormControl sx={{ width: "600px" }}>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input
                    id="my-input"
                    sx={{ bgcolor: "f0f0f0" }}
                    value={newUserData.name}
                    onChange={(e) => handleNewName(e)}
                />
            </FormControl>

            <FormControl sx={{ width: "600px", mt: 3 }}>
                <InputLabel htmlFor="my-input-planet">Planet</InputLabel>
                <Input
                    id="my-input-planet"
                    sx={{ bgcolor: "f0f0f0" }}
                    value={newUserData.planet}
                    onChange={(e) => handleNewPlanet(e)}
                />
            </FormControl>

            <FormControl sx={{ width: "600px", mt: 3 }}>
                <InputLabel htmlFor="my-input-spouse">Spouse</InputLabel>
                <Input
                    id="my-input-spouse"
                    sx={{ bgcolor: "f0f0f0" }}
                    value={newUserData.spouse}
                    onChange={(e) => handleNewSpouse(e)}
                />
            </FormControl>

            <Button sx={{fontSize: "2rem", pt: 2}} onClick={() => handleUpdateUser()}>Save</Button>

        </Box>
    )
}

export default EditForm