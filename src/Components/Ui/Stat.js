import React from 'react'
import propTypes from 'prop-types';
import energyImg from '../../assets/images/icons/energy.svg'
import chickenImg from '../../assets/images/icons/chicken.svg'
import appleImg from '../../assets/images/icons/apple.svg'
import cheeseburgerImg from '../../assets/images/icons/cheeseburger.svg'

/**
 * Show stat
 * @param {Object} params
 * @param {'calorieCount'|'carbohydrateCount'|'lipidCount'|'proteinCount'} params.type
 * @param {Number} params.value
 * @return {JSX} 
 */
const Stat = ({type, value}) => {
    let stat = { icon: '', color: '', unit: '', title: ''}
    switch (type) {
        case 'calorieCount':
            stat = {
                icon: energyImg,
                color: 'red',
                unit: 'kCal',
                title: 'Calories'
            }
        break
        case 'carbohydrateCount':
            stat = {
                icon: chickenImg,
                color: 'blue',
                unit: 'g',
                title: 'Protéines'
            }
        break
        case 'lipidCount':
            stat = {
                icon: appleImg,
                color: 'yellow',
                unit: 'g',
                title: 'Glucides'
            }
        break
        case 'proteinCount':
            stat = {
                icon: cheeseburgerImg,
                color: 'pink',
                unit: 'g',
                title: 'Lipides'
            }
        break
        default: break
    }

    return (
        <div className="stat">
            <div className={`stat-icon icon-${stat.color}`}>
                <img src={stat.icon} alt={stat.title} />
            </div>
            <div className="stat-content">
                <h2 className="stat-title">{value}{stat.unit}</h2>
                <p className="stat-secondary">{stat.title}</p>
            </div>
        </div>
    )
}

// Props types
Stat.propTypes = {
    type: propTypes.string.isRequired,
    value: propTypes.number.isRequired,
}

export default Stat