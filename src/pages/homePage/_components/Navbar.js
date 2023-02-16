import { Box, Button, Typography } from "@mui/material"
import { navbarItems } from "../utils"

const Navbar = () => {
    return (
        <Box display='flex' gap={4} mb={2}>
            {navbarItems.map(item => (
                <Button 
                    key={item.text} 
                    variant='text' 
                    size='large' 
                    startIcon={<Typography fontSize='large'>{item.icon}</Typography>} 
                    color={item.color}
                >
                    {item.text}
                </Button>
            ))}
        </Box>
    )
}

export default Navbar