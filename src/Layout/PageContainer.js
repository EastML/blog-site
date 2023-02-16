import { Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ThemeProvider, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState } from "react";
import { darkTheme, lightTheme } from "../theme";
import { Outlet } from "react-router-dom";
import { navbarItems } from "../pages/homePage/utils";

const PageContainer = () => {
    const [drawer, setDrawer] = useState(false)
    const [theme, setTheme] = useState(lightTheme)

    const toggleDrawer = () => setDrawer(!drawer)
    const handleSelectDarkTheme = () => setTheme(darkTheme)
    const handleSelectLightTheme = () => setTheme(lightTheme)

    

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box display='flex' justifyContent='flex-end'>
                {theme === darkTheme ? (
                    <IconButton sx={{ m: 1 }} onClick={handleSelectLightTheme}>
                        <LightModeIcon />
                    </IconButton>
                ) : (
                    <IconButton sx={{ m: 1 }} onClick={handleSelectDarkTheme}>
                        <DarkModeIcon />
                    </IconButton>
                )}
                <IconButton onClick={toggleDrawer} sx={{ m: 1 }}>
                    <MenuIcon />
                </IconButton>
                
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
            </Box>
            <main>
                <Outlet />
            </main>
        </ThemeProvider>
    )
}

export default PageContainer