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

const useCryptocurrency = (label, initialState, options) => {
    // State of the custom hook
    const[state, setState]= useState(initialState)

    const SelectCrypto = () => (
        <>
            <Label>{label}</Label>
            <FormSelect
                onChange={e =>setState(e.target.value)}
                value={state}
            >
                <option value="">{'>- Select -<'}</option>
                {options.map(option => (
                    <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
                ))}
            </FormSelect>
        </>
    );

    // Return the state, interface and the function that modifies the state
    return[state, SelectCrypto, setState]
}

export default useCryptocurrency;