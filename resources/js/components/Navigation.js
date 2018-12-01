import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = styled.nav`
    position: fixed;
    top: 0; left: 0; right: 0;
    display: flex;
    background: #e3e3e3;
    height: 60px;
    padding: 1em;
`

const NavItem = styled.div`
    color: black;
    font-weight: bold;
    padding: 1em;
    a {
        text-decoration: none;
        color: black;
    }
    a:hover {
        text-decoration: underline;
    }
`


class Navigation extends Component {
    render() {
        return (
            <Nav>
                <NavItem>
                    <Link to="/expense">Expense</Link>
                </NavItem>
                <NavItem>
                    <Link to="/income">Income</Link>
                </NavItem>
            </Nav>
        );
    }
}

export default Navigation;