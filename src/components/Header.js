import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className="header">
          <img
              className="header-logo" src="https://play-lh.googleusercontent.com/G7jAks-PRl4d7IkL-s3Ir44nGyPq0Yh872N5UMwZYIJz4wG1Oj0DqoQjsAR5ddKZbQ" alt="@mazon"
          />
          <div className="header-search">
              <input type="text" className="header-search-input" />
              <SearchIcon className="header-search-icon"/>
                  
          </div>

          <div className="header-nav">
              <div className="header-option">
                  <span className="header-option-line1">
                      Hello Guest
                  </span>
                  <span className="header-option-line2">
                      Sign in
                  </span>
                  
            </div>
              <div className="header-option">
                   <span className="header-option-line1">
                      Returns
                  </span>
                  <span className="header-option-line2">
                      Orders
                  </span>
                  
            </div>
              <div className="header-option">
                   <span className="header-option-line1">
                      Your
                  </span>
                  <span className="header-option-line2">
                      Prime
                  </span>
                  
              </div>
              
              <div className="header-option-basket">
                  <ShoppingBasketIcon />
                  <span className="header-option-line2 header-basket-count">0</span>
              </div>
          </div>
    </div>
  );
}

export default Header;
