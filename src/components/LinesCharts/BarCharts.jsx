import ApexCharts from "react-apexcharts";

const BarChart = () => {
  const options = {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
      labels: {
        style: {
          colors: ["#000000"], // Cor do texto da barra inferior
        },
      },
    },
    yaxis: {
      title: {
        text: "Rendimento Total",
      },
      min: 0,
      max: 25000,
      tickAmount: 6,
      labels: {
        formatter: function (value) {
          return `$${value}k`;
        },
        style: {
          colors: ["#000000"], // Cor do texto do eixo Y
        },
      },
    },
    colors: ["#0000FF", "#00FF00"], // Azul para Aguardando, Verde para Implantadas
    title: {
      text: "Rendimento Total",
      align: "left",
    },
  };

  const series = [
    {
      name: "Aguardando",
      data: [5000, 10000, 15000, 20000, 25000, 20000, 15000],
    },
    {
      name: "Implantadas",
      data: [10000, 15000, 20000, 25000, 20000, 15000, 10000],
    },
  ];

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <ApexCharts
            options={options}
            series={series}
            type="bar"
            height={300} width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
