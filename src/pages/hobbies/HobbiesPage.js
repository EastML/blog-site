import { Container, Typography } from "@mui/material"
import Navbar from "../../components/Navbar"
import Title from "../../components/Title"
import { CONSTANTS } from "./constants"
import DigimonSection from "./_components/DigimonSection"
import RunningSection from "./_components/RunningSection"

const HobbiesPage = () => {
    return (
        <Container>
            <Navbar />
            <Title mb={2}>
                {CONSTANTS.TITLE}
            </Title>
            <Typography mb={4}>
                {CONSTANTS.DESCRIPTION}
            </Typography>
            <RunningSection />
            <DigimonSection />
        </Container>
    )
}

export default HobbiesPage