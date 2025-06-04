"use client"

import { Typography, Box, FormControl, InputLabel, Input, FormHelperText, Container, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";


const AddBlog = () => {

    const [blogData, setBlogData] = useState({
        dateTime: "",
        title: "",
        author: "",
        content: ""
    })

    const handleTitleChange = (e: any) => {
        console.log(e.target.value)
        setBlogData({
            ...blogData,
            title: e.target.value
        })
    }

    const handleAuthorChange = (e: any) => {
        console.log(e.target.value)
        setBlogData({
            ...blogData,
            author: e.target.value
        })
    }

    const handleContentChange = (e: any) => {
        console.log(e.target.value)
        setBlogData({
            ...blogData,
            content: e.target.value
        })
    }

    useEffect(() => {
        console.log(blogData)
    }, [blogData])


    return (
        <Container maxWidth="xl" sx={{ p: 2 }}>
            <Box>
                <Typography variant="h1">
                    New blog
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", width: "480px", pt: 2 }}>

                    <FormControl sx={{ pb: 2 }}>
                        <InputLabel htmlFor="title">Title</InputLabel>
                        <Input
                            id="title"
                            aria-describedby="my-helper-text"
                            value={blogData.title}
                            onChange={(e) => handleTitleChange(e)}
                        />
                    </FormControl>

                    <FormControl sx={{ pb: 2 }}>
                        <InputLabel htmlFor="title">Author</InputLabel>
                        <Input
                            id="title"
                            aria-describedby="my-helper-text"
                            value={blogData.author}
                            onChange={(e) => handleAuthorChange(e)}
                        />
                    </FormControl>

                    <TextField
                        id="filled-multiline-static"
                        label="Content"
                        multiline
                        rows={4}
                        defaultValue=""
                        variant="filled"
                        value={blogData.content}
                        onChange={(e) => handleContentChange(e)}
                    />

                </Box>

                <Button variant="contained" sx={{mt: 2}}>Post</Button>

            </Box>
        </Container>
    );
}

export default AddBlog