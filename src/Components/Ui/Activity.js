import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts'//, Legend
import propTypes from 'prop-types'

/**
 * Show activity chart
 * @param {Object} params
 * @param {Array} params.data
 * @return {JSX} 
 */
const Activity = ({data}) => {
    const formatDay = (item) => (new Date(item)).getDate()
    // const formatLegend = (value) => value === 'kilogram' ? 'Poids (kg)' : 'Calories brûlées (kCal)'
    return (
        <>
            <h2 className="chart-title">Activité quotidienne</h2>
            <ul className="chart-legend">
                <li>Poids (kg)</li>
                <li>Calories brûlées (kCal)</li>
            </ul>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="2" vertical={false} />
                    {/* <Legend
                    verticalAlign="top" 
                    align="right"
                    iconSize={8} 
                    iconType="circle" 
                    height={100}
                    formatter={formatLegend} 
                    /> */}
                    <XAxis 
                    dataKey="day" 
                    tickMargin={16} 
                    tickFormatter={formatDay} 
                    tickSize={0} 
                    minTickGap={30}
                    />
                    <YAxis 
                    yAxisId="kilogram"
                    orientation='right'
                    tickMargin={40}
                    tickSize={0}
                    axisLine={false}
                    domain={['dataMin-5', 'dataMax+0']}
                    interval={'preserveEnd'}
                    tickCount={3}
                    />
                    <YAxis 
                    yAxisId="calories"
                    hide
                    orientation='right'
                    domain={['dataMin-100', 'dataMax+0']}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar 
                    yAxisId="kilogram" 
                    dataKey="kilogram" 
                    fill="#282D30" 
                    barSize={10} 
                    radius={[5, 5, 0, 0]}
                    />
                    <Bar 
                    yAxisId="calories" 
                    dataKey="calories" 
                    fill="transparent" 
                    barSize={3} 
                    />
                    <Bar 
                    yAxisId="calories" 
                    dataKey="calories" 
                    fill="#E60000" 
                    barSize={10} 
                    radius={[5, 5, 0, 0]} 
                    />
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}

// Props types
Activity.propTypes = {
    data: propTypes.array.isRequired,
}

export default Activity

/**
 * Show custom tooltip
 * @param {Object} params
 * @param {Boolean} params.active
 * @param {Array} params.payload
 * @return {JSX || null} 
 */
const CustomTooltip = ({ active, payload }) => active ? (
    <div className="chart-tooltip">
        <div>{payload[0].value}kg</div>
        <div>{payload[1].value}kCal</div>
    </div>
) : null

// Props types
CustomTooltip.propTypes = {
    active: propTypes.bool,
    payload: propTypes.array,
}