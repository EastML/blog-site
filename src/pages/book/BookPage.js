import { Container } from "@mui/material"
import Navbar from "../../components/Navbar";
import Title from "../../components/Title"
import { CONSTANTS } from "./constants"
import BookSection from "./_components/BookSection";

const BookPage = () => {
    return (
        <Container>
            <Navbar />

            <Title mb={2}>
                {CONSTANTS.TITLE}
            </Title>
            <BookSection />
        </Container>
    )
}

export default BookPage 