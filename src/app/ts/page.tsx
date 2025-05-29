// "use client";

import { Box, Container, Typography } from "@mui/material";


export default function Typescript() {

    interface ArrayObj {
        name: string
        age: number
    }
    let arrayObj: Array<ArrayObj>
    arrayObj = [
        {
            name: "Aian",
            age: 4
        },
        {
            name: "Alain",
            age: 39
        }
    ] // Correct
    // arrayObj = [1,2,3] // Incorrect


    let arrayNum: Array<number> // declare with type
    arrayNum = [1, 2, 3] // Correct
    //arrayNum = ["Alain", "Aian"] //Incorrect

    let arrayNum2: number[]
    // arrayNum2 = [1,2,3] // Correct
    // arrayNum2 = [1,2,"3"] // Incorrect

    let arrayMixed: (number | string)[]
    arrayMixed = [1, 2, "3"] // Correct
    // arrayMixed = [1, 2, { number: 2}, null, undefined] // Incorrect

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
    number = 1 // Correct
    // number = "Alain" // Incorrect

    let tuple: [number, string, boolean]
    tuple = [12, "Alain", true] ; // Correct
    // tuple = ["Alain", 12, false] // Incorrect

    let singleObj: {
        id: number
        name: string
    }
    singleObj = { id: 1, name: "Aian"} // Correct
    // singleObj = { id: 1, name: true} // Incorrect


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