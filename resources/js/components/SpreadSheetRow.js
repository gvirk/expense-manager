import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpreadSheetCell from './SpreadSheetCell';

class SpreadSheetRow extends Component {

    static propTypes = {
        data: PropTypes.array.isRequired
    }


    render() {
        const {data} = this.props;

        return (
            <tr>
                {data.map((cell, index) => (
                    <SpreadSheetCell data={cell} key={index} />
                ))}
            </tr>
        );
    }
}

export default SpreadSheetRow;