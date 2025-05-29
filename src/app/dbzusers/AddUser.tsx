"use client";

import React, { useEffect, useState } from 'react';
import { Box, TextField } from "@mui/material";
import AddButton from './AddButton';


const AddUser = () => {

    const [inputData, setInputData] = useState({
        name: null,
        planet: null,
        spouse: null
    })

    const handleNameChange = (e: any) => {
        setInputData({
            ...inputData,
            name: e.target.value
        })
    }

    const handlePlanetChange = (e: any) => {
        setInputData({
            ...inputData,
            planet: e.target.value
        })
    }

    const handleSpouseChange = (e: any) => {
        setInputData({
            ...inputData,
            spouse: e.target.value
        })
    }

    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", bgcolor: "white" }}>
                <TextField
                    id="filled-basic"
                    label="Name"
                    variant="filled"
                    defaultValue={inputData.name}
                    onChange={(e) => handleNameChange(e)}
                />
                <TextField
                    id="filled-basic"
                    label="Planet"
                    variant="filled"
                    defaultValue={inputData.planet}
                    onChange={(e) => handlePlanetChange(e)}
                />
                <TextField
                    id="filled-basic"
                    label="Spouse"
                    variant="filled"
                    defaultValue={inputData.spouse}
                    onChange={(e) => handleSpouseChange(e)}
                />
            </Box>

            <AddButton userData={inputData} />
        </>

    )

}

export default AddUser