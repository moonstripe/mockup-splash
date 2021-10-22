import * as React from 'react';

import {
    Box
} from '@mui/material'

import { Page, MediaCard } from '../components';

export function Home() {
    return (
        <Page title="Home" subtitle="Welcome to the Homepage" image="/img/tanker.jpeg" description="Duis minim velit deserunt sint voluptate officia occaecat dolor aliqua irure ut consectetur consectetur. Deserunt id enim quis adipisicing reprehenderit tempor exercitation nulla cillum dolore nisi et. Lorem adipisicing excepteur incididunt amet incididunt occaecat eu nulla Lorem enim voluptate.">
            <Box sx={{ py: 1, display: "flex", flexDirection: "row" }}>
                <MediaCard title="project 1" image="/img/dynamo.jpeg" description="Duis minim velit deserunt sint voluptate officia occaecat dolor aliqua irure ut consectetur consectetur. Deserunt id enim quis adipisicing reprehenderit tempor exercitation nulla cillum dolore nisi et." callToAction="Learn More" />
                <MediaCard title="project 2" image="/img/dynamo.jpeg" description="Duis minim velit deserunt sint voluptate officia occaecat dolor aliqua irure ut consectetur consectetur. Deserunt id enim quis adipisicing reprehenderit tempor exercitation nulla cillum dolore nisi et." callToAction="Learn More" />
                <MediaCard title="project 3" image="/img/dynamo.jpeg" description="Duis minim velit deserunt sint voluptate officia occaecat dolor aliqua irure ut consectetur consectetur. Deserunt id enim quis adipisicing reprehenderit tempor exercitation nulla cillum dolore nisi et." callToAction="Learn More" />
                <MediaCard title="project 4" image="/img/dynamo.jpeg" description="Duis minim velit deserunt sint voluptate officia occaecat dolor aliqua irure ut consectetur consectetur. Deserunt id enim quis adipisicing reprehenderit tempor exercitation nulla cillum dolore nisi et." callToAction="Learn More" />
            </Box>
            <Box component="img" sx={{ objectFit: "cover", width: '100%', height: '40vh' }} src={'/img/lng.jpeg'} alt="example" />
        </Page>
        );
}