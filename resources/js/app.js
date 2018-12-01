
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import './bootstrap';

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import styled from 'styled-components';

import {RouteWithSubRoutes} from './routes';
import routes from './routes';
import Navigation from './components/Navigation';
import GlobalStyle from './components/styles/GlobalStyle';


const Page = styled.div`
    padding-top: 60px;
`
const Container = styled.div``


class App extends React.Component
{
    render() {
        return (
            <Router>
                <Container>
                    <Navigation />
                    <Page>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                    </Page>
                    <GlobalStyle />
                </Container>
            </Router>
        );
    }
} 

ReactDOM.render(<App/>, document.getElementById('app'));



