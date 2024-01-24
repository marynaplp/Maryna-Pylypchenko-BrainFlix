import react from "react"

import "./header.css";
import { ReactComponent as BrainFlixLogo} from '../../Assets/Logo/BrainFlix-logo.svg';
import userAvatar from "../../Assets/Images/Mohan-muruge.jpg"

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <div className="header__main">
        <Search />
        <ProfilePicture />
      </div>
      <div className="header__features">
        <UploadButton />
        <ProfilePictureTab />
      </div>
    </header>
  );
};

const Logo = () => (
  <div className="header__image">
    <BrainFlixLogo alt="Brainflix-logo" className="header__logo" />
  </div>
);

const Search = () => (
  <div className="header__form">
    <input type="search" placeholder="Search" className="header__search" />
  </div>
);

const UploadButton = () => <button className="header__button"> Upload</button>;

const ProfilePicture = () => (
  <img
    src={userAvatar}
    alt="Mohan"
    className="header__profile-picture"></img>
);


const ProfilePictureTab = () => (
  <img
    src={userAvatar}
    alt="Mohan"
    className="header__profile-picture-tab"></img>
);

export default Header;