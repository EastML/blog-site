import { Typography } from "@mui/material"

const Title = ({ children, ...otherProps }) => {
    return (
        <Typography variant='h6' { ...otherProps }>
            {children}
        </Typography>
    )
}

export default Title