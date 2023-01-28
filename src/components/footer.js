import { Facebook, Instagram, PhoneIphone, Twitter } from "@mui/icons-material";
import "./footer.css";
import InsuranceLogo from "../pci-logo.svg";

const footer = (props) => (
  <div className="footer">
    <div className="footerItems">
      
      <a href="https://instagram.com/jerichopetcare/" className="socialMedia">
        <Instagram sx={{ fontSize: 40 }} />
      </a>
      <a href="https://Facebook.com/jerichopetcare" className="socialMedia">
        <Facebook sx={{ fontSize: 40 }} />
      </a>
      <a href="https://Twitter.com" className="socialMedia">
        <Twitter sx={{ fontSize: 40 }} />
      </a>
    </div>
    <div className="space" />
    <div className="insurancePocket">
      <a href="https://www.petcareins.com" target="_blank">
        <img
          src={InsuranceLogo}
          alt="Pet Care and Pet Sitting Insurance"
          className="insuranceLogo"
        />
      </a>
    </div>
  </div>
);

export default footer;
