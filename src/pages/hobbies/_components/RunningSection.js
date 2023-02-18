import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { CONSTANTS } from "../constants"

const RunningSection = () => {
    const runAchievements = [
        {
            feat: 'farthest run',
            value: '17.37km',
            date: '2019-11-04'
        },
        {
            feat: 'fastest 1k',
            value: '04:13',
            date: '2015-10-03'
        },
        {
            feat: 'fastest 5k',
            value: '22:51',
            date: '2015-10-03'
        },
        {
            feat: 'Most km run in a year',
            value: '311.2 km',
            date: '2021'
        },
        {
            feat: 'Total km run [all-time]',
            value: '973.1 km',
            date: '2023-02-18'
        }
    ]

    return (
        <section>
            <Typography variant='h6' mb={2} color='success.main'>
                {CONSTANTS.RUNNING.TITLE}
            </Typography>
            <Box pl={4} mb={4}>
            <Typography>
                {CONSTANTS.RUNNING.DESCRIPTION}
            </Typography>
            <Typography align='center' mt={2}>{CONSTANTS.RUNNING.FEATS}</Typography>
            <TableContainer sx={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                <Table size='small' sx={{ my: 2 }}>
                    <TableHead>
                        <TableRow>
                            {Object.keys(runAchievements[0]).map(property => (
                                <TableCell key={property}>{property.toUpperCase()}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {runAchievements.map(achievement => (
                            <TableRow key={achievement.feat}>
                                <TableCell>
                                    {achievement.feat}
                                </TableCell>
                                <TableCell>
                                    {achievement.value}
                                </TableCell>
                                <TableCell>
                                    {achievement.date}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {CONSTANTS.RUNNING.NRC_SHOUTOUT}
            </Box>
        </section>
    )
}

export default RunningSection