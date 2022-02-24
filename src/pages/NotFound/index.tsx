import React from 'react';
import nf from '../../assets/nf404.png';

type Props = {}

const NotFound = (props: Props) => {
    return (
        <div className='containerNotFound'>
            <h2 className='erroTitle'>Você não deveria estar aqui.</h2>
            <img className='containerNotFoundError' src={nf} alt="Error" />
        </div>
    )
}

export default NotFound;