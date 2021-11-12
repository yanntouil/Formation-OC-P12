import React from 'react'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, ResponsiveContainer } from 'recharts';

/**
 * Show average sessions chart
 * @param {Object} params
 * @param {Array} params.data
 * @param {Object} params.kind
 * @return {JSX} 
 */
export default function Performance({data, kind}) {

    // Rotate radar to start with intensity
    const angleStart = 210
    
    // Format kind
    const titleKind = {
        cardio: 'Cardio',
        energy: 'Energie',
        endurance: 'Endurance',
        strength: 'Force',
        speed: 'Vitesse',
        intensity: 'Intensité',
    }
    const formatKind = (id) => titleKind[kind[id]]
    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart 
                cx="50%" 
                cy="50%"
                outerRadius="65%"
                startAngle={angleStart}
                endAngle={angleStart + 360}
                data={data}
                >
                    <PolarGrid />
                    <PolarAngleAxis 
                    dataKey="kind" 
                    tickFormatter={formatKind}
                    tick={{ fill: '#FFFFFF', fontSize: '0.875em'}}
                    />
                    <Radar 
                    legendType="none" 
                    dataKey="value" 
                    stroke="#E60000" 
                    fill="#E60000" 
                    fillOpacity={0.7} 
                    />
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>
        </>
    )
}
