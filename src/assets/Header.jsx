import logo from "./img/vintedlogo.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="vintedlogo">
          <Link to="http://localhost:5173/">
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>
        <div className="search-container">
          <input
            className="searchbar"
            type="text"
            placeholder="Recherchez des articles"
          ></input>
          <div className="filtre-header">
            <span>Triez par prix</span>
            <span>
              <input type="checkbox" name="prix-haut/bas" />
            </span>
            <span>Prix entre : </span>
            <div className="barre-filtre">barre prix</div>
          </div>
        </div>
        <div className="connect">
          <button className="signup">S'inscrire</button>
          <button className="login">Se connecter</button>
        </div>
        <button className="Vends">Vend tes articles</button>
      </div>
    </>
  );
};

export default Header;
