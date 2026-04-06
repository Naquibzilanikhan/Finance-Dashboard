import { useState } from "react";
import { transactions as data } from "./data/mockData";
import SummaryCards from "./components/SummaryCards";
import Transactions from "./components/Transactions";
import RoleSwitcher from "./components/RoleSwitcher";
import Insights from "./components/Insights";

function App() {
  const [transactions, setTransactions] = useState(data);
  const [role, setRole] = useState("viewer");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <RoleSwitcher role={role} setRole={setRole} />
      <SummaryCards transactions={transactions} />
      <Transactions transactions={transactions} role={role} />
      <Insights transactions={transactions} />
    </div>
  );
}

export default App;