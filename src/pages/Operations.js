import * as React from 'react';

import {
    Box
} from '@mui/material'

import { Page, MediaCard } from './../components'

export function Operations() {
    return (
        <Page title="Operations" image="/img/dynamo.jpeg" subtitle="What We're Doing" description="Duis minim velit deserunt sint voluptate officia occaecat dolor aliqua irure ut consectetur consectetur. Deserunt id enim quis adipisicing reprehenderit tempor exercitation nulla cillum dolore nisi et. Lorem adipisicing excepteur incididunt amet incididunt occaecat eu nulla Lorem enim voluptate.">
            <Box sx={{ py: 1, display: "flex", flexDirection: "row" }}>
                <MediaCard title="project 1" image="/img/dynamo.jpeg" description="Duis minim velit deserunt sint voluptate officia occaecat dolor aliqua irure ut consectetur consectetur. Deserunt id enim quis adipisicing reprehenderit tempor exercitation nulla cillum dolore nisi et." callToAction="Learn More" />
                <MediaCard title="project 2" image="/img/dynamo.jpeg" description="Duis minim velit deserunt sint voluptate officia occaecat dolor aliqua irure ut consectetur consectetur. Deserunt id enim quis adipisicing reprehenderit tempor exercitation nulla cillum dolore nisi et." callToAction="Learn More" />
                <MediaCard title="project 3" image="/img/dynamo.jpeg" description="Duis minim velit deserunt sint voluptate officia occaecat dolor aliqua irure ut consectetur consectetur. Deserunt id enim quis adipisicing reprehenderit tempor exercitation nulla cillum dolore nisi et." callToAction="Learn More" />
                <MediaCard title="project 4" image="/img/dynamo.jpeg" description="Duis minim velit deserunt sint voluptate officia occaecat dolor aliqua irure ut consectetur consectetur. Deserunt id enim quis adipisicing reprehenderit tempor exercitation nulla cillum dolore nisi et." callToAction="Learn More" />
            </Box>
        </Page>
    );
}