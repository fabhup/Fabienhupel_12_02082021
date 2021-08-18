import { Radar, RadarChart, PolarGrid, PolarAngleAxis,ResponsiveContainer } from 'recharts';
import "../styles/RadarChartPerformance.css";

export default function RadarChartPerformance({data}) {
    return (<div className="chart chart-small radarchart-performance">
               <ResponsiveContainer width="100%" height="100%">
                    <RadarChart 
                        outerRadius="65%" 
                        data={data.data.map((dataElt) => ({
                            kindLabel: Object.entries(data.kind).filter(([key]) => (
                                key === String(dataElt.kind))).map(([key,value]) => value), 
                            value: dataElt.value
                            }))}
                    >
                        <PolarGrid/>
                        <PolarAngleAxis dataKey="kindLabel"/>
                        <Radar dataKey="value" stroke="#E60000" fill="#E60000" fillOpacity={0.8}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>)

}
