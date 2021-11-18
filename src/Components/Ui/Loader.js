import React from 'react'
import propTypes from 'prop-types';

/**
 * Show a loader
 * @param {Object} params
 * @param {string} params.color
 * @return {JSX} 
 */
const Loader = ({color}) => {
    return (
        <div className={color ? `loader ${color}` : 'loader'}>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

// Props types
Loader.propTypes = {
    color: propTypes.string,
};

export default Loader