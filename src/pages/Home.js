import WelcomeText from '../components/WelcomeText'
import KeyDataCard from '../components/KeyDataCard'
import BarChartActivity from '../components/BarChartActivity'
import "../styles/Home.css";

function Home({userData, activityData, performanceData} ) {
  const userInfos = userData.userInfos
  const userkeyData = userData.keyData
  return (
    <main>
        <div className="home-content">
            <WelcomeText firstName={userInfos.firstName}/>
            <div className="home-charts">
              <BarChartActivity data={activityData.sessions}/>
              <div className="home-keydatas">
                {Object.entries(userkeyData).map(([key, value], i) => (
                    <KeyDataCard keyDataname={key} keyDatavalue={value} key={i}/>
                ))}
              </div>
            </div>
        </div>
    </main>
  );
}

export default Home
