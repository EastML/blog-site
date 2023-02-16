import { Avatar, Box, Container } from "@mui/material"
import avatar from '../../static/avatar.png'
import Body from "./_components/Body"
import Greeting from "./_components/Greeting"
import Navbar from "./_components/Navbar"
import Socials from "./_components/Socials"

const HomePage = () => {
    return (
        <Container>
            <Box mt={4}>
                <Socials />
                <Avatar src={avatar} sx={{ width: 150, height: 150 }} />
                <Greeting />
                <Navbar />
                <Body />
            </Box>
        </Container>
    )
}

export default HomePage