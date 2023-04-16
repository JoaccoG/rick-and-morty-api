import './PlanetDetails.css';

const PlanetDetails = () => {
  return (
    <article className="planet-details__container">
      <section className="p-d-container__info">
        <div className="p-d-info__sprite">
          <img
            src={`../assets/img/planet-${'1'}.png`}
            alt={`planet-${'...'}`}
          />
        </div>
        <div className="p-d-info__text">
          <h1>Details</h1>
          <div className="info-text__data">
            <p role={'paragraph'}>Planet:</p>
            <span>{'...'}</span>
            <p role={'paragraph'}>Type:</p>
            <span>{'...'}</span>
            <p role={'paragraph'}>Dimension:</p>
            <span>{'...'}</span>
            <p role={'paragraph'}>Created:</p>
            <span>{'...'}</span>
          </div>
        </div>
      </section>
    </article>
  );
};

export default PlanetDetails;
