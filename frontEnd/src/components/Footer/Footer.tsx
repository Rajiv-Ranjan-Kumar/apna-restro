import './Footer.scss';
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt=""loading='lazy' />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid doloremque voluptas animi nostrum consequuntur cumque nulla voluptatibus, ipsa explicabo fugiat.</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt=""loading='lazy' />
                <img src={assets.twitter_icon} alt=""loading='lazy' />
                <img src={assets.linkedin_icon} alt=""loading='lazy' />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li><a href="tel:+12123257485">+1-212-325-7485</a></li>
                <li><a href="mailto:contact@gmail.com">contact@gmail.com</a></li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">copyright 2024 &copy; Tomato.com - All rights reserved.</p>
    </div>
  )
}

export default Footer
