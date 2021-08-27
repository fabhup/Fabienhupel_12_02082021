import "../styles/Home.css";
import WelcomeText from "../components/WelcomeText";
import KeyDataCard from "../components/KeyDataCard";
import BarChartActivity from "../components/BarChartActivity";
import RadarChartPerformance from "../components/RadarChartPerformance";
import RadialBarChartScore from "../components/RadialBarChartScore";
import LineChartSessionsLength from "../components/LineChartSessionsLength";
import PropTypes from "prop-types";

function Home({ userData, activityData, performanceData, sessionsData }) {
  const userScore = Array({ score: userData.score });
  return (
    <main>
      <div className="home-content">
        <WelcomeText firstName={userData.firstName} />
        <div className="home-charts">
          <BarChartActivity data={activityData} />
          <LineChartSessionsLength data={sessionsData} />
          <RadarChartPerformance data={performanceData} />
          <RadialBarChartScore data={userScore} />
        </div>
        <div className="home-keydatas">
          {Object.entries(userData.keyDatas).map(([key, value], i) => (
            <KeyDataCard keyDataname={key} keyDatavalue={value} key={i} />
          ))}
        </div>
      </div>
    </main>
  );
}

Home.propTypes = {
  userData: PropTypes.shape({
    firstName:  PropTypes.string,
    lastName:  PropTypes.string,
    age:  PropTypes.number,
    score: PropTypes.number,
    keyDatas: PropTypes.shape({
      keyData: PropTypes.number
    })
  }),
  activityData: PropTypes.shape({
    sessionsActivity : PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string,
        kilogram: PropTypes.number,
        calories: PropTypes.number,
      })
    )
  }), 
  performanceData: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          kindKey: PropTypes.number,
          kindLabel: PropTypes.string,
          value: PropTypes.number,
        })
      )
  }), 
  sessionsData : PropTypes.shape({
    sessionsLength: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.number,
        sessionLength: PropTypes.number,
      })
    )
  })
};

export default Home;
