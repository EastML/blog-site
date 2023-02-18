import { Box, Link, List, ListItem, ListItemText, Typography } from "@mui/material"
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MovieIcon from '@mui/icons-material/Movie';
import StyledSpan from "../../../components/StyledSpan"
import { CONSTANTS } from "../constants"

const digimonProjects = [
    {
        icon: <AutoAwesomeIcon color='warning' sx={{ mr: 2 }} />,
        name: 'Content Creation ',
        description: 'I run a Youtube channel where I cover news, decks, skits, and gameplay!',
        link: 'https://www.youtube.com/@East_ML'
    },
    {
        icon: <MovieIcon sx={{ mr: 2 }} />,
        name: 'Project Manager ',
        description: "I was the project manager for the Pre-DigiShowdown, DigiShowdown, and DigiShowdown Season 2, which are all produced series on Bandai's official youtube channel. I did everything from liase and meet with our client to organize every part of the event, was one of the main commentators hosting the productions, and worked to communicate with players, judges, the production team, and editors to see every project to completion. A lot of love, went into these projects, and I'm very proud of the work I've done here. I really implore you to check them out.",
        link: 'https://www.youtube.com/@BANDAICARDGAMES/playlists'
    }
]

const DigimonSection = () => {
    return (
        <section>
            <Typography variant='h6' mb={2} color='info.main'>
                {CONSTANTS.DIGIMON.TITLE}
            </Typography>
            <Box pl={4} mb={4}>
                <Typography>
                    {CONSTANTS.DIGIMON.DESCRIPTION}
                </Typography>
                <List>
                    {digimonProjects.map(project => (
                        <ListItem key={project.name}>
                            <ListItemText>
                                <Box display='flex' alignItems="center" mb={2}>
                                    {project.icon} <StyledSpan>{project.name}</StyledSpan>: <Link underline='hover' sx={{ ml: 1 }} href={project.link} target='_blank'>{project.link}</Link>
                                </Box>
                                <Typography>{project.description}</Typography>
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </section>
    )
}

export default DigimonSection