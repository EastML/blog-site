import { Box } from "@mui/material"

const StyledSpan = ({ children, ...otherProps }) => {
    return (
        <Box display='inline' fontWeight={600} {...otherProps}>
            {children}
        </Box>
    )
}

export default StyledSpan