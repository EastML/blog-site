import { Box, CssBaseline, IconButton, ThemeProvider, useMediaQuery, useTheme } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState } from "react";
import { darkTheme, lightTheme } from "../theme";
import { Outlet } from "react-router-dom";
import { useDrawer } from "../drawerContext";

const PageContainer = () => {
    const muiTheme = useTheme()
    const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('sm'))
    const { toggleDrawer } = useDrawer()

    const [theme, setTheme] = useState(darkTheme)

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
                {isSmallScreen && (
                    <IconButton onClick={toggleDrawer} sx={{ m: 1 }}>
                        <MenuIcon />
                    </IconButton>
                )}
            </Box>
            <main>
                <Outlet />
            </main>
        </ThemeProvider>
    )
}

export default PageContainer