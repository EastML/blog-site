import { Box, IconButton } from "@mui/material"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Socials = () => {
    return (
        <Box display='flex' mb={2}>
            <IconButton>
                <TwitterIcon />
            </IconButton>
            <IconButton>
                <InstagramIcon />
            </IconButton>
            <IconButton>
                <GitHubIcon />
            </IconButton>
            <IconButton>
                <YouTubeIcon />
            </IconButton>
        </Box>
    )
}

export default Socials