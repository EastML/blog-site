import { Box, IconButton } from "@mui/material"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Socials = () => {
    return (
        <Box display='flex' mb={2}>
            <IconButton href='https://twitter.com/East_ML' target='_blank'>
                <TwitterIcon />
            </IconButton>
            <IconButton href='https://www.instagram.com/micah.lew/' target='_blank'>
                <InstagramIcon />
            </IconButton>
            <IconButton href='https://github.com/EastML' target='_blank'>
                <GitHubIcon />
            </IconButton>
            <IconButton href='https://www.youtube.com/@East_ML' target='_blank'>
                <YouTubeIcon />
            </IconButton>
        </Box>
    )
}

export default Socials