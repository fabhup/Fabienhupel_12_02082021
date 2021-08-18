import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import "../styles/BarChartActivity.css";

export default function BarChartActivity({data}) {
    return (<div className="chart chart-large barchart-activity">
                <span className="barchart-activity-title">Activité quotidienne</span>
                <BarChart
                    width={815}
                    height={300}
                    data={data}
                    margin={{
                        top: 30,
                        right: 30,
                        left: 20,
                        bottom: 10,
                    }}
                    barCategoryGap={30}
                    barGap={10}
                    color="#9B9EAC"
                >            
                    <CartesianGrid 
                        strokeDasharray="3 3" 
                        vertical={false}
                        horizontalPoints={[80,170]}
                    />
                    <XAxis 
                        tickFormatter={(value) => (value+1)}
                    />
                    <YAxis 
                        yAxisId="left" 
                        orientation="left" 
                        hide={true}
                    />
                    <YAxis 
                        yAxisId="right"
                        orientation="right"
                        domain={['dataMin - 1','(dataMax + dataMin)/2','dataMax + 1']}
                        unit="kg"
                        axisLine={false}
                        tickLine={false}
                        allowDecimals={true}
                        tickCount={3}
                    />
                    <Tooltip 
                        formatter={(value, name) => [((name === "kilogram") ? value + "kg" : value + "kCal"),""]} 
                        contentStyle={{backgroundColor:"#E60000", border:"none"}} 
                        itemStyle={{color:"white", fontSize:"8px", margin:"4px 0"}} 
                        labelStyle={{display:"none"}} 
                        separator=""
                        offset={50}
                        position={{y: 50}}
                        cursor={{backgroundColor: '#C4C4C4', opacity:0.5}}
                    />
                    <Legend 
                        align="right"
                        verticalAlign="top"
                        iconType="circle"
                        iconSize="8"
                        wrapperStyle={{top: "25px"}}
                        height={50}
                        width={500}
                        chartWidth={300}
                        formatter={(value) => [((value === "kilogram") ? "Poids (Kg)" : "Calories brûlées")]}
                    />
                    <Bar 
                        dataKey="kilogram"
                        yAxisId="right"
                        fill="#282D30"
                        radius={[10,10,0,0]}
                    />
                    <Bar 
                        dataKey="calories"
                        yAxisId="left"
                        fill="#E60000"
                        radius={[10,10,0,0]}
                    />
                </BarChart>
            </div>)
    }