import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import logo from "./img/vintedlogo.jpg";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
  }, [isAuthenticated]); // Ajoutez isAuthenticated comme dépendance de l'effet

  const handleLogout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
  };

  return (
    <div className="header-container">
      <div className="vintedlogo">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="search-container">
        <input
          className="searchbar"
          type="text"
          placeholder="Recherchez des articles"
        />
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
      <button className="Vends">Vend tes articles</button>
    </div>
  );
};

export default Header;
