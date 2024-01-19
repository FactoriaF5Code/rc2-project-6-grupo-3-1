import "./Header.css";
import SvgLogo from "../SvgLogo/SvgLogo";
import SearchTool from "../SearchTool/SearchTool";

const Header = () => {
  return (
    <header>
      <section className="header__container">
        <SvgLogo />
        <SearchTool />
      </section>
    </header>
  );
};

export default Header;
