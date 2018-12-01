import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Cell = styled.td`
    font-weight: normal;
    border: 1px solid black;
    padding: 0.6rem;
`

const HeaderCell = styled(Cell)`
    font-weight: bold;
    text-align: center;
`





class SpreadSheetCell extends Component {
    static propTypes = {
        data: PropTypes.shape({
            data: PropTypes.string,
            header: PropTypes.bool
        }).isRequired,
    }

    render() {
        const {data, header} = this.props.data
        return header ? <HeaderCell>{data}</HeaderCell> : <Cell>{data}</Cell>;
    }
}

export default SpreadSheetCell;