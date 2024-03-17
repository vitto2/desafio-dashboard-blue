import "./style.css";
import SearchBar from "./../SearchBar/SearchBar";
import DropDown from "../DropDownLang/DropDown";
import notificationIcon from "../../assets/notificationicon.svg";
import avatarIcon from "../../assets/avatar-icon.jpg";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>Dashboard</h1>
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <DropDown />
      </div>
      <div className="notification-icon">
        <img src={notificationIcon} alt="Icon de notificação" />
      </div>
      <div className="container-user-profile">
        <img src={avatarIcon} alt="" />
        <div>
          <h3>Paulo Freire</h3>
          <h5>Comercial</h5>
        </div>
      </div>
    </header>
  );
};

export default Header;
