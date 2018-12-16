import React from 'react';

const Posts = props => {
    return(
        <div className='card-body posts'>
            <h5 className='card-title'>{props.author}</h5>
            <p>{props.description}</p>
        </div>
    );
}

export default Posts;
