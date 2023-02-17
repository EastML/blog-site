import { Box, List, ListItem, ListItemText, Typography } from "@mui/material"
import { CONSTANTS } from "../constants"


const Body = () => {
    return (
        <Box>
            <Typography variant='h6' gutterBottom>A little about me</Typography>
            <Typography mb={2} fontWeight='300'>
                {CONSTANTS.WELCOME}
            </Typography>

            <Typography variant='h6'>Some of my personal commandments</Typography>
            <List>
                {CONSTANTS.COMMANDMENTS.map(commandment => (
                    <ListItem>
                        <ListItemText>
                            {commandment}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>

            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Typography>2023 Micah Lewis - Coded with 💖 in React.</Typography>
                <Box display='flex' gap={2} justifyContent='flex-end' alignItems='flex-end' my={2}>
                    {['error', 'warning', 'success', 'info'].map((color, i) => (
                        <Box key={i} width={50} height={50} bgcolor={`${color}.main`}/>
                    ))} 
                </Box>
            </Box>     
        </Box>
    )
}

export default Body