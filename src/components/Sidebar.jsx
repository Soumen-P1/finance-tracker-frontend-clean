export default function Sidebar() {
  return (
    <aside style={{
      width: "220px",
      background: "var(--card)",
      padding: "1.5rem"
    }}>
      <h2>💰 Finance</h2>
      <nav style={{ marginTop: "2rem" }}>
        <p>Dashboard</p>
        <p>Transactions</p>
        <p>Profile</p>
      </nav>
    </aside>
  );
}
