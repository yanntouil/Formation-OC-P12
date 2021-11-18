import React from 'react'
import propTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

/**
 * Show average sessions chart
 * @param {Object} params
 * @param {Array} params.data
 * @return {JSX} 
 */
const AverageSessions = ({data}) => {
    // Format day of the week
    const daysWeek = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' }
    const formatDay = (item) => daysWeek[item]

    return (
        <>
            <h2 className="chart-title">Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis 
                    dataKey="day"
                    axisLine={false}
                    tickFormatter={formatDay} 
                    tick={{fill: '#FFFFFF'}}
                    tickMargin={10}
                    tickSize={0}
                    padding={{ left: 5, right: 5 }}
                    />
                    <YAxis 
                    hide
                    domain={['dataMin-10', 'dataMax+1']}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line 
                    type="monotone" 
                    dataKey="sessionLength" 
                    stroke="#FFFFFF" 
                    activeDot={{ r: 8 }} 
                    dot={{r: 0}}
                    strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

// Props types
AverageSessions.propTypes = {
    data: propTypes.array.isRequired,
};

export default AverageSessions

/**
 * Show custom tooltip
 * @param {Object} params
 * @param {Boolean} params.active
 * @param {Array} params.payload
 * @return {JSX || null} 
 */
const CustomTooltip = ({ active, payload }) => active ? (
    <div className="chart-tooltip">
        <div>{payload[0].value} min</div>
    </div>
) : null

// Props types
CustomTooltip.propTypes = {
    active: propTypes.bool,
    payload: propTypes.array,
};

