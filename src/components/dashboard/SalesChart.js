import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesChart = () => {
  const chartoptions = {
    series: [
      {
        name: "Ingresos",
        data: [0, 500, 1500, 2000, 2500, 3000, 4000, 5000, 6000, 7000, 8000],
      },
      {
        name: "# Cocheras",
        data: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000],
      },
      {
        name: "# Cocheras reservadas",
        data: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      },
    ],
    options: {
      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 3,
        borderColor: "rgba(0,0,0,0.1)",
      },

      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        categories: [
          "Ene",
          "Feb",
          "Mar",
          "Abril",
          "May",
          "Jun",
          "Jul",
          "Ago",
          "Sep",
          "Oct",
          "nov",
        ],
      },
    },
  };
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Ingresos mensuales por cocheras reservadas</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Reporte de Ventas anuales
        </CardSubtitle>
        <Chart
          type="area"
          width="100%"
          height="390"
          options={chartoptions.options}
          series={chartoptions.series}
        />
      </CardBody>
    </Card>
  );
};

export default SalesChart;
