import "./style.css";
import logo from "../../assets/logo-blue.svg";
import pizzaicon from "../../assets/pizza-graf-icon.svg";
import leaderboardicon from "../../assets/leaderboard-icon.svg";

const Aside = () => {
  return (
    <aside className="aside-main-container">
      <div className="logo-text-section">
        <img src={logo} alt="Logo da blue" />
        <h2>Blue</h2>
      </div>
      <div className="container-menu-dash">
        <img src={pizzaicon} alt="" />
        <h2>Dashboard</h2>
      </div>
      <div className="container-menu-leaderboard">
        <img src={leaderboardicon} alt="" />
        <h2>Leaderboard</h2>
      </div>
    </aside>
  );
};

export default Aside;
