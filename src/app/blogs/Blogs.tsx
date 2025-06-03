import { Box, Button, Container, Typography } from "@mui/material"
import BlogPosts from "./BlogPosts"
import { useRouter } from "next/navigation"


const Blogs = () => {

    const { push } = useRouter();

    return (
        <Container maxWidth="xl" sx={{ bgcolor: "#eeeeee", minHeight: "100vh", pt: 2 }}>
            <Box sx={{ position: "relative" }}>
                <Typography variant="h1">
                    Blogs
                </Typography>

                <Button variant="outlined" sx={{ position: "absolute", right: 0 }} onClick={() => push('blogs/addblog')}>Add post</Button>

                <BlogPosts />

            </Box>
        </Container>
    )

}

export default Blogs