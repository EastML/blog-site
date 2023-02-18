import { Typography } from "@mui/material"

const Greeting = () => {
    const hellos = [
        'Hello World!',
        'Hola Mundo!',
        'Bonjour le Monde!',
        'Ciao Mondo!',
        'Ni hao, Shijie!',
        'Konnichiwa Sekai!'
    ]

    return (
        <Typography variant='h6' my={2}>
            {hellos[Math.floor(Math.random() * hellos.length)]} You can call me East.
        </Typography>
    )
}

export default Greeting