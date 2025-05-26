// "use client";

import { Box, Container, Typography } from "@mui/material";


export default function Typescript() {

    let array: Array<number> // declare with type
    array = [1, 2, 3] // Correct
    //array = ["Alain", "Aian"] //Incorrect

    interface InsideObjects {
        id: number
        name: string
    }
    let obj: InsideObjects
    obj = { id: 1, name: "Alain"} // Correct
    // obj = "Alain" // Incorrect

    let string: string
    string = "Aian Kendrick B. Lim" // Correct
    // string = ["Alain"]

    let number: number
    // number = 1 // Correct
    number = "Alain"



    console.log(array)

    return (
        <Container maxWidth={'xl'}>
            <Box sx={{ height: '200px', bgcolor: '#f0f0f0' }}>
                <Typography variant="h1">
                    Typescript
                </Typography>
            </Box>
        </Container>
    )

}