import { Box, Container, Typography } from "@mui/material"


const BlogPosts = ({ posts }: any) => {

    return (

        <Box sx={{ pt: 4 }}>
            <Box className="blog-post">

                <Typography variant="body1" sx={{ color: "#616161" }}>
                    June 3, 2025
                </Typography>

                <Typography variant="h4">
                    Title
                </Typography>

                <Typography variant="body1" sx={{ color: "#616161", pb: 2 }}>
                    Author's name
                </Typography>

                <Typography variant="body1" sx={{ color: "#424242" }} className="blog-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta ligula dolor, quis congue elit placerat varius. Suspendisse aliquet dapibus velit non molestie. Duis nisl nisi, gravida facilisis felis in, efficitur tincidunt dui. Nam elementum ac risus at condimentum. Cras condimentum convallis urna, id hendrerit nibh rutrum eu. Pellentesque tincidunt ullamcorper quam, eu ullamcorper enim cursus vel. Nam bibendum enim ut mauris molestie fringilla. Integer nec nunc faucibus, feugiat purus eget, auctor ex. Praesent ultrices ultrices rhoncus. Sed non dui sollicitudin, tempor arcu a, laoreet nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi mattis pharetra egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus eu aliquam purus. Praesent ultricies mauris libero, non varius nisl scelerisque quis. Etiam tellus magna, eleifend eu diam eu, semper imperdiet mauris. Sed sollicitudin tempor tincidunt. Nam ornare iaculis elit, in dapibus dui placerat eu. Suspendisse tincidunt malesuada molestie.
                </Typography>



            </Box>
        </Box>

    )

}

export default BlogPosts