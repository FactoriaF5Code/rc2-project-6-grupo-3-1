import "./Header.css";
import SvgLogo from "../SvgLogo/SvgLogo";

const Header = () => {
  return (
    <header>
      <section className="header__container">
        <SvgLogo />
        <section className="searchBar">
          <div className="searchBar__container">
            <svg
              className="searchBar__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_8_2318)">
                <path
                  d="M2.75 12H21.25C21.94 12 22.5 12.56 22.5 13.25V18L23.25 17.25H0.75L1.5 18V13.25C1.5 12.56 2.06 12 2.75 12ZM2.75 10.5C2.02065 10.5 1.32118 10.7897 0.805456 11.3055C0.289731 11.8212 0 12.5207 0 13.25L0 18C0 18.414 0.336 18.75 0.75 18.75H23.25C23.4489 18.75 23.6397 18.671 23.7803 18.5303C23.921 18.3897 24 18.1989 24 18V13.25C24 12.5207 23.7103 11.8212 23.1945 11.3055C22.6788 10.7897 21.9793 10.5 21.25 10.5H2.75ZM0 18V21C0 21.1989 0.0790176 21.3897 0.21967 21.5303C0.360322 21.671 0.551088 21.75 0.75 21.75C0.948912 21.75 1.13968 21.671 1.28033 21.5303C1.42098 21.3897 1.5 21.1989 1.5 21V18C1.5 17.8011 1.42098 17.6103 1.28033 17.4697C1.13968 17.329 0.948912 17.25 0.75 17.25C0.551088 17.25 0.360322 17.329 0.21967 17.4697C0.0790176 17.6103 0 17.8011 0 18ZM22.5 18V21C22.5 21.1989 22.579 21.3897 22.7197 21.5303C22.8603 21.671 23.0511 21.75 23.25 21.75C23.4489 21.75 23.6397 21.671 23.7803 21.5303C23.921 21.3897 24 21.1989 24 21V18C24 17.8011 23.921 17.6103 23.7803 17.4697C23.6397 17.329 23.4489 17.25 23.25 17.25C23.0511 17.25 22.8603 17.329 22.7197 17.4697C22.579 17.6103 22.5 17.8011 22.5 18ZM21.75 11.25V4.5C21.75 3.90326 21.5129 3.33097 21.091 2.90901C20.669 2.48705 20.0967 2.25 19.5 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V11.25C2.25 11.4489 2.32902 11.6397 2.46967 11.7803C2.61032 11.921 2.80109 12 3 12C3.19891 12 3.38968 11.921 3.53033 11.7803C3.67098 11.6397 3.75 11.4489 3.75 11.25V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H19.5C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V11.25C20.25 11.4489 20.329 11.6397 20.4697 11.7803C20.6103 11.921 20.8011 12 21 12C21.1989 12 21.3897 11.921 21.5303 11.7803C21.671 11.6397 21.75 11.4489 21.75 11.25ZM8.5 8.25H15.5C15.5663 8.25 15.6299 8.27634 15.6768 8.32322C15.7237 8.37011 15.75 8.4337 15.75 8.5V11.25L16.5 10.5H7.5L8.25 11.25V8.5C8.25 8.4337 8.27634 8.37011 8.32322 8.32322C8.37011 8.27634 8.4337 8.25 8.5 8.25ZM8.5 6.75C8.03587 6.75 7.59075 6.93437 7.26256 7.26256C6.93437 7.59075 6.75 8.03587 6.75 8.5V11.25C6.75 11.664 7.086 12 7.5 12H16.5C16.6989 12 16.8897 11.921 17.0303 11.7803C17.171 11.6397 17.25 11.4489 17.25 11.25V8.5C17.25 8.03587 17.0656 7.59075 16.7374 7.26256C16.4092 6.93437 15.9641 6.75 15.5 6.75H8.5Z"
                  fill="#474747"
                />
              </g>
              <defs>
                <clipPath id="clip0_8_2318">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <input
              type="text"
              className="searchBar__input"
              placeholder="   Busca tu hotel"
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
