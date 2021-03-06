import React, { Component } from 'react';
import { Navigator } from 'react-native';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Tasklist from './Tasklist'
import FetchPage from './FetchPage';

export default class InitRouter extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <Navigator
                initialRoute = {{ name: 'Home', title: 'Home Page' }}
                renderScene = { this. renderScene }
            />
        );
    }

    renderScene(route, navigator) {
        if (route.name == 'Home') {
            return (
                <HomePage
                    navigator = { navigator }
                    {...route.passProps}
                    title = 'Home' />
            );
        }

        if (route.name == 'About') {
            return (
                <AboutPage
                    navigator = { navigator }
                    {...route.passProps}
                    title = "About" />
            );
        }

        if (route.name == 'Task') {
            return (
                <Tasklist
                    navigator={ navigator }
                    {...route.passProps}
                    title="TaskList" />

            );
        }

        if (route.name == 'HTTP') {
            return (
                <FetchPage
                    navigator={ navigator }
                    {...route.passProps}
                    title="Fetch" />
            )
        }
    }
}