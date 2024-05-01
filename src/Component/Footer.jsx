import facebookIcon from '../assets/images/icon-facebook.svg';
import instagramIcon from '../assets/images/icon-instagram.svg';
import pinterestIcon from '../assets/images/icon-pinterest.svg';
const Footer=()=><footer>
    <ul className="netwoksContainer">
        {/* <li><img src={facebookIcon} alt="FaceBookIcon" id='facebookItem' /></li>
        <li><img src={pinterestIcon} alt="PinterestIcon" /></li>
        <li><img src={instagramIcon} alt="InstagramIcon" /></li> */}
        <li><button id='facebookItem'></button></li>
        <li><button id='pinterestItem'></button></li>
        <li><button id='instagramItem'></button></li>
    </ul>
</footer>

export default Footer;