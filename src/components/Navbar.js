import { useTheme } from "@emotion/react"
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useDrawer } from "../drawerContext"
import { navbarItems } from "../pages/home/utils"

const Navbar = () => {
    const navigate = useNavigate()
    const theme = useTheme()
    const { drawer, toggleDrawer } = useDrawer()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

    return isSmallScreen ? (
        <Drawer anchor='right' open={drawer} onClose={toggleDrawer}>
            <List sx={{ minWidth: 300 }}>
                {navbarItems.map(item => (
                    <ListItem disablePadding key={item.text}>
                        <ListItemButton>
                            <ListItemIcon><Typography fontSize='large'>{item.icon}</Typography></ListItemIcon>
                            <ListItemText primary={<Typography color={`${item.color}.main`}>{item.text}</Typography>} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    ) : (
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