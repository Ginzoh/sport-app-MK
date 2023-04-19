import logoCal from "../assets/icons/fire.png"

const StatsDisplay = () => {
  return (
    <div className="statsContainer">
      <div className="stats">
        <div className="logoContainer">
          <img src={logoCal} alt="logo Calorie" />
        </div>
        <div className="statValText">
          <span className="valueStat">1,930kCal</span>
          <span className="statText">Calories</span>
        </div>
      </div>
      <div className="stats">
        <div className="logoContainer">
          <img src={logoCal} alt="logo Calorie" />
        </div>
        <div className="statValText">
          <span className="valueStat">1,930kCal</span>
          <span className="statText">Calories</span>
        </div>
      </div>
      <div className="stats">
        <div className="logoContainer">
          <img src={logoCal} alt="logo Calorie" />
        </div>
        <div className="statValText">
          <span className="valueStat">1,930kCal</span>
          <span className="statText">Calories</span>
        </div>
      </div>
      <div className="stats">
        <div className="logoContainer">
          <img src={logoCal} alt="logo Calorie" />
        </div>
        <div className="statValText">
          <span className="valueStat">1,930kCal</span>
          <span className="statText">Calories</span>
        </div>
      </div>
    </div>
  );
}

export default StatsDisplay;