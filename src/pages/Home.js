import WelcomeText from '../components/WelcomeText'
import KeyDataCard from '../components/KeyDataCard'

import "../styles/Home.css";

function Home(userData) {
  const userInfos = userData.userData.userInfos
  const userkeyData = userData.userData.keyData

  return (
    <main>
        <div className="home-content">
            <WelcomeText firstName={userInfos.firstName}/>
            {Object.entries(userkeyData).map(([key, value], i) => (
                <KeyDataCard keyDataname={key} keyDatavalue={value} key={i}/>
            ))}
        </div>
    </main>
  );
}

export default Home
