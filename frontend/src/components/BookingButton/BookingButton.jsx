import BookingModal from "../BookingModal/BookingModal";
import "./BookingButton.css";

const BookingButton = () => {
  return (
    <div>
      <button className="booking__button">Reserva</button>
      <BookingModal />
    </div>
  );
};

export default BookingButton;
