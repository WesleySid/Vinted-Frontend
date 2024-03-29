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
              <h4>Titre</h4>
              <input type="text" placeholder="ex: Chemise trop moche" />
            </div>
            <div className="text-input">
              <h4>Décris ton article</h4>
              <textarea
                name="description"
                id="description"
                rows="5"
                placeholder="ex: porté quelquefois, taille correctement"
              ></textarea>
            </div>
          </div>
          <div className="text-input-section">Caractéristiques du vêtement</div>
          <div className="text-input-section">Prix</div>
          <div>
            <button>Ajouter</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Publish;
