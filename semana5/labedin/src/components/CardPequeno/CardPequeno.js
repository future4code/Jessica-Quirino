import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <div>
                <div>{ props.info }</div>
                <div>{ props.descrito}</div>
            </div>
        </div>
    )
}

export default CardPequeno;