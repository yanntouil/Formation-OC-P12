import React from 'react'

/**
 * Show a loader
 * @param {Object} params
 * @param {string} params.color
 * @return {JSX} 
 */
export default function loader({color}) {
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

