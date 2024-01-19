import "./Footer.css" 
import SvgLogo from "../SvgLogo/SvgLogo";

export const Footer = () => {
      return (
        <footer>
          <SvgLogo />
          <hr className="footer__line"></hr>
          <p>Copyright © 1996–2024 Booking.com™. Todos los derechos reservados</p>
        </footer>
      )
    }
    
