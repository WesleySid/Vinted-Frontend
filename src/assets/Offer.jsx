import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
  }, [id]);

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
                <h2>{offer.product_price}€</h2>
                <ul>
                  <li>
                    <span
                      className="li-left
                    "
                    >
                      MARQUE
                    </span>
                    <span
                      className="li-right
                    "
                    >
                      {offer.product_details[0].MARQUE}
                    </span>
                  </li>
                  <li>
                    <span
                      className="li-left
                    "
                    >
                      TAILLE
                    </span>
                    <span
                      className="li-right
                    "
                    >
                      {offer.product_details[1].TAILLE}
                    </span>
                  </li>
                  <li>
                    <span
                      className="li-left
                    "
                    >
                      ÉTAT
                    </span>
                    <span
                      className="li-right
                    "
                    >
                      {offer.product_details[2].ÉTAT}
                    </span>
                  </li>
                  <li>
                    <span
                      className="li-left
                    "
                    >
                      COULEUR
                    </span>
                    <span
                      className="li-right
                    "
                    >
                      {offer.product_details[3].COULEUR}
                    </span>
                  </li>
                  <li>
                    <span
                      className="li-left
                    "
                    >
                      EMPLACEMENT
                    </span>
                    {offer.product_details[4] && (
                      <span
                        className="li-right
                      "
                      >
                        {offer.product_details[4].EMPLACEMENT}
                      </span>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className="second-half">
              <h2>{offer.product_name}</h2>
              <p className="li-left">{offer.product_description}</p>
              <div className="annonce-id">
                <img
                  className="annonce-avatar2"
                  src={offer.owner.account.avatar?.url}
                  alt=""
                />
                <p>{offer.owner.account.username}</p>
              </div>
              <Link to="/payment">
                {" "}
                <button className="buybutton">Acheter</button>{" "}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offer;
