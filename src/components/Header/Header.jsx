import "./style.css";
import SearchBar from './../SearchBar/SearchBar';

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>Dashboard</h1>
      </div>
      <div>
      <SearchBar/>
      </div>
    </header>
  );
};

export default Header;
