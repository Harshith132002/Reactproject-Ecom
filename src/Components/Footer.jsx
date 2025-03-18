import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black py-16 mt-5"> 
        <div className="w-full max-w-[1200px] mx-auto px-4">
          <div className="flex flex-wrap">
            
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8">
              <h4 className="text-lg text-white font-medium mb-6">Exclusive</h4>
              <ul>
                <li className="mb-2"><a href="#" className="text-gray-100 text-base">Subscribe</a></li>
                <li className="mb-2"><a href="#" className="text-gray-100 text-base">Get 10% off your first order</a></li>
                <li className="mb-2">
                  <input type="text" placeholder="Enter your mail" className="p-2 rounded w-full" />
                </li>
              </ul>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8">
              <h4 className="text-lg text-white font-medium mb-6">Support</h4>
              <ul>
                <li className="mb-2"><a href="#" className="text-gray-100 text-base">111 Bijay Sarani, Dhaka</a></li>
                <li className="mb-2"><a href="#" className="text-gray-100 text-base">DH 1515, Bangladesh</a></li>
                <li className="mb-2"><a href="#" className="text-gray-100 text-base">exclusive@gmail.com</a></li>
                <li className="mb-2"><a href="#" className="text-gray-100 text-base">+88015-88888-9999</a></li>
              </ul>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8">
              <h4 className="text-lg text-white font-medium mb-6">Account</h4>
              <ul>
                <li className="mb-2"><a href="#" className="text-gray-100 text-base">My Account</a></li>
                <li className="mb-2"><a href="#" className="text-gray-100 text-base">Login/Register</a></li>
                <li className="mb-2"><a href="#" className="text-gray-100 text-base">Cart</a></li>
                <li className="mb-2"><a href="#" className="text-gray-100 text-base">Wishlist</a></li>
                <li className="mb-2"><a href="#" className="text-gray-100 text-base">Shop</a></li>
              </ul>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8">
              <h4 className="text-lg text-white font-medium mb-6">Quick Links</h4>
              <ul>
                <li className="mb-2"><a href="#" className="text-gray-100 text-base">Privacy Policy</a></li>
                <li className="mb-2"><a href="#" className="text-gray-100 text-base">Terms Of Use</a></li>
                <li className="mb-2"><a href="#" className="text-gray-100 text-base">FAQ</a></li>
                <li className="mb-2"><a href="#" className="text-gray-100 text-base">Contact</a></li>
              </ul>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8">
              <h4 className="text-lg text-white font-medium mb-6">Download App</h4>
              <p className="text-white mb-4">Save $3 with App New User Only</p>

              <div className="mb-4">
                <img src="https://randomqr.com/assets/images/randomqr-256.png" className="h-12" alt="QR Code" />
              </div>

              <div className="flex gap-4">
                <a href="#" className="text-white"><i className="fa-brands fa-facebook"></i></a>
                <a href="#" className="text-white"><i className="fa-brands fa-twitter"></i></a>
                <a href="#" className="text-white"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="text-white"><i className="fa-brands fa-linkedin-in"></i></a> 
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;