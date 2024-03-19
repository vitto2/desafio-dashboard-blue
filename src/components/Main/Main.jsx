import "./style.css";
import Sales from "../Sales/Sales";
import Chart from "./../LinesCharts/LineChart";

const Main = () => {
  return (
    <main className="main-container">
      <div className="main-container-div-01">
        <div>
          <Sales />
        </div>
        <div className="barChart">
          <Chart className="chartLine" />
          <chart />
        </div>
      </div>
    </main>
  );
};

export default Main;
