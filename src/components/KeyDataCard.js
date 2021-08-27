import "../styles/KeyDataCard.css";
import {keyDatasParameters} from '../constants/parameters'
import PropTypes from 'prop-types';

function KeyDataCard({ keyDataname, keyDatavalue }) {
  
  // get all parameters of keyDataname from keyDatasParameters (icone, color, title...)
  const keyData = keyDatasParameters.find((elt) => elt.name === keyDataname);
  
  return (
    <div className="keydata-card">
      <div
        className="keydata-card-icone"
        style={{ backgroundColor: keyData.color }}
      >
        <img src={keyData.icone} alt={keyData.title + " image"} />
      </div>
      <div className="keydata-card-text">
        <span className="keydata-card-value">
          {String(
            keyDatavalue > 1000
              ? (keyDatavalue / 1000).toFixed(3) + "k"
              : keyDatavalue
          ).replace(".", ",")}
          {keyData.unit}
        </span>
        <span className="keydata-card-title">{keyData.title}</span>
      </div>
    </div>
  );
}

KeyDataCard.propTypes = {
  keyDataname: PropTypes.string,
  keyDatavalue: PropTypes.number
};

export default KeyDataCard;
