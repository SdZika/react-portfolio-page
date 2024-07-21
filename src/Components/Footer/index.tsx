import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
        <div className="icons">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} style={{ fontSize: '36px', color: '#142850', margin: "7rem 1rem 1rem 1rem" }} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '36px', color: '#142850', margin: "7rem 1rem 1rem 1rem" }} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '36px', color: '#142850', margin: "7rem 1rem 1rem 1rem" }} />
        </a> 
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: '36px', color: '#142850', margin: "7rem 1rem 1rem 1rem" }} />
        </a>    
           
        </div>
        <p className="icons">&copy; {currentYear} All rights reserved</p>
    </footer>
    )
}

    
   
