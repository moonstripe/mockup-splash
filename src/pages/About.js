import * as React from 'react';

import {
    Box
} from '@mui/material'

import { Page, MediaCard } from './../components'

export function About() {
    return (
        <Page title="About" image="/img/lng.jpeg" subtitle="Who we are" description="Duis minim velit deserunt sint voluptate officia occaecat dolor aliqua irure ut consectetur consectetur. Deserunt id enim quis adipisicing reprehenderit tempor exercitation nulla cillum dolore nisi et. Lorem adipisicing excepteur incididunt amet incididunt occaecat eu nulla Lorem enim voluptate.">
            <Box sx={{ py: 1, display: "flex", flexDirection: "row" }}>
                <MediaCard title="principle 1" image="/img/lng.jpeg" description="Duis minim velit deserunt sint voluptate officia occaecat dolor aliqua irure ut consectetur consectetur. Deserunt id enim quis adipisicing reprehenderit tempor exercitation nulla cillum dolore nisi et." callToAction="Learn More" />
                <MediaCard title="principle 2" image="/img/lng.jpeg" description="Duis minim velit deserunt sint voluptate officia occaecat dolor aliqua irure ut consectetur consectetur. Deserunt id enim quis adipisicing reprehenderit tempor exercitation nulla cillum dolore nisi et." callToAction="Learn More" />
                <MediaCard title="principle 3" image="/img/lng.jpeg" description="Duis minim velit deserunt sint voluptate officia occaecat dolor aliqua irure ut consectetur consectetur. Deserunt id enim quis adipisicing reprehenderit tempor exercitation nulla cillum dolore nisi et." callToAction="Learn More" />
                <MediaCard title="principle 4" image="/img/lng.jpeg" description="Duis minim velit deserunt sint voluptate officia occaecat dolor aliqua irure ut consectetur consectetur. Deserunt id enim quis adipisicing reprehenderit tempor exercitation nulla cillum dolore nisi et." callToAction="Learn More" />
            </Box>
        </Page>
    );
}