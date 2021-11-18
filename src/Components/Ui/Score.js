import React from 'react'
import propTypes from 'prop-types';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';

/**
 * Show score
 * @param {Object} params
 * @param {Number} params.data
 * @return {JSX} 
 */
const Score = ({data}) => {
    return (
        <>
            <h2 className="chart-title">Score</h2>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                    cx={'50%'} cy={'50%'}
                    startAngle={90} endAngle={450}
                    innerRadius={'85%'} outerRadius={'100%'}
                    cornerRadius={'50%'}
                    dataKey="value"
                    data={[{name: 'score', value: data}, {name: 'total', value: 1 - data}]}
                    >
                        <Cell fill="#E60000" stroke="#E60000" />
                        <Cell fill="transparent" stroke="transparent" />
                    </Pie>
                    <Pie 
                    cx={'50%'} cy={'50%'}
                    outerRadius={'85%'}
                    fill="#FFFFFF"
                    data={[{name: 'ring', value: 100}]}
                    dataKey="value"
                    />
                    <Legend 
                    verticalAlign="middle" 
                    align="center"
                    content={CustomLegend}
                    />
                </PieChart>
            </ResponsiveContainer>
        </>
    )
}

// Props types
Score.propTypes = {
    data: propTypes.number.isRequired,
}

export default Score



/**
 * Show custom legend
 * @param {Object} params
 * @param {Array} params.payload
 * @return {JSX} 
 */
const CustomLegend = ({ payload }) => (
    <div className="chart-legend">
        <div className="chart-legend-1">{payload[0].payload.value * 100}%</div>
        <div className="chart-legend-2">de votre objectif</div>
    </div>
)

// Props types
CustomLegend.propTypes = {
    payload: propTypes.array,
}