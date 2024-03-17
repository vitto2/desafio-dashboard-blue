import "./style.css";
import Aside from "./../Aside/Aside";
import Header from "./../Header/Header";
import Main from './../Main/Main';


const Home = () => {
  return (
    <div className="home-container-main">
      <div className="aside">
        <Aside />
      </div>
      <div className="header">
        <Header/>
      </div>
      <div className="main">
        <Main/>
      </div>
    </div>
  );
};

export default Home;
