import logoCal from "../assets/icons/fire.png"
import logoPro from "../assets/icons/chicken.png"
import logoApple from "../assets/icons/apple.png"
import logoCheese from "../assets/icons/cheeseburger.png"
import PropTypes from 'prop-types';
import React from "react";
import './StatsDisplay.css'

const StatsDisplay = ({ keyData }) => {
  return (
    <div className="statsContainer">
      <div className="stats">
        <div className="logoContainer">
          <img src={logoCal} alt="logo Calorie" />
        </div>
        <div className="statValText">
          <span className="valueStat">{keyData.calorieCount}kCal</span>
          <span className="statText">Calories</span>
        </div>
      </div>
      <div className="stats">
        <div className="logoContainer logoPro">
          <img src={logoPro} alt="logo Proteines" />
        </div>
        <div className="statValText">
          <span className="valueStat">{keyData.proteinCount}g</span>
          <span className="statText">Proteines</span>
        </div>
      </div>
      <div className="stats">
        <div className="logoContainer logoApple">
          <img src={logoApple} alt="logo Glucides" />
        </div>
        <div className="statValText">
          <span className="valueStat">{keyData.carbohydrateCount}g</span>
          <span className="statText">Glucides</span>
        </div>
      </div>
      <div className="stats">
        <div className="logoContainer logoCheese">
          <img src={logoCheese} alt="logo Lipides" />
        </div>
        <div className="statValText">
          <span className="valueStat">{keyData.lipidCount}g</span>
          <span className="statText">Lipides</span>
        </div>
      </div>
    </div>
  );
}
StatsDisplay.propTypes = {
  keyData: PropTypes.shape({
    calorieCount: PropTypes.number,
    proteinCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
  }).isRequired,
};
export default StatsDisplay;