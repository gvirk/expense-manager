import React, { Component } from 'react';
import styled from 'styled-components';
import SpreadSheet from '../components/SpreadSheet';
import CreateExpense from '../components/CreateExpense';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 1fr;
    height: calc(100vh - 60px);
`;


class Expense extends Component {
    render() {
        return (
            <Grid>
                <SpreadSheet />
                <CreateExpense />
            </Grid>
        );
    }
}

export default Expense;