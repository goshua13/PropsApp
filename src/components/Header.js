import React from 'react';

const Header = (props) => {
    return(
        <div className='container header1'>
            <div className='display-1 text-center box-shadow'>
                    {props.header}
            </div>
        </div>
    );
}

export default Header;