import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ThemeToggle from "../components/ThemeToggle";
// import { fetchTransactions } from "../services/api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import "./Dashboard.css";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (err) {
        console.error("Failed to load transactions", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Calculations
  const income = transactions
    .filter(t => t.type === "INCOME")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter(t => t.type === "EXPENSE")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expenses;

  // Chart data
  const lineData = [
    { name: "Income", value: income },
    { name: "Expenses", value: expenses },
  ];

  const pieData = [
    { name: "Income", value: income },
    { name: "Expenses", value: expenses },
  ];

  const COLORS = ["#22c55e", "#ef4444"]; // green, red

  if (loading) {
    return (
      <Layout>
        <h2>Loading dashboard...</h2>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="dashboard">
        {/* Header */}
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <ThemeToggle />
        </div>

        {/* Summary Cards */}
        <div className="cards">
          <div className="card">
            <h3>Total Balance</h3>
            <p className="amount">₹ {balance}</p>
          </div>

          <div className="card">
            <h3>Monthly Income</h3>
            <p className="amount income">₹ {income}</p>
          </div>

          <div className="card">
            <h3>Monthly Expenses</h3>
            <p className="amount expense">₹ {expenses}</p>
          </div>
        </div>

        {/* Charts */}
        <div className="charts">
          {/* Line Chart */}
          <div className="chart-card">
            <h3>Income vs Expenses</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid
                  stroke="var(--grid-color)"
                  strokeDasharray="3 3"
                />
                <XAxis
                  dataKey="name"
                  stroke="var(--axis-color)"
                />
                <YAxis stroke="var(--axis-color)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--tooltip-bg)",
                    borderColor: "var(--tooltip-border)",
                    color: "var(--text-color)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#22c55e"
                  strokeWidth={3}
                  dot={{
                    stroke: "var(--axis-color)",
                    strokeWidth: 2,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="chart-card">
            <h3>Expense Breakdown</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label={{ fill: "var(--text-color)" }}
                >
                  {pieData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--tooltip-bg)",
                    borderColor: "var(--tooltip-border)",
                    color: "var(--text-color)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </Layout>
  );
}
