import react from "react";
import {Link} from "react-router-dom";
import "./header.css";
import { ReactComponent as BrainFlixLogo} from '../../Assets/Logo/BrainFlix-logo.svg';
import userAvatar from "../../Assets/Images/Mohan-muruge.jpg"

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <div className="header__main">
        <Search />
    
        <div className="header__features">
        <UploadButton />
        <ProfilePictureTab />
      </div>
      </div>
     
    </header>
  );
};

const Logo = () => (
  <Link to="/">
  <div className="header__image">
    <BrainFlixLogo alt="Brainflix-logo" className="header__logo" />
  </div>
  </Link>
);

const Search = () => (
  <div className="header__form">
    <input type="search" placeholder="Search" className="header__search" />
    <img
    src={userAvatar}
    alt="Mohan"
    className="header__profile-picture"></img>
  </div>
);

const UploadButton = () => 
<Link to ="/upload">
<button className="header__button"> Upload</button>
</Link> 



const ProfilePictureTab = () => (
  <img
    src={userAvatar}
    alt="Mohan"
    className="header__profile-picture-tab"></img>
);

export default Header;