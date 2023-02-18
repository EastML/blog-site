import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { navbarItems } from "../pages/home/utils"

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <Box display='flex' gap={4} mb={2}>
            {navbarItems.map(item => (
                <Button 
                    key={item.text} 
                    variant='text' 
                    size='large' 
                    startIcon={<Typography fontSize='large'>{item.icon}</Typography>} 
                    color={item.color}
                    onClick={() => navigate(item.link)}
                >
                    {item.text}
                </Button>
            ))}
        </Box>
    )
}

export default Navbar