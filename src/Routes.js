import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {
    NavBar,
    Footer
} from './components'

import {
    Home,
    Operations,
    Values,
    About,
    ContactUs
} from './pages'

export default function Routes() {
    return (
        <Router>
            {/* App Bar */}
            <NavBar />

            {/* Content */}
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/operations">
                    <Operations />
                </Route>
                <Route path="/values">
                    <Values />
                </Route>
                <Route path="/contact-us">
                    <ContactUs />
                </Route>
            </Switch>

            {/* Footer */}
            <Footer/>
        </Router>
    );
}

