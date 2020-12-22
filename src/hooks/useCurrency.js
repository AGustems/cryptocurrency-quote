import React, {useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`

const FormSelect = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
`

const useCurrency = (label, initialState, options) => {
    // State of the custom hook
    const[state, setState]= useState(initialState)
    
    const Select = () => (
        <>
            <Label>{label}</Label>
            <FormSelect
                onChange={e =>setState(e.target.value)}
                value={state}
            >
                <option value="">{'>- Select -<'}</option>
                {options.map(option => (
                    <option key={option.code} value={option.code}>{option.name}</option>
                ))}
            </FormSelect>
        </>
    );

    // Return the state, interface and the function that modifies the state
    return[state, Select, setState]
}

export default useCurrency;