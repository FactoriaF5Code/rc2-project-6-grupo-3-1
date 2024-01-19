import "./SearchTool.css";
import SvgBedIcon from "../SvgBedIcon/SvgBedIcon";
import { useHotelContext } from "../../context/HotelContext";

const SearchTool = () => {
    const { search,setSearch } = useHotelContext();

    const handleSerch = (event) => {setSearch(event.target.value)};
    
  return (
    <section className="searchBar">
      <div className="searchBar__container">
        <SvgBedIcon />
        <input
          type="text"
          className="searchBar__input"
          placeholder="Busca tu hotel"
          value={search}
          onChange={handleSerch}
        ></input>
        <input
          className="searchBar__input--reset"
          type="reset"
          value="x"
        ></input>
      </div>
      <button className="searchBar__button">Buscar</button>
    </section>
  );
};

export default SearchTool;
