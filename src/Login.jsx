import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

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

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      if (response.status === 200) {
        alert("Authentification réussie !");
        Cookies.set("token", response.data.token, { expires: 7 });
        setIsAuthenticated(true);
        navigate("/");
      }
    } catch (error) {
      console.error("Erreur lors de l'authentification :", error);
      alert(
        "L'authentification a échoué. Veuillez vérifier vos informations d'identification."
      );
    }
  };

  return isAuthenticated ? (
    <div className="already-logged">
      <h5>Déjà connecté au compte de {email}</h5>
      <Link to="/">
        <button className="signupbutton">Retour au menu principal</button>
      </Link>
    </div>
  ) : (
    <main className="main-signup">
      <div className="signup-div">
        <form className="signupUL">
          <h3>Se connecter</h3>
          <input
            type="text"
            placeholder="Adresse email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            className="signupbutton"
            type="button"
            value="Se connecter"
            onClick={handleLogin}
          />
          <Link to="/signup">
            <button className="">
              Pas encore de compte ? Inscrivez-vous !
            </button>
          </Link>
        </form>
      </div>
    </main>
  );
};

export default Login;
