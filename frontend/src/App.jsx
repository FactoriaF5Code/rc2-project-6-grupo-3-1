import "./App.css";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HotelList from "./components/HotelList/HotelList";
import HotelProvider from "./context/HotelContext";

function App() {
  return (
    <>
      <HotelProvider>
        <Header />
        <HotelList />
      </HotelProvider>
      <Footer />
    </>
  );
}

export default App;
