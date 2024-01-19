import "./HotelList.css";
import BookingButton from "../BookingButton/BookingButton";
import { useHotelContext } from "../../context/HotelContext";

const HotelList = () => {
  const { data,search } = useHotelContext();
  const filteredHotels = data.filter( hotel => hotel.name.toLowerCase().includes(search.toLowerCase()))
  
// noseque ? hazme esto : hazme lo otro
  return (
    <main>
      { (search === "") ?
      
      (data.map((hotel) => (
        <article className="hotelCard" key={hotel.id}>
          <div className="hotelCard__imgContainer">
            <img
              className="hotelCard__imgContainer--img"
              src={hotel.photoUrl}
            ></img>
          </div>
          <section className="hotelCard__info">
            <h2 className="hotelCard__title">{hotel.name}</h2>
            <p className="hotelCard__description">{hotel.description}</p>
          </section>
          <section className="hotelCard__booking">
            <span className="booking__priceContainer">
              <p className="priceContainer__price">{hotel.pricePerNight} €</p>
              <p className="priceContainer__text">por noche</p>
            </span>
            <BookingButton hotelId={hotel.id} />
          </section>
        </article>
      )) 
      ) : (
        filteredHotels.map((hotel) => ( <article className="hotelCard" key={hotel.id}>
      <div className="hotelCard__imgContainer">
        <img
          className="hotelCard__imgContainer--img"
          src={hotel.photoUrl}
        ></img>
      </div>
      <section className="hotelCard__info">
        <h2 className="hotelCard__title">{hotel.name}</h2>
        <p className="hotelCard__description">{hotel.description}</p>
      </section>
      <section className="hotelCard__booking">
        <span className="booking__priceContainer">
          <p className="priceContainer__price">{hotel.pricePerNight} €</p>
          <p className="priceContainer__text">por noche</p>
        </span>
        <BookingButton hotelId={hotel.id} />
      </section>
    </article>)))
    }
    </main>
  );
};

export default HotelList;
