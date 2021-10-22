import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button
} from '@mui/material'

import {
    Link
} from 'react-router-dom'

export function NavBar() {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: 'white' }}>
            <AppBar position="static">
                <Toolbar sx={{ backgroundColor: 'white', display: 'flex' }}>
                    <Link to="/" component={Button} variant='p' sx={{ mx: 'auto' }}><Typography sx={{ color: 'black'}}>Logo</Typography></Link>
                    <Box sx={{ width: '40vw' }} />
                    <Link to="/about" component={Button} variant='p' sx={{ mx: 'auto' }} ><Typography sx={{ color: 'black'}}>About</Typography></Link>
                    <Link to="/operations" component={Button} variant='p' sx={{ mx: 'auto' }} ><Typography sx={{ color: 'black'}}>Operations</Typography></Link>
                    <Link to="/values" component={Button} variant='p' sx={{ mx: 'auto' }} ><Typography sx={{ color: 'black'}}>Values</Typography></Link>
                    <Link to="/contact-us" component={Button} variant='contained' sx={{ mx: 'auto' }} ><Typography sx={{ color: 'white'}}>Contact Us</Typography></Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}