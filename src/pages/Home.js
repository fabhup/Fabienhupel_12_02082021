import WelcomeText from '../components/WelcomeText'
import KeyDataCard from '../components/KeyDataCard'
import BarChartActivity from '../components/BarChartActivity'
import "../styles/Home.css";

function Home(userData) {
  const userInfos = userData.userData.userInfos
  const userkeyData = userData.userData.keyData
  const activityData = userData.activityData.sessions
  return (
    <main>
        <div className="home-content">
            <WelcomeText firstName={userInfos.firstName}/>
            {Object.entries(userkeyData).map(([key, value], i) => (
                <KeyDataCard keyDataname={key} keyDatavalue={value} key={i}/>
            ))}
            <BarChartActivity data={activityData}/>
            {/* {activityData ? console.log(activityData) : console.log("no activity data")
            } */}
        </div>
    </main>
  );
}

export default Home
