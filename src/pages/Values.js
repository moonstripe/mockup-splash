import * as React from 'react';

import {
    Box
} from '@mui/material'

import { Page, MediaCard } from './../components'

export function Values() {
    return (
        <Page title="Values" image="/img/forest.jpeg" subtitle="What We Care About" description="Duis minim velit deserunt sint voluptate officia occaecat dolor aliqua irure ut consectetur consectetur. Deserunt id enim quis adipisicing reprehenderit tempor exercitation nulla cillum dolore nisi et. Lorem adipisicing excepteur incididunt amet incididunt occaecat eu nulla Lorem enim voluptate.">
            <Box sx={{ py: 1, display: "flex", flexDirection: "row" }}>
                <MediaCard title="value 1" image="/img/forest.jpeg" description="Duis minim velit deserunt sint voluptate officia occaecat dolor aliqua irure ut consectetur consectetur. Deserunt id enim quis adipisicing reprehenderit tempor exercitation nulla cillum dolore nisi et." callToAction="Learn More" />
                <MediaCard title="value 2" image="/img/forest.jpeg" description="Duis minim velit deserunt sint voluptate officia occaecat dolor aliqua irure ut consectetur consectetur. Deserunt id enim quis adipisicing reprehenderit tempor exercitation nulla cillum dolore nisi et." callToAction="Learn More" />
                <MediaCard title="value 3" image="/img/forest.jpeg" description="Duis minim velit deserunt sint voluptate officia occaecat dolor aliqua irure ut consectetur consectetur. Deserunt id enim quis adipisicing reprehenderit tempor exercitation nulla cillum dolore nisi et." callToAction="Learn More" />
                <MediaCard title="value 4" image="/img/forest.jpeg" description="Duis minim velit deserunt sint voluptate officia occaecat dolor aliqua irure ut consectetur consectetur. Deserunt id enim quis adipisicing reprehenderit tempor exercitation nulla cillum dolore nisi et." callToAction="Learn More" />
            </Box>
        </Page>
    );
}
