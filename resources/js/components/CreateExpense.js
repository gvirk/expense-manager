import React, { Component } from 'react';
import styled from 'styled-components';


const StyledForm = styled.form`
    background: lightgoldenrodyellow;
    padding: 1em;
    h2 {
        font-size:1em;
        padding-bottom: 1em;
    }
    fieldset {
        border: none;
    }
    label {
        display: block;
        margin-bottom: 1em;
        input, select, textarea {
            display: block;
            width: 100%;
        }
    }
`

class CreateExpense extends Component {
    render() {
        return (
            <StyledForm>
                <h2>Expense Details</h2>
                <fieldset>
                    <label htmlFor="date">
                        Date
                        <input
                            type="date" /> 
                    </label>

                    <label htmlFor="type">
                        Expense Type
                        <select>
                            <option>Salary</option>
                            <option>Rent</option>
                        </select>
                    </label>

                    <label htmlFor="type">
                        Amount
                        <input
                            type="number" />
                    </label>

                    <label htmlFor="type">
                        Notes
                        <textarea/>
                    </label>

                    <button type="submit">Save</button>

                </fieldset>
            </StyledForm>
        );
    }
}

export default CreateExpense;