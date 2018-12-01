import React, { Component } from 'react';
import SpreadSheetRow from './SpreadSheetRow';
import styled from 'styled-components';


const Table = styled.table`
    border: 1px solid black;
    border-collapse: collapse;
`

class SpreadSheet extends Component {
    render() {
        const {data} = this.props;
        
        return (
            <Table>
                <tbody>
                    {data.map((row, index) => (
                        <SpreadSheetRow key={index} data={row} />   
                    ))}
                </tbody>
            </Table>
        );
    }
}

export default SpreadSheet;