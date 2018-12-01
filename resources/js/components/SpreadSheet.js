import React, { Component } from 'react';
import SpreadSheetRow from './SpreadSheetRow';
import expense from '../seed';
import styled from 'styled-components';


const Table = styled.table`
    border: 1px solid black;
    border-collapse: collapse;
`

class SpreadSheet extends Component {
    render() {
        return (
            <Table>
                <tbody>
                    {expense.map((row, index) => (
                        <SpreadSheetRow key={index} data={row} />   
                    ))}
                </tbody>
            </Table>
        );
    }
}

export default SpreadSheet;