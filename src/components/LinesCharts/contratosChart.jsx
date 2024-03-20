import ApexCharts from "react-apexcharts";

const ContratosChart = () => {
    const options = {
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "70%", // Aumentando a largura das barras
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
          labels: {
            show: false, // Removendo os números nas laterais esquerdas
          },
        },
        yaxis: {
          labels: {
            show: false, // Removendo os números nas laterais esquerdas
          },
        },
        colors: ["#4AB58E", "#FFCF00"], // Amarelo para Aguardando, Verde para Finalizados
        title: {
          text: "Contratos",
          align: "left",
        },
      };
    
      const series = [
        {
          name: "Contratos Finalizados",
          data: [8823, 9523, 10234, 11001, 12032, 13123, 14232],
        },
        {
          name: "Contratos Aguardando",
          data: [12122, 13222, 14532, 15421, 16342, 17521, 18342],
        },
      ];
    
      return (
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <ApexCharts options={options} series={series} type="bar" height={300} width={350} />
            </div>
            
          </div>
        </div>
      );
};

export default ContratosChart;