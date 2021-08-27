import { Line, LineChart, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import "../styles/LineChartSessionsLength.css";
import PropTypes from 'prop-types';

export default function LineChartSessionsLength({ data }) {
  return data ? (
    <div className="chart chart-small linechart-sessions-length">
      <span className="linechart-sessions-label">
        Durée moyenne des sessions
      </span>
      <ResponsiveContainer width="100%" height="100%" aspect={1}>
        <LineChart
          width={730}
          height={250}
          data={data.sessionsLength}
          margin={{ top: 50, right: 15, left: 15, bottom: 20 }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tick={{ fill: "#FFFFFF", transform: "translate(0, 10)" }}
            tickLine={false}
            tickFormatter={(value) => {
              switch (value) {
                case 1:
                  return "L";
                case 2:
                  return "M";
                case 3:
                  return "M";
                case 4:
                  return "J";
                case 5:
                  return "V";
                case 6:
                  return "S";
                case 7:
                  return "D";
                default:
                  return "NA";
              }
            }}
          />
          <Tooltip
            cursor={{
              transform: "translate(400, -150) scale(1, 3)",
              opacity: 0.1,
              stroke: "black",
              strokeWidth: "800px",
            }}
            itemStyle={{
              color: "black",
              fontSize: "8px",
              margin: "auto",
              padding: "O",
            }}
            separator=""
            labelStyle={{ display: "none" }}
            formatter={(value, name) => [String(value) + "min", ""]}
            contentStyle={{ verticalAlign: "middle", padding: "3px 6px" }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <div className="chart chart-small linechart-sessions-length">
      <span className="chart-error-text">
        Impossible d'afficher l'historique de vos dernières sessions
      </span>
    </div>
  );
}

LineChartSessionsLength.propTypes = {
  data: PropTypes.shape({
    sessionsLength: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number,
        sessionLength: PropTypes.number,
      })
    ),
  }),
};