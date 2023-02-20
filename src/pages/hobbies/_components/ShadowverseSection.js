import { Box, Link, List, ListItem, ListItemText, Typography } from "@mui/material"
import StyledSpan from "../../../components/StyledSpan"
import { CONSTANTS } from "../constants"

const shadowverseResources = [
    {
        name: 'Shadowverse Website',
        description: 'Their official website. Lots of good info to get your started!',
        link: 'https://shadowverse.com/'
    },
    {
        name: "My friend Igni's YouTube",
        description: "My friend and co-commentator for the SEAO events. He is a great guy and the largest content creator for the game. He does a lot of fun videos and streams for the game. I highly recommend taking a look at his stuff as you'll learn a lot and have a good time doing it!",
        link: "https://www.youtube.com/@ignideus"
    },
    {
        name: "The Shadowverse Open",
        description: "The offical events website for Shadowverse outside of Japan. You can get a lot of free swag by playing in events, and the people there are really friendly!",
        link: "http://svo.gg/"
    }
]

const ShadowverseSection = () => {
    return (
        <section>
            <Typography variant='h6' mb={2} color='error.main'>
                {CONSTANTS.SHADOWVERSE.TITLE}
            </Typography>
            <Box pl={4} mb={4}>
                <Typography>
                    {CONSTANTS.SHADOWVERSE.DESCRIPTION}
                </Typography>
                <List>
                    {shadowverseResources.map(resource => (
                        <ListItem key={resource.name}>
                            <ListItemText>
                                <Box display='flex' alignItems="center" mb={2}>
                                    <StyledSpan>{resource.name}</StyledSpan>: <Link underline='hover' sx={{ ml: 1 }} href={resource.link} target='_blank'>{resource.link}</Link>
                                </Box>
                                <Typography>{resource.description}</Typography>
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </section>
    )
}

export default ShadowverseSection