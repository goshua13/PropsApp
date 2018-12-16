import React from 'react';

const Cards = (props) => {
    console.log(props.author)
    return(
        <div className='card cards'>
            <img className='card-img-top' src='/assets/text.jpeg'/>
            <div className='card-body'>
                {props.children}
                <button className='btn btn-primary'>Button</button>
            </div>
        </div> 
    )
}

export default Cards;
