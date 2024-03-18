import "./style.css";
import Aside from "./../Aside/Aside";
import Header from "./../Header/Header";
import Main from "./../Main/Main";

const Home = () => {
  return (
    <>
      <div className="home-main-container">
        <div className="aside-home-container">
          <Aside />
        </div>
        <div className="header-home-container">
          <Header />
        </div>
        <div className="main-home-container">
          <Main />
        </div>
      </div>
    </>
  );
};

export default Home;
