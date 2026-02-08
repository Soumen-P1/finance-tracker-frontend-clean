import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function ExpenseChart() {
  const data = {
    labels: ["Food", "Rent", "Travel", "Shopping", "Others"],
    datasets: [
      {
        label: "Expenses (₹)",
        data: [5000, 7000, 2000, 1000, 500],
        backgroundColor: "#dc2626",
      },
    ],
  };

  const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: "#e5e7eb", // visible in dark mode
        font: {
          size: 14,
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#e5e7eb",
      },
      grid: {
        color: "rgba(255,255,255,0.1)", // 👈 grid lines
      },
    },
    y: {
      ticks: {
        color: "#e5e7eb",
      },
      grid: {
        color: "rgba(255,255,255,0.1)",
      },
    },
  },
};

  return <Bar data={data} options={options} />;
}
