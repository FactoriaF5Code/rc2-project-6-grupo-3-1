import "./Header.css";
import SvgLogo from "../SvgLogo/SvgLogo";
import SvgBedIcon from "../SvgBedIcon/SvgBedIcon";

const Header = () => {
  return (
    <header>
      <section className="header__container">
        <SvgLogo />
        <section className="searchBar">
          <div className="searchBar__container">
            <SvgBedIcon />
            <input
              type="text"
              className="searchBar__input"
              placeholder="Busca tu hotel"
            ></input>
            <input
              className="searchBar__input--reset"
              type="reset"
              value="x"
            ></input>
          </div>
          <button className="searchBar__button">Buscar</button>
        </section>
      </section>
    </header>
  );
};

export default Header;
