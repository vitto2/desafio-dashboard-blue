import ApexChart from "react-apexcharts";

const chart = () => {
  const options = {
    xaxis: {
      type: "line",
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ],
    },
    yaxis: {
      tooltips: {
        enabled: true,
      },
    },
    title: {
      text: "Plataformas",
      align: "left",
    },
    series: [
      {
        name: "TD consultoria",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
      },
      {
        name: "RIKO Plataforma",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
      },
      {
        name: "Blue Serviços",
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: true,
      },
    },
    colors: ['#A700FF', '#EF4444', '#3CD856'],
  };
  return <ApexChart options={options} series={options.series} />;
};

export default chart;
