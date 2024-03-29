import background from "./img/bgvinted.jpg";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);
        setData(response.data.offers);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response); // contrairement au error.message d'express
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <span>En cours de chargement </span>
  ) : (
    <>
      <main>
        <div className="bg-container">
          <img src={background} alt="" />
          <div className="start-selling">
            <p className="Prets">Prêts à faire du tri dans vos placards ?</p>
            <button>Commencer à vendre</button>
          </div>
        </div>
        <section className="accueil">
          {!isLoading &&
            data.map((offer) => (
              <Link
                to={`/offer/${offer._id}`}
                className="offer-link"
                key={offer._id}
              >
                <div className="annonce">
                  <div className="owner">
                    {offer.owner.account.avatar && (
                      <img
                        className="annonce-avatar"
                        src={offer.owner.account.avatar.url}
                        alt=""
                      />
                    )}
                    <p className="owner-desc">{offer.owner.account.username}</p>
                  </div>
                  {offer.product_pictures.length > 0 && (
                    <img
                      className="annonce-picture"
                      src={offer.product_pictures[0].url}
                      alt=""
                    />
                  )}
                  <div className="annonce-desc">
                    <span>{offer.product_price}€</span>
                    <p className="owner-desc">
                      {offer.product_details[1].TAILLE}
                    </p>
                    <p className="owner-desc">
                      {offer.product_details[0].MARQUE}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </section>
      </main>
    </>
  );
};
export default Main;
