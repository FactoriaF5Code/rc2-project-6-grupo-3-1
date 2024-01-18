/* eslint-disable react/prop-types */
import BookingModal from "../BookingModal/BookingModal";
import "./BookingButton.css";
import { useState } from "react";

const BookingButton = ({hotelId}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button className="booking__button" onClick={()=> setOpenModal(true)}>Reserva</button>
      <BookingModal  open={openModal} closing={setOpenModal} hotelId={hotelId}/>
    </div>
  );
};

export default BookingButton;
