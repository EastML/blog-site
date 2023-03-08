import { Box, Container, Link, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import Navbar from "../../components/Navbar"
import StyledSpan from "../../components/StyledSpan"
import Title from "../../components/Title"
import { blogs } from "./BlogFiles/_blogs"

const BlogPage = () => {
    const blogList = Object.entries(blogs)

    return (
        <Container>
            <Navbar />
            <Title mb={2}>
                Just some thoughts
            </Title>
            <Box my={2}>
                I think at the very minimum I'd like to create at least a blog post per year as somewhat of a yearly summary, and then from there, maybe create a few more during the year, but I don't want my current expectation to put words in my future self's mouth [He's done that before, and future me was none to happy lol]. So if you're some passerby on the internet, looking to learn a little more about the person who built up this little corner of the internet, check out the blog posts below.
            </Box>
            <List>
            {blogList.map(blog => (
                <ListItem key={blog[1].id}>
                    <ListItemIcon>
                        {blog[1].icon}
                    </ListItemIcon>
                    <ListItemText>
                        <Typography component='div'>
                            <Link key={blog[0]} href={`blog/${blog[0]}`} underline='hover'>
                                <StyledSpan>{blog[1].name}</StyledSpan> - {blog[1].date}
                            </Link>
                        </Typography>
                        <Typography>
                            {blog[1].summary}
                        </Typography>
                        <Typography fontStyle='italic' variant='caption' gutterBottom>
                            Tags: [{' '}
                            {blog[1].tags.map((tag, i) => (
                                i === blog[1].tags.length - 1 ? `${tag}` : `${tag} | `
                            ))}
                            {' '}]
                        </Typography>
                    </ListItemText>
                </ListItem>
            ))}
            </List>
        </Container>
    )
}

export default BlogPage