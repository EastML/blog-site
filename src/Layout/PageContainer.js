import { Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, ThemeProvider } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState } from "react";
import { darkTheme, lightTheme } from "../theme";

const PageContainer = ({ children }) => {
    const [drawer, setDrawer] = useState(false)
    const [theme, setTheme] = useState(lightTheme)

    const toggleDrawer = () => setDrawer(!drawer)
    const handleSelectDarkTheme = () => setTheme(darkTheme)
    const handleSelectLightTheme = () => setTheme(lightTheme)

    

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box display='flex' justifyContent='flex-end'>
                <IconButton sx={{ m: 1 }} onClick={handleSelectDarkTheme}>
                    <DarkModeIcon />
                </IconButton>
                <IconButton sx={{ m: 1 }} onClick={handleSelectLightTheme}>
                    <LightModeIcon />
                </IconButton>
                <IconButton onClick={toggleDrawer} sx={{ m: 1 }}>
                    <MenuIcon />
                </IconButton>
                
                <Drawer anchor='right' open={drawer} onClose={toggleDrawer}>
                    <List sx={{ minWidth: 300 }}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary='whaddup' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>
            </Box>
            <main>
                {children}
            </main>
        </ThemeProvider>
    )
}

export default PageContainer