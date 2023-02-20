import { Container, Typography } from "@mui/material"
import Navbar from "../../components/Navbar"
import Title from "../../components/Title"
import { CONSTANTS } from "./constants"
import DigimonSection from "./_components/DigimonSection"
import RunningSection from "./_components/RunningSection"
import ShadowverseSection from "./_components/ShadowverseSection"

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
            <ShadowverseSection />
        </Container>
    )
}

export default HobbiesPage