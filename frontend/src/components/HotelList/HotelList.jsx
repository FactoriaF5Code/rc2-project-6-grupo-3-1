import "./HotelList.css";

const HotelList = () => {
  return (
    <main>
      <article className="hotelCard">
        <img src=""></img>
        <section className="hotelCard__info">
          <h2 className="hotelCard__title"></h2>
          <p className="hotelCard__description"></p>
        </section>
        <section>
          <span className="priceContainer">
            <p className="priceContainer__price"></p>
            <p className="priceContainer__text">por noche</p>
          </span>
          <button className="hotelCard__button">Reserva</button>
        </section>
      </article>
    </main>
  );
};
export default HotelList;
