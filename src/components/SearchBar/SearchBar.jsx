import "./style.css";
import iconsearch from '../../assets/iconsearch.svg'

const SearchBar = () => {
  return (
    <div className="search-bar">
        <img src={iconsearch} alt="" />
        <input type="text" placeholder="Pesquisar informações" />
    </div>
  );
};

export default SearchBar;
