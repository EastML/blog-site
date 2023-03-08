import { Box, Button, Container, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import Navbar from "../../components/Navbar"
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from "react"
import { blogs } from "./BlogFiles/_blogs"
import remarkGfm from "remark-gfm"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BlogEntryPage = () => {
    const { blogId } = useParams()

    const [content, setContent] = useState(null)

    const fetchBlogPost = async (id) => {
        if (blogs[id]) {
            const blogContent = await fetch(blogs[id].content)
            const contentText = await blogContent.text()
            setContent(contentText)
        } else {
            console.log("Uh, couldn't find it chief")
        }
    }

    useEffect(() => {
        if (!blogId) return
        fetchBlogPost(blogId)
    // eslint-disable-next-line
    }, [blogId])

    return (
        <Container>
            <Navbar />
            {content ? (
                <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
            ) : (
                <Typography>Yeah, yeah, give me a second. I'm lookin fer it...</Typography>
            )}
            <Box display='flex' justifyContent='center'>
                <Button variant='outlined' startIcon={<ArrowBackIcon/>} href='/blog'>
                    Head back to the list of blogs 
                </Button>
            </Box>
        </Container>
    )
}

export default BlogEntryPage