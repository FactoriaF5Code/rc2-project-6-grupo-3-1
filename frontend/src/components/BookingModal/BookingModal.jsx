/* eslint-disable react/prop-types */
import { useHotelContext } from "../../context/HotelContext";
import "./BookingModal.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";

function puedeReservar(reservasExistente, nuevaReserva) {
  const {
    hotelId: nuevoHotelId,
    entryDay: nuevaEntrada,
    exitDay: nuevaSalida,
  } = nuevaReserva;

  // Verificar si no hay reservas existentes
  if (reservasExistente.length === 0) {
    console.log("No hay reservas existentes. Se puede reservar.");
    return true; // No hay reservas existentes, se puede reservar
  }

  for (const reserva of reservasExistente) {
    const {
      hotelId,
      entryDay: entradaExistente,
      exitDay: salidaExistente,
    } = reserva;

    // Verificar si hay solapamiento de fechas para el mismo hotel
    if (hotelId === nuevoHotelId) {
      const entradaExistenteTime = new Date(entradaExistente).getTime();
      const salidaExistenteTime = new Date(salidaExistente).getTime();
      const nuevaEntradaTime = new Date(nuevaEntrada).getTime();
      const nuevaSalidaTime = new Date(nuevaSalida).getTime();

      console.log("Comparando fechas:");
      console.log(`Nueva Entrada: ${nuevaEntradaTime}`);
      console.log(`Nueva Salida: ${nuevaSalidaTime}`);
      console.log(`Existente Entrada: ${entradaExistenteTime}`);
      console.log(`Existente Salida: ${salidaExistenteTime}`);

      if (
        nuevaEntradaTime < salidaExistenteTime &&
        nuevaSalidaTime > entradaExistenteTime
      ) {
        console.log("Hay solapamiento de fechas. No se puede reservar.");
        return false; // Solapamiento de fechas, no se puede reservar
      }
    }
  }

  console.log("No hay solapamiento de fechas. Se puede reservar.");
  return true; // No hay solapamiento, se puede reservar
}

const BookingModal = ({ open, closing, hotelId }) => {
  const { data } = useHotelContext();
  const [entryDate, setEntryDate] = useState("");
  const [exitDate, setExitDate] = useState("");
  const [bookings, setBookings] = useState([]);
  const [confirmed, setConfirmed] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api/bookings").then((response) => {
      setBookings(response.data);
    });
  }, [entryDate]);

  function handleBooking() {
    const nuevaReserva = { hotelId, entryDay: entryDate, exitDay: exitDate };

    // Verificar si el hotelId coincide en las reservas existentes

    if (puedeReservar(bookings, nuevaReserva)) {
      // Si el hotelId coincide y se puede reservar, realizar la solicitud
      axios
        .post("http://localhost:8080/api/bookings", nuevaReserva)
        .then((response) => {
          console.log(response);
          // Lógica adicional después de la reserva si es necesario
        });
      setConfirmed("confirmed");
    } else {
      console.log("No se puede reservar debido a solapamiento de fechas.");
      setConfirmed("notConfirmed");
      // Puedes mostrar un mensaje al usuario informándole que no se puede reservar en esas fechas
    }
    handleClick;
  }

  function handleClick() {
    closing(false);
    setConfirmed("");
  }

  if (!open && confirmed === "") return null;

  return (
    <div className="bookingModal">
      {confirmed === "confirmed" && (
        <div className="alertModal">
          <Alert
            variant="filled"
            severity="success"
            sx={{ fontSize: 20 }}
            onClose={handleClick}
          >
            Enhorabuena ha reservado en {data[hotelId - 1].name} del {entryDate}{" "}
            al {exitDate}
          </Alert>
        </div>
      )}
      {confirmed === "notConfirmed" && (
        <div className="alertModal">
          <Alert
            variant="filled"
            severity="error"
            sx={{ fontSize: 20 }}
            onClose={handleClick}
          >
            No se ha podido reservar, el hotel {data[hotelId - 1].name} esta
            completo en esas fechas.
          </Alert>
        </div>
      )}
      <div className="bookingModal__container">
        <p
          className="bookingModal__container--closingButton"
          onClick={handleClick}
        >
          X
        </p>
        <h2 className="bookingModal__title">¡ Completa tu reserva !</h2>
        <div className="bookingModal__hotel">
          <h2 className="bookingModal__hotel--name">
            {data[hotelId - 1].name}
          </h2>
          <img
            className="bookingModal__hotel--img"
            src={data[hotelId - 1].photoUrl}
          />
        </div>
        <form className="bookingModal__form">
          <label className="bookingModal__form--label" htmlFor="date">
            Fecha de entrada
          </label>
          <input
            className="bookingModal__form--input"
            type="date"
            name="date"
            id="date"
            value={entryDate}
            onChange={(event) => {
              setEntryDate(event.target.value);
            }}
          />
          <label className="bookingModal__form--label" htmlFor="date">
            Fecha de salida
          </label>
          <input
            className="bookingModal__form--input"
            type="date"
            name="date"
            id="date"
            value={exitDate}
            onChange={(event) => {
              setExitDate(event.target.value);
            }}
          />
        </form>
        <button className="bookingModal__button" onClick={handleBooking}>
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
