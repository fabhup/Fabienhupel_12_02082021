import "../styles/RadarChartPerformance.css";
import toCamelCase from "../utils/formatString";
import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

export default function RadarChartPerformance({ data }) {
  return data ? (
    <div className="chart chart-small radarchart-performance">
      <ResponsiveContainer width="100%" height="100%" aspect={1}>
        <RadarChart outerRadius="65%" data={data.data.reverse()}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kindLabel"
            tickFormatter={(value) => {
              switch (String(value)) {
                case "intensity":
                  return "Intensité";
                case "speed":
                  return "Vitesse";
                case "energy":
                  return "Energie";
                case "strength":
                  return "Force";
                default:
                  return toCamelCase(String(value));
              }
            }}
          />
          <Radar
            dataKey="value"
            stroke="#E60000"
            fill="#E60000"
            fillOpacity={0.8}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <div className="chart chart-small radarchart-performance">
      <span className="chart-error-text">
        L'état de vos performances n'a pas pu être récupéré
      </span>
    </div>
  );
}

RadarChartPerformance.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        kindLabel: PropTypes.string,
        value: PropTypes.number,
      })
    ),
  }),
};