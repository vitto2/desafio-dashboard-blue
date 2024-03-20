import "./style.css";
import Sales from "../Sales/Sales";
import Chart from "./../LinesCharts/LineChart";
import BarChart from "../LinesCharts/BarCharts";
import VidasChart from "../LinesCharts/VidasCharts";
import ContratosChart from "../LinesCharts/contratosChart";

const Main = () => {
  return (
    <main className="main-container">
      <div className="main-container-div-01">
        <div>
          <Sales />
        </div>
        <div className="line-chart-container">
          <Chart className="chartline" />
          <chart />
        </div>
      </div>
      <div className="main-container-div-02">
        <div className="container-chart">
          <BarChart />
        </div>
        <div className="container-chart">
          <VidasChart />
        </div>
        <div className="container-chart">
          <ContratosChart />
        </div>
      </div>
    </main>
  );
};

export default Main;
