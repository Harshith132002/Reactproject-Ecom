import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer " style={{marginTop:'100px'}}> 
        <div className="container5">
          <div className="row">
            
            <div className="footer-col">
            
              <ul>
                <h4>Exclusive</h4>
                <li><a href="#">Subscribe</a></li>
                <li><a href="#">Get 10% off your first order</a></li>
                <li>
                  <input type="text" placeholder="Enter your mail" />
                </li>
              </ul>
            </div>

            <div className="footer-col">
             
              <ul>
              <h4>Support</h4>
                <li><a href="#">111 Bijay Sarani, Dhaka</a></li>
                <li><a href="#">DH 1515, Bangladesh</a></li>
                <li><a href="#">exclusive@gmail.com</a></li>
                <li><a href="#">+88015-88888-9999</a></li>
              </ul>
            </div>

            <div className="footer-col">
              
              <ul>
              <h4>Account</h4>
                <li><a href="#">My Account</a></li>
                <li><a href="#">Login/Register</a></li>
                <li><a href="#">Cart</a></li>
                <li><a href="#">Wishlist</a></li>
                <li><a href="#">Shop</a></li>
              </ul>
            </div>

            <div className="footer-col">
              
              <ul>
              <h4>Quick Links</h4>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms Of Use</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Download App</h4>
              <p style={{ color: "white" }}>Save $3 with App New User Only</p>

              <div className="img">
                <img src="https://randomqr.com/assets/images/randomqr-256.png" height="50px" alt="QR Code" />
              </div>

              <div className="socia">
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a> 
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
