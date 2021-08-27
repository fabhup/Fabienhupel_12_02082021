import "../styles/BarChartActivity.css";
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

export default function BarChartActivity({ data }) {

  return data ? (
    <div className="chart chart-large barchart-activity">
      <span className="barchart-activity-title">Activité quotidienne</span>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data.sessionsActivity}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 10,
          }}
          barCategoryGap={"25%"}
          barGap={"10%"}
          color="#9B9EAC"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            horizontalPoints={[80, 170]}
          />
          <XAxis tickFormatter={(value) => value + 1} />
          <YAxis yAxisId="left" orientation="left" hide={true} />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={["dataMin - 1", "(dataMax + dataMin)/2", "dataMax + 1"]}
            unit="kg"
            axisLine={false}
            tickLine={false}
            allowDecimals={true}
            tickCount={3}
          />
          <Tooltip
            formatter={(value, name) => [
              name === "kilogram" ? value + "kg" : value + "kCal",
              "",
            ]}
            contentStyle={{ backgroundColor: "#E60000", border: "none" }}
            itemStyle={{ color: "white", fontSize: "8px", margin: "4px 0" }}
            labelStyle={{ display: "none" }}
            separator=""
            offset={50}
            position={{ y: 50 }}
            cursor={{ backgroundColor: "#C4C4C4", opacity: 0.5 }}
          />
          <Legend
            align="right"
            verticalAlign="top"
            iconType="circle"
            iconSize="8"
            wrapperStyle={{ top: "25px" }}
            height={50}
            chartWidth={300}
            formatter={(value) => [
              value === "kilogram" ? "Poids (Kg)" : "Calories brûlées",
            ]}
          />
          <Bar
            dataKey="kilogram"
            yAxisId="right"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            yAxisId="left"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <div className="chart chart-large barchart-activity">
      <span className="chart-error-text">
        Impossible de récupérer l'historique de votre activité quotidienne
      </span>
    </div>
  );
}

BarChartActivity.propTypes = {
  data: PropTypes.shape({
    sessionsActivity: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string,
        kilogram: PropTypes.number,
        calories: PropTypes.number,
      })
    ),
  }),
};