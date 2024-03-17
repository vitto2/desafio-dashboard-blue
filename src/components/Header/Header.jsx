import "./style.css";
import SearchBar from "./../SearchBar/SearchBar";
import DropDown from "../DropDownLang/DropDown";

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
    </header>
  );
};

export default Header;
