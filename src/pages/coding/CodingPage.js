import { Masonry } from "@mui/lab"
import { Container, Typography } from "@mui/material"
import Navbar from "../../components/Navbar"
import Title from "../../components/Title"
import ProjectCard from "./_components/ProjectCard"
import shadowverseMemo from '../../static/shadowverse-memo.png'
import gameOfLife from '../../static/game-of-life.png'
import markdownPreview from '../../static/markdown-preview.png'
import simonster from '../../static/simonster.png'
import wikipediaApi from '../../static/wikipedia-api.png'
import calculator from '../../static/calculator.png'
import chatRoom from '../../static/chat-room.png'
import { CONSTANTS } from "./constants"

const codingProjects = [
    {
        name: 'MERN Stack Chat Room',
        date: 'Christmas Season 2022',
        image: chatRoom,
        link: 'https://github.com/EastML/fullstack-chat',
        description: CONSTANTS.MERN_DESC
    },
    {
        name: 'Shadowverse Win-Tracker',
        date: 'Christmas Season 2021',
        image: shadowverseMemo,
        link: 'https://shadowverse-wintracker.web.app/',
        description: CONSTANTS.SV_DESC
    },
    {
        name: 'The Game of Life',
        date: 'November 2017',
        image: gameOfLife,
        link: 'https://codepen.io/East/full/XeZPOZ',
        description: CONSTANTS.LIFE_DESC
    },
    {
        name: 'Markdown Previewer',
        date: 'May 2017',
        image: markdownPreview,
        link: 'https://codepen.io/East/full/pPVymW',
        description: CONSTANTS.MARK_DESC
    },
    {
        name: 'SiMonster',
        date: 'April 2017',
        image: simonster,
        link: 'https://codepen.io/East/full/oZwbjP',
        description: CONSTANTS.SIMON_DESC
    },
    {
        name: 'Wikipedia Search App',
        date: 'October, 2016',
        image: wikipediaApi,
        link: 'https://codepen.io/East/full/YGbrYW',
        description: CONSTANTS.WIKI_DESC
    },
    {
        name: 'Calculator',
        date: 'February 2016',
        image: calculator,
        link: 'https://codepen.io/East/full/WRzXxY',
        description: CONSTANTS.CALC_DESC
    }
]

const CodingPage = () => {
    return (
        <Container>
            <Navbar />
            <Title mb={2}>
                {CONSTANTS.TITLE}
            </Title>
            <Typography mb={4}>
                {CONSTANTS.DESCRIPTION}
            </Typography>
            <Masonry spacing={2} columns={3}>
                {codingProjects.map(project => (
                    <ProjectCard project={project} key={project.name}/>
                ))}
            </Masonry>
        </Container>
    )
}

export default CodingPage