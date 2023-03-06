import { Container } from "@mui/material"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
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
            {blogList.map(blog => (
                <Link key={blog[0]} to={blog[0]}>{blog[1].name}</Link>
            ))}
        </Container>
    )
}

export default BlogPage