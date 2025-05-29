"use client"

import { Button } from "@mui/material";


const AddButton = ({userData}: any) => {

    const handleAddUser = async () => {

        console.log('AddButton', userData)

        const resp = await fetch('http://localhost:3000/api/dbzusers', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        const json = await resp.json();
        const data = json;
        console.log(data)

    }

    return (
        <Button onClick={handleAddUser}>
            Add User
        </Button >
    )

}

export default AddButton