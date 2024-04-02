import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Publish = ({ token }) => {
  // Si je suis connecté j'affiche la page, sinon je redeirige vers /login

  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      //   console.log(response.data);
      if (response.data._id) {
        navigate(`/offers/${response.data._id}`);
      }
    } catch (error) {
      console.log("Je suis dans le catch", error);
    }
  };

  return token ? (
    <main className="publish-main">
      <h2>Vends ton article</h2>

      <form onSubmit={handleSubmit} className="publish-form">
        {picture && <img src={URL.createObjectURL(picture)} alt="produit" />}
        <div className="picture-input-section">
          <label htmlFor="picture-input" style={{ color: "#43B1BA" }}>
            + Ajoute une photo
          </label>
          <input
            style={{ display: "none" }}
            id="picture-input"
            type="file"
            onChange={(event) => {
              console.log(event);
              setPicture(event.target.files[0]);
            }}
          />
        </div>
        <div className="text-input-section">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            placeholder="Titre"
          />
        </div>
        <div className="text-input-section">
          <textarea
            rows={6}
            cols={30}
            name="description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            placeholder="Description"
          />
        </div>
        <div className="text-input">
          <input
            type="text"
            name="brand"
            value={brand}
            onChange={(event) => {
              setBrand(event.target.value);
            }}
            placeholder="Marque"
          />
          <input
            type="text"
            name="size"
            value={size}
            onChange={(event) => {
              setSize(event.target.value);
            }}
            placeholder="Taille"
          />
        </div>
        <div className="text-input">
          <input
            type="text"
            name="color"
            value={color}
            onChange={(event) => {
              setColor(event.target.value);
            }}
            placeholder="Couleur"
          />
          <input
            type="text"
            name="condition"
            value={condition}
            onChange={(event) => {
              setCondition(event.target.value);
            }}
            placeholder="État"
          />
        </div>
        <div className="text-input-section">
          <input
            type="text"
            name="city"
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
            }}
            placeholder="Ville"
          />
        </div>
        <div className="text-input-section">
          <input
            type="number"
            name="price"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
            placeholder="Prix"
          />
        </div>
        <div className="publish-button">
          <button type="submit">Ajouter</button>
        </div>
      </form>
    </main>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
