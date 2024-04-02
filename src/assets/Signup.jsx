import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = {
        email: formData.email,
        password: formData.password,
        username: formData.username,
      };

      console.log("Données du formulaire avant l'envoi :", userData);

      const response = await axios.post(
        "http://localhost:3000/signup",
        userData
      );
      console.log("Réponse du serveur :", response.data);

      alert("Votre compte a été créé avec succès !");
      Cookies.set("token", response.data.token, { expires: 7 });
      window.location.href = "/login";
    } catch (error) {
      console.log(
        "Erreur lors de la soumission du formulaire :",
        error.response.data
      );
    }
  };

  return (
    <>
      <main className="main-signup">
        <div className="signup-div">
          <form onSubmit={handleSubmit} className="signupUL">
            <h3>S'inscrire</h3>
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              name="username"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              name="password"
              onChange={handleChange}
            />
            <div className="checkbox-newsletter">
              <input
                className="checkbox"
                type="checkbox"
                name="newsletter"
                onChange={handleChange}
              />
              <h4>S'inscrire à notre newsletter</h4>
            </div>
            <p className="newsletter"></p>
            <input className="signupbutton" type="submit" value="Inscris toi" />
            <Link to="/login">
              <button className="already-account">
                Tu as déjà un compte ? Connecte toi
              </button>
            </Link>
          </form>
        </div>
      </main>
    </>
  );
};

export default Signup;
