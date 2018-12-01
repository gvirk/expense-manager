import moment from 'moment';
import React, { Component } from 'react';
import styled from 'styled-components';
import {getMonthNames} from '../helpers';
import SpreadSheet from '../components/SpreadSheet';
import CreateExpense from '../components/CreateExpense';
import range from 'lodash/range';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 1fr;
    height: calc(100vh - 60px);
`;


class Expense extends Component {
    
    state = {
        year: '2018',
        types: [
            {id: 1, name: 'Salary'},
            {id: 2, name: 'Gifts'}
        ],
        expenses: [
            {date: '2018-12-01T13:20:56', type: 1, amount: '125323', notes: 'Awesome note 1'},
            {date: '2018-06-03T13:20:56', type: 2, amount: '25632', notes: 'Awesome note 2'},
        ],
    }

    formattedData = () => {
        // Header
        let data = [[this.state.year, ...getMonthNames()].map(item => ({
            data: item,
            header: true,
        }))];

        // Expense types and default values for cell
        this.state.types.forEach(type => {
            data[type.id] = [{
                data: type.name,
                header: true,
            }, ...range(12).map(i => ({ data: '' }))];
        });

        // Expense Entries
        this.state.expenses.forEach(expense => {
            let month = moment(expense.date).get('month') + 1; // Moment return months from 0 to 11
            let type = expense.type;
            console.log({...expense, month})
            data[type][month] = {
                data: expense.amount,
                notes: expense.notes
            }
        });

        return data;
    }

    render() {
        return (
            <Grid>
                <SpreadSheet data={this.formattedData()}/>
                <CreateExpense />
            </Grid>
        );
    }
}

export default Expense;