import BookingModal from "../BookingModal/BookingModal";
import "./BookingButton.css";
import { useState } from "react";

const BookingButton = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button className="booking__button" onClick={()=> setOpenModal(true)}>Reserva</button>
      <BookingModal  open={openModal} closing={()=> setOpenModal(false)}/>
    </div>
  );
};

export default BookingButton;
