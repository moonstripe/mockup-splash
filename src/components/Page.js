import * as React from 'react';

import {
    Box,
    Typography,
    Divider
} from '@mui/material'

export function Page(props) {
    return (
        <Box sx={{ background: theme => theme.background, position: "relative", textAlign: "center", pb: "10vh"}}>
            <Box component="img" sx={{ objectFit: "cover", width: '100%', height: '40vh' }} src={props.image} alt="example" />
            <Box sx={{top: "5vh", left: "5vh", position: "absolute", textAlign: "left", width: "30vw", height: "40vh"}}>
                <Typography variant="h2" sx={{ color: 'white' }}>{props.title}</Typography>
                <Typography variant="h6" sx={{ color: 'white' }}>{props.subtitle}</Typography>
                <Typography variant="p" sx={{ color: 'white', lineHeight: '22px'}}>{props.description}</Typography>
            </Box>
            {props.children}
        </Box>
    )


}