import { Link } from 'react-router-dom'; 
import './header.css';
function Header(){
    return(
        <div className="wrapper">
        <div className="parallax__group hero-container">
          <div className="parallax__layer sky"></div>
          <div className="parallax__layer bushes"></div>
          <div className="parallax__layer water"></div>
          <div className="parallax__layer people1"></div>
          <div className="parallax__layer people2"></div>
          <div className="parallax__layer people3"></div>
          <div className="parallax__layer hero-text">
          <h3>
              <span>T</span>
              <span>r</span>
              <span>a</span>
              <span>v</span>
              <span>e</span>
              <span>l</span>
              <span>l</span>
              <span>o</span>
            </h3>
            <div className="search-container">
            <input
              type="text"
              placeholder="Search Your destinations..."
              className="search-box"
            />
            <button type="submit" className="search-button">Search</button>
          </div>

            <ul>
              <li><a href="#"><Link to='/blog'>Blogs</Link></a></li>
              <li><a href="#">ContactUS</a></li>
              <li><a href="#" className="btn"><Link to='/login'>SignUp/Login</Link></a></li>
            </ul>
            <div className="year-container">
              {/* <h1>2</h1>
              <h2>0</h2>
              <h2>2</h2>
              <h1>5</h1> */}
              {/* <h3>Plan Your Next Year Trips</h3> */}
            </div>
            <div className="social-container">
              <a href="https://github.com/KiaanCastillo" target="_blank" rel="noopener noreferrer">
                <i className="icon ion-logo-github"></i>
              </a>
              <a href="https://www.instagram.com/craftedbykiaan/" target="_blank" rel="noopener noreferrer">
                <i className="icon ion-logo-instagram"></i>
              </a>
              <a href="https://dribbble.com/kiaancastillo" target="_blank" rel="noopener noreferrer">
                <i className="icon ion-logo-dribbble"></i>
              </a>
              <a href="https://www.youtube.com/c/KiaanCastillo" target="_blank" rel="noopener noreferrer">
                <i className="icon ion-logo-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="parallax__group info-container">
          <img src="/concert.jpg" alt="Lively and colourful concert" />
          <div className="text-container">
            <h2>This is your year.</h2>
            <p>What would life be if we had no courage to do anything?</p>
            <p>-Explore the Northern India</p>
            <a href="#" className="btn">Book Now</a>
          </div>
        </div>
      </div>
    );
    
}
export default Header;