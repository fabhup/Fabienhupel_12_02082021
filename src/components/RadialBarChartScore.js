import "../styles/RadialBarChartScore.css";
import PropTypes from "prop-types";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

export default function RadialBarChartScore({ data }) {
  const scoreValue = data[0].score;

  return scoreValue ? (
    <div className="chart chart-small radialbarchart-score">
      <span className="radialbarchart-score-label">
        <strong>{String(scoreValue * 100) + "%"}</strong>
        <br /> de votre Objectif
      </span>
      <ResponsiveContainer width="100%" height="100%" aspect={1}>
        <RadialBarChart
          height={250}
          innerRadius="80%"
          outerRadius="65%"
          data={data}
          startAngle={90}
          endAngle={90 - 360 * scoreValue}
          fill={"white"}
        >
          <RadialBar
            minAngle={15}
            cornerRadius={10}
            clockWise={true}
            dataKey="score"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <div className="chart chart-small radialbarchart-score">
      <span className="chart-error-text">
        Votre score n'a pas pu être récupéré
      </span>
    </div>
  );
}

RadialBarChartScore.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ score: PropTypes.number })),
};
