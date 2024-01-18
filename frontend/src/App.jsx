import "./App.css";
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
    </>
  );
}

export default App;
