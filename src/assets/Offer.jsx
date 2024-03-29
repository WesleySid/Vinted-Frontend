import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
  const { id } = useParams();
  const [offer, setOffer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        const offerData = response.data.offers.find(
          (offer) => offer._id === id
        );
        setOffer(offerData);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]); // inclure id dans les dépendances pour déclencher le rechargement lorsque l'ID change

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="div-container">
      {offer && (
        <div className="content">
          <div className="left">
            {offer.product_pictures.length > 0 && (
              <img
                className="photo-annonce-id"
                src={offer.product_pictures[0].url}
                alt=""
              />
            )}
          </div>
          <div className="right">
            <div className="first-half">
              <div className="description-produit">
                <p> {offer.product_price}€</p>
                <p className="leftdesc">MARQUE </p>
                <p className="leftdesc">TAILLE</p>
                <p className="leftdesc">ETAT</p>
                <p className="leftdesc">COULEUR</p>
                <p className="leftdesc">EMPLACEMENT</p>
              </div>
              <div className="description-detail">
                <p>{offer.product_details[0].MARQUE}</p>
                <p>{offer.product_details[1].TAILLE}</p>
                <p>{offer.product_details[2].ÉTAT}</p>
                <p>{offer.product_details[3].COULEUR}</p>
                {offer.product_details[4] && (
                  <p>{offer.product_details[4].EMPLACEMENT}</p>
                )}
              </div>
            </div>
            <div className="second-half">
              <p>{offer.product_name}</p>
              <p>{offer.product_description}</p>
              <div className="annonce-id">
                <img
                  className="annonce-avatar2"
                  src={offer.owner.account.avatar.url}
                  alt=""
                />
                <p>{offer.owner.account.username}</p>
              </div>
              <button className="buybutton">Acheter</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offer;
