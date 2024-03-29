const Publish = () => {
  return (
    <div className="publish-main">
      <div className="publish-container">
        <h4>Vends ton article</h4>
        <form className="publish-form">
          <div className="add-photo">
            <label htmlFor="file" className="label-photo">
              <span className="input">+</span>
              <span>Ajoute une photo</span>
            </label>
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4> Titre :</h4>
              <input type="text" placeholder="ex: Chemise trop moche" />
            </div>
            <div className="text-input">
              <h4>Décris ton article :</h4>
              <textarea
                name="description"
                id="description"
                rows="5"
                placeholder="ex: porté quelquefois, taille correctement"
              ></textarea>
            </div>
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Marque :</h4>
              <input
                type="text"
                id="selectedBrand"
                name="selectedBrand"
                placeholder="ex: Zara"
                value=""
              ></input>
            </div>
            <div className="text-input">
              <h4>Taille :</h4>
              <input
                type="text"
                id="selectedBrand"
                name="selectedBrand"
                placeholder="ex: L/ 40 / 12"
                value=""
              ></input>
            </div>
            <div className="text-input">
              <h4>Couleur :</h4>
              <input
                type="text"
                id="selectedBrand"
                name="selectedBrand"
                placeholder="ex: Bleu"
                value=""
              ></input>
            </div>
            <div className="text-input">
              <h4>Etat :</h4>
              <input
                type="text"
                id="selectedBrand"
                name="selectedBrand"
                placeholder="ex: Neuf avec étiquette"
                value=""
              ></input>
            </div>
            <div className="text-input">
              <h4>Lieu :</h4>
              <input
                type="text"
                id="selectedBrand"
                name="selectedBrand"
                placeholder="ex: Paris"
                value=""
              ></input>
            </div>
          </div>
          <div className="text-input-section">
            <h4>Prix :</h4>
            <div className="check-section">
              <input
                type="text"
                id="price"
                name="price"
                placeholder="0,00 €"
                value=""
              />
              <div className="checkbox-input">
                <input
                  type="checkbox"
                  name="exchange"
                  id="exchange"
                  value="false"
                ></input>
                <span>Je suis intéressé(e) par les échanges</span>
              </div>
            </div>
          </div>
          <div className="publish-button">
            <button type="submit" className="form-validation">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Publish;
