import "./style.css";
import logo from "../../assets/logo-blue.svg";
import pizzaicon from "../../assets/pizza-graf-icon.svg";
import leaderboardicon from "../../assets/leaderboard-icon.svg";
import experienceicon from "../../assets/experience-icon.svg";

const Aside = () => {
  return (
    <aside className="aside-main-container">
      <div>
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
      </div>

      <div className="container-card-experience">
        <img className="xp-icon" src={experienceicon} alt="" />
        <div className="text-card-container">
          <h3>Conheça a Blue</h3>
        </div>
        <div className="div-text">
          <p>
            Saiba mais informações sobre a Blue, uma operadora de saúde Health
            Tech
          </p>
        </div>

        <button className="xp-btn">Conhecer</button>
      </div>
    </aside>
  );
};

export default Aside;
