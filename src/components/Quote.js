import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const ResultDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`

const Info = styled.p`
    font-size: 18px;

    span {
        font-weight: bold;
    }
`

const Price = styled.p`
    font-size: 30px;

    span {
        font-weight: bold;
    }
`

const Quote = ({result}) => {
    if(Object.keys(result).length === 0) return null;
    
    return (
        <ResultDiv>
            <Price>The price is: <span>{result.PRICE}</span></Price>
            <Info>The highest price today is: <span>{result.HIGHDAY}</span></Info>
            <Info>The lowest price today is: <span>{result.PRICE}</span></Info>
            <Info>Last 24h change: <span>{result.CHANGEPCT24HOUR}</span></Info>
            <Info>Last update: <span>{result.LASTUPDATE}</span></Info>
        </ResultDiv>
    )
}

Error.propTypes = {
    result: PropTypes.object.isRequired
}

export default Quote
