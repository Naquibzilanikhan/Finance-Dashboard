import { useState } from "react";

export default function Transactions({ transactions, role }) {
  const [search, setSearch] = useState("");

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-4 rounded mb-6">
      <input
        placeholder="Search..."
        className="border p-2 mb-4"
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full">
        <thead>
          <tr>
            <th>Date</th><th>Amount</th><th>Category</th><th>Type</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map(t => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>₹{t.amount}</td>
              <td>{t.category}</td>
              <td>{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {role === "admin" && (
        <button className="mt-4 bg-blue-500 text-white px-4 py-2">
          Add Transaction
        </button>
      )}
    </div>
  );
}