import "./LeftBar.css"
import yoga from "../assets/icons/Group.png"
import swim from "../assets/icons/swim.png"
import bike from "../assets/icons/bike.png"
import muscle from "../assets/icons/muscle.png"

const SecondNavBar = () => {
  return (
    <section className="secondNav">
      <img src={yoga} className="navIcon" alt="Yoga icon" />
      <img src={swim} className="navIcon swim" alt="Swim icon" />
      <img src={bike} className="navIcon bike" alt="Bike icon" />
      <img src={muscle} className="navIcon dumbbel" alt="dumbbells icon" />
      <p className="copyright">Copiryght, SportSee 2020</p>
    </section>
  );
}

export default SecondNavBar;