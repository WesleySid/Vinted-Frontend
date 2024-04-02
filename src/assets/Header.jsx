import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import logo from "./img/vintedlogo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const checkAuthentication = () => {
      const token = Cookies.get("token");
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);
  const handleLogout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
  };

  return (
    <div className="header-container">
      <div className="vintedlogo">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="search-container">
        <div className="barre-recherche">
          <div className="loupe">
            <span>
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
          <input
            className="searchbar"
            type="text"
            placeholder="Recherchez des articles"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="filtre-header">
          <span>Triez par prix</span>
          <span>
            <input type="checkbox" name="prix-haut/bas" />
          </span>
          <span>Prix entre : </span>
        </div>
      </div>
      <div className="connect">
        {isAuthenticated ? (
          <>
            <button className="deco" onClick={handleLogout}>
              Se déconnecter
            </button>
          </>
        ) : (
          <>
            <Link to="/signup">
              <button className="signup">S'inscrire</button>
            </Link>
            <Link to="/login">
              <button className="login">Se connecter</button>
            </Link>
          </>
        )}
      </div>
      <Link to="/publish">
        <button className="Vends">Vend tes articles</button>
      </Link>
    </div>
  );
};

export default Header;
