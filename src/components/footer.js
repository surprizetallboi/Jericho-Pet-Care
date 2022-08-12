import { Facebook, Instagram, PhoneIphone, Twitter } from '@mui/icons-material';
import './footer.css'
import InsuranceLogo from "../pci-logo.svg"

const footer = props => (
    <div className='footer'>
        <div className='footerItems'>
        <p className='footerTitle'>get in touch</p>
        <a href="tel:+1-682-248-1823" className='socialMedia'><PhoneIphone sx={{ fontSize: 50 }} /></a> 
        <a href="https://instagram.com/jerichopetcare/" className='socialMedia'><Instagram sx={{ fontSize: 50 }} /></a> 
        <a href="https://Facebook.com/jerichopetcare" className='socialMedia'><Facebook sx={{ fontSize: 50 }} /></a> 
        <a href="https://Twitter.com" className='socialMedia'><Twitter sx={{ fontSize: 50 }} /></a> 
        </div>
        <div className='space' />
        <div className='insurancePocket'>
        <a href="https://www.petcareins.com" target="_blank" >
<img src={InsuranceLogo} alt="Pet Care and Pet Sitting Insurance" className='insuranceLogo' />
</a>
</div>
    </div>
);

export default footer;

