import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function IncomeExpenseLineChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Income",
        data: [30000, 32000, 31000, 35000, 38000, 40000],
        borderColor: "#16a34a",
        backgroundColor: "rgba(22,163,74,0.2)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Expenses",
        data: [20000, 22000, 21000, 25000, 26000, 27000],
        borderColor: "#dc2626",
        backgroundColor: "rgba(220,38,38,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#e5e7eb",
          font: { size: 14 },
        },
      },
      tooltip: {
        backgroundColor: "#111827",
        titleColor: "#e5e7eb",
        bodyColor: "#e5e7eb",
      },
    },
    scales: {
      x: {
        ticks: { color: "#e5e7eb" },
        grid: {
          color: "rgba(255,255,255,0.1)",
        },
      },
      y: {
        ticks: { color: "#e5e7eb" },
        grid: {
          color: "rgba(255,255,255,0.1)",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}
