import React from 'react'
import meditationImg from '../../assets/images/icons/meditation.svg'
import swimImg from '../../assets/images/icons/swim.svg'
import bikeImg from '../../assets/images/icons/bike.svg'
import dumbbellImg from '../../assets/images/icons/dumbbell.svg'

/**
 * Show sidebar
 * @returns {JSX}
 */
export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-pusher"></div>
            <ul className="sidebar-menu">
                <li className="sidebar-menu-link">
                    <img src={meditationImg} alt="Meditation" />
                </li>
                <li className="sidebar-menu-link">
                    <img src={swimImg} alt="Meditation" />
                </li>
                <li className="sidebar-menu-link">
                    <img src={bikeImg} alt="Meditation" />
                </li>
                <li className="sidebar-menu-link">
                    <img src={dumbbellImg} alt="Meditation" />
                </li>
            </ul>
            <div className="sidebar-copyright"><span>Copyright, SportSee 2020</span></div>
        </aside>
    )
}
