import React, { useState } from "react";
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

// es7 snippets (Go download as an extension on VSC)

function Header() {
  const [inputSearch, setinputSearch] = useState("");

  return (
    <div className="header">
          <div className="header__left">
          <MenuIcon />
          <img className="header__logo" 
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dyoutube%2Blogo&psig=AOvVaw2NioiLpeMUHnbAh2M12BZn&ust=1700592232480000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCIDimPKd04IDFQAAAAAdAAAAABAE" alt="" 
          />
    </div>
          
    <div className="header__input">
           <input 
           onChange={e => setInputSearch(e.target.value)} 
           value={inputSearch} 
           placeholder="Search" 
           type="text" 
           />
           <Link to={`/search/${inputSearch}`}>
                <SearchIcon className="header__inputButton" />
            </Link>
    </div>
    
      <div className="header__icons">
            <VideoCallIcon className="header__icon"/>
            <AppsIcon className="header__icon"/>
            <NotificationsIcon className="header__icon"/>
            
            <Avatar
                alt="Abdibogoreh"
                src=""
            />
        </div>          
    </div>
  );
}

export default Header;