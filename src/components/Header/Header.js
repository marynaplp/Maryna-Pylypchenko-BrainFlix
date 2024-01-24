import react from "react"

import "./header.css";
import { ReactComponent as BrainFlixLogo} from '../../Assets/Logo/BrainFlix-logo.svg';
import userAvatar from "../../Assets/Images/Mohan-muruge.jpg"

const Header=()=> {
    return (
      <header className="header">
      <BrainFlixLogo className="header__logo" />
      <div className ="header__description">
        <div className="header__searchSection">

        <input type="search" placeholder="Search" className="header__search" />
        </div>
        <div className="header__avatar">
        <img src={userAvatar} alt="User Avatar" className="header__avatar-image" />        </div>
        </div>
        <button className="header__upload-btn">UPLOAD</button>

      </header>
    );
  }

  export default Header;