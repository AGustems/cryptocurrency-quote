import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import useCurrency from '../hooks/useCurrency'
import useCryptocurrency from '../hooks/useCryptocurrency'
import axios from 'axios'
import PropTypes from 'prop-types'
import Error from './Error'

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`

const Form = ({setCurrency, setCryptocurrency}) => {
    const [cryptoList, setCryptoList] = useState([])
    const [error, setError] = useState(false)

    const CURRENCIES= [
        {code: 'USD', name: 'American Dollar'},
        {code: 'EUR', name: 'Euro'},
        {code: 'GBP', name: 'Pound Sterling'}
    ]
    
    const [currency, SelectCurrency] = useCurrency("Choose your Currency", '', CURRENCIES)
    const [cryptocurrency, SelectCrypto] = useCryptocurrency("Choose your Cryptocurrency", '', cryptoList)

    useEffect(() => {
        const queryAPI = async() => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

            const result = await axios.get(url)
            setCryptoList(result.data.Data)
        }
        queryAPI();
    },[])

    const quoteCurrency = e => {
        e.preventDefault()

        if(currency === '' || cryptocurrency === ''){
            setError(true)
            return;
        }

        setError(false)
        setCurrency(currency)
        setCryptocurrency(cryptocurrency)
    }

    return (
        <form onSubmit={quoteCurrency}>
            {error ? <Error message="All the fields are required"/> : null}                
            <SelectCurrency/>
            <SelectCrypto/>
            <Button
                type="submit"
                value="Calculate"
            />
        </form>
    )
}

Form.propTypes = {
    setCurrency: PropTypes.func.isRequired,
    setCryptocurrency: PropTypes.func.isRequired
}

export default Form
