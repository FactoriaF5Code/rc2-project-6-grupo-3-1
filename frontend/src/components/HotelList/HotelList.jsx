import { useEffect } from "react";
import "./HotelList.css";
import axios from "axios";
import { useState } from "react";
import BookingButton from "../BookingButton/BookingButton";

const HotelList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/hotels").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <main>
      {data.map((hotel) => (
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
            <BookingButton />
          </section>
        </article>
      ))}
    </main>
  );
};
export default HotelList;
