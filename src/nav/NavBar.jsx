
import logo from "../assets/logo.png"
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="navDash">
      <img src={logo} alt="logo" className="logo" />
      <p className="acceuil">Acceuil</p>
      <p className="profil">Profil</p>
      <p className="réglage">Réglage</p>
      <p className="communauté">Communauté</p>
    </nav>
  );
}

export default NavBar;