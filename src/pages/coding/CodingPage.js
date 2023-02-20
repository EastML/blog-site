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

const codingProjects = [
    {
        name: 'MERN Stack Chat Room',
        date: 'Christmas Season 2022',
        image: chatRoom,
        link: 'https://github.com/EastML/fullstack-chat',
        description: "I decided to do my own MERN stack project because I had never done one solo, and it seemed like a good learning experience. While I was creating it, I thought it would be cool to have it work in real-time, so I added websocket to it, to create always open connections. Unfortunately I would have to pay for hosting, and because this was just a simple hobby project, I didn't host it, but I put all of the code in github, where you can look at it, and run on your own machine. Even though everything is in one respository, it requires starting the front-end and backend separately."
    },
    {
        name: 'Shadowverse Win-Tracker',
        date: 'Christmas Season 2021',
        image: shadowverseMemo,
        link: 'https://shadowverse-wintracker.web.app/',
        description: "Another holiday React-based project. I decided to create a website that allowed users to record their game records and take notes on games. You could then view your own stats, or the stats of everyone on the site. It was subdivided by different decks, and you could also see notes of other players based on class and deck. I mainly focused on user profile and authentication using firebase. Its not maintained anymore but the records are still there. "
    },
    {
        name: 'The Game of Life',
        date: 'November 2017',
        image: gameOfLife,
        link: 'https://codepen.io/East/full/XeZPOZ',
        description: 'Oh man, I remember this one. When I was first learning React, this was one of the first projects I created that I was really proud of! I must have gone through the same react tutorial like 5 times. Even today, looking at this one makes me smile.'
    },
    {
        name: 'Markdown Previewer',
        date: 'May 2017',
        image: markdownPreview,
        link: 'https://codepen.io/East/full/pPVymW',
        description: 'Another React project that allows you to type and then see the output as Markdown. Simple project, but it was good for learning basic React textbox rendering fundamentals!'
    },
    {
        name: 'SiMonster',
        date: 'April 2017',
        image: simonster,
        link: 'https://codepen.io/East/full/oZwbjP',
        description: 'Built in jQuery, the first game I ever made using code. its a simon-says clone with a twist. Each level is a new monster you have to defeat and as you progress, you get items you can use to help win the game. I built a lot of this while I was visiting home and hanging out in the College of Charleston Computer Science Student Lounge, where my friend was going to school at the time. Thanks to all of those kind folks who gave me advice on this one. For experts, it even has a hard mode!'
    },
    {
        name: 'Wikipedia Search App',
        date: 'October, 2016',
        image: wikipediaApi,
        link: 'https://codepen.io/East/full/YGbrYW',
        description: 'Back when I was learning programming this was a project I did using jquery to build a simple search site that utilizes the free Wikipedia API. It also has functionality to show you random Wikipedia Pages.'
    },
    {
        name: 'Calculator',
        date: 'February 2016',
        image: calculator,
        link: 'https://codepen.io/East/full/WRzXxY',
        description: "Simple calculator made in jQuery. This was one of my first projects ever and hoo-boy I'm sure you could find a bug or two in here. Part of me wants to update it, but at the same time, I feel like its a great piece on seeing how far I've come. Like looking at your baby photos. Ya know what I mean?"
    }
]

const CodingPage = () => {
    return (
        <Container>
            <Navbar />
            <Title mb={2}>
                "If at first you do not succeed, call it version 1.0"
            </Title>
            <Typography mb={4}>
                I've been working, programming in some capacity for just over 5 years now, but I've always had a passion for it, even if just as a hobby in the beginning. After getting a job as a developer, a few years later, I realized I didn't really have any projects to show in a portfolio other than official work projects, so I made it a habit to start periodically working on projects. [This site is one of them!]. Hope you have fun exploring and if you have any questions about any of the projects here, feel free to reach out!
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