import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography
} from '@mui/material'

import MoreIcon from '@mui/icons-material/MoreVert'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'

import {
    Link
} from 'react-router-dom'

export function Footer() {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: 'white' }}>
            <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, backgroundColor: "white", height: "10vh" }}>
                <Toolbar sx={{display: 'flex'}}>
                    <Typography sx={{ color: 'black', mx: 'auto' }}> Mockup by Moonstripe Design</Typography>
                    <Box sx={{ flexGrow: 1, mx: 'auto' }} />
                    <Typography sx={{ color: 'black', mx: 1 }}>Email: <a href="sendto:moonstripe@protonmail.com">name@email.com</a></Typography>
                    <Typography sx={{ color: 'black', mx: 1 }}>Phone: <a href="tel:6463854847">(123) 456-789</a></Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}