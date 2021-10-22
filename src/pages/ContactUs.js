import * as React from 'react';

import {
    Box,
    Typography,
    TextField,
    Button,
    Select,
    MenuItem,
    InputLabel,
    FormControl
} from '@mui/material'

import { Page, MediaCard } from './../components'

export function ContactUs() {
    const [reason, setReason] = React.useState('');

    const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setReason( value );
      };

    return (
        <Page title="Contact Us" image="/img/business.jpeg" subtitle="Who we are" description="Duis minim velit deserunt sint voluptate officia occaecat dolor aliqua irure ut consectetur consectetur. Deserunt id enim quis adipisicing reprehenderit tempor exercitation nulla cillum dolore nisi et. Lorem adipisicing excepteur incididunt amet incididunt occaecat eu nulla Lorem enim voluptate.">
            <Box sx={{ display: "flex", flexDirection: 'row' }}>
                <Box sx={{ width: "20vw" }}></Box>
                <Box sx={{ width: '25vw', mx: 'auto', py: 1, textAlign: "left" }}>
                    <Typography variant="h4">Let's Talk Business</Typography>
                    <br />
                    <br />
                    <Typography variant="p">Exercitation esse veniam occaecat do in. Minim officia Lorem nostrud laboris ex sint laboris magna ut minim in aliquip ipsum duis. Occaecat consequat nisi ea incididunt non.</Typography>
                    <br />
                    <br />
                    <br />
                    <Typography variant="p">Exercitation esse veniam occaecat do in. Minim officia Lorem nostrud laboris ex sint laboris magna ut minim in aliquip ipsum duis. Occaecat consequat nisi ea incididunt non.</Typography>
                </Box>
                <Box sx={{ py: 1, display: "flex", flexDirection: "column", textAlign: 'center', width: '20vw', mx: 'auto' }}>

                    <Box sx={{ my: 0.5, display: 'flex', flexDirection: 'row' }}><TextField label="First Name" sx={{ width: '45%', mx: 1 }} /><TextField label="Last Name" sx={{ width: '45%', mx: 1 }} /></Box>
                    <TextField label="Email" sx={{ width: '90%', mx: 1, my: 0.5 }} />
                    <Select displayEmpty labelId="reason" value={reason} sx={{ my: 0.5, mx: 1 }}
                        onChange={handleChange}
                        renderValue={ selected => {
                            if (!selected) {
                                return "I'm reaching out for ..."
                            } else {
                                return reason
                            }
                        }}
                        >
                        <MenuItem autoFocus disabled value="I'm reaching out for ...">I'm reaching out for ...</MenuItem>
                        <MenuItem value={'General Purpose'}>General Purpose</MenuItem>
                        <MenuItem value={'Collaboration'}>Collaboration</MenuItem>
                        <MenuItem value={'More Information'}>More Information</MenuItem>
                    </Select>
                    <Button sx={{ width: '90%', mx: 'auto', my: 1, mx: 1 }}>Talk to Us</Button>
                </Box>
                <Box sx={{ width: "20vw" }}></Box>
            </Box>
        </Page>
    );
}