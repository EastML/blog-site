import { Container, Typography } from "@mui/material"
import Navbar from "../../components/Navbar"
import Title from "../../components/Title"
import RunningSection from "./_components/RunningSection"

const HobbiesPage = () => {
    return (
        <Container>
            <Navbar />
            <Title mb={2}>
                "Even though you're growing up, you should never stop having fun"
            </Title>
            <Typography mb={4}>
                This page is for my hobbies, other than coding [consider there is a whole page for that haha]. You may ask, "Isn't coding your job?" While that is true, the only reason I have a job as a software developer is because it was my hobby first. I'll save the rest for the actual coding page, so without further ado... onto the hobbies!
            </Typography>

            <RunningSection />
        </Container>
    )
}

export default HobbiesPage