import ApexCharts from "react-apexcharts";

const VidasChart = () => {
    const options = {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [3, 3], // Largura da linha para cada série
          curve: "smooth",
        },
        title: {
          text: "Vidas",
          align: "left",
        },
        xaxis: {
          categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        },
        yaxis: {
          title: {
            text: "Quantidade",
          },
        },
        legend: {
          position: "top",
        },
        colors: ["#0000FF", "#00FF00"], // Azul para este mês, Verde para o último mês
      };
    
      const series = [
        {
          name: "Este mês",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 100, 110, 140],
        },
        {
          name: "Último mês",
          data: [20, 35, 45, 55, 60, 65, 75, 80, 110, 90, 95, 120],
        },
      ];
    
      return (
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <ApexCharts options={options} series={series} type="line" height={300} width={350} />
            </div>
          </div>
        </div>
      );
};

export default VidasChart;
