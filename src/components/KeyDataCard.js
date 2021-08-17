import "../styles/KeyDataCard.css";
import lipids from "../assets/lipids.svg"
import proteins from "../assets/proteins.svg"
import carbohydrates from "../assets/carbohydrates.svg"
import calories from "../assets/calories.svg"

function KeyDataCard({keyDataname, keyDatavalue}) {
    const keyDatasParameters = [
        {"name":"calorieCount", "title":"Calories", "unit":"Cal", "icone": calories, "color": "#FF0000"},
        {"name":"proteinCount", "title":"Protéines","unit":"g", "icone": proteins, "color": "#4AB8FF"},
        {"name":"carbohydrateCount", "title":"Glucides","unit":"g", "icone": carbohydrates, "color": "#FDCC0C"},
        {"name":"lipidCount", "title":"Lipides","unit":"g", "icone": lipids, "color": "#FD5181"}
    ]
    const keyData = keyDatasParameters.find(elt => elt.name === keyDataname)
    return (
        <div className="keydata-card">
            <div className="keydata-card-icone" style={{backgroundColor: keyData.color}}>
                <img src={keyData.icone} alt={keyData.title+ " image"}/>
            </div>
            <div className="keydata-card-text">
                <span className="keydata-card-value">{String(keyDatavalue>1000 ? (keyDatavalue/1000).toFixed(3)+"k" : keyDatavalue).replace(".",",")}{keyData.unit}</span>
                <span className="keydata-card-title">{keyData.title}</span>
            </div>
        </div>
    );
  }
  export default KeyDataCard
