import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from "@mui/material"
import PropTypes from 'prop-types'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useState } from "react";
import styled from "@emotion/styled";


const ProjectCard = ({ project }) => {
    const [open, setOpen] = useState(false)

    const handleToggleCollapse = () => setOpen(!open)

    const StyledExpand = styled(ExpandMoreIcon)({
        transform: open ? 'rotate(0deg)' : 'rotate(180deg)',
    })

    return (
        <Box xs={12} sm={6} md={4}>
            <Card elevation={3}>
                <CardHeader 
                    title={project.name}
                    subheader={`Created: ${project.date}`}
                    subheaderTypographyProps={{ variant: 'caption' }}
                />
                <CardMedia component='img' height={194} src={project.image} alt={project.name} />
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between'}}>
                    <IconButton href={project.link} target='_blank'>
                        <OpenInNewIcon />
                    </IconButton>
                    <Box>
                        <Typography variant='caption' mr={1}>More Info</Typography>
                        <IconButton expand={open} onClick={handleToggleCollapse} aria-expanded={open} aria-label='show more'>
                            <StyledExpand />
                        </IconButton>
                    </Box>
                    
                </CardActions>
                <Collapse in={open} unmountOnExit>
                    <CardContent>
                        <Typography variant='body2' color='text.secondary'>
                            {project.description}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Box>
    )
}

ProjectCard.propTypes = {
    project: PropTypes.object.isRequired
}

export default ProjectCard