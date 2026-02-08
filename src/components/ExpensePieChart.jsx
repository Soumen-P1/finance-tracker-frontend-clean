import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpensePieChart() {
  const data = {
    labels: ["Food", "Rent", "Travel", "Shopping", "Others"],
    datasets: [
      {
        label: "Expenses",
        data: [5000, 7000, 2000, 1000, 500],
        backgroundColor: [
          "#f97316", // orange
          "#dc2626", // red
          "#2563eb", // blue
          "#9333ea", // purple
          "#16a34a", // green
        ],
        borderColor: "#111827",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#e5e7eb", // visible in dark mode
          padding: 15,
        },
      },
      tooltip: {
        bodyColor: "#e5e7eb",
        titleColor: "#e5e7eb",
        backgroundColor: "#111827",
      },
    },
  };

  return <Pie data={data} options={options} />;
}
