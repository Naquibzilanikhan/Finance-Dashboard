export default function Insights({ transactions }) {
  const categories = {};

  transactions.forEach(t => {
    if (t.type === "expense") {
      categories[t.category] = (categories[t.category] || 0) + t.amount;
    }
  });

  const highest = Object.keys(categories).reduce((a, b) =>
    categories[a] > categories[b] ? a : b
  );

  return (
    <div className="bg-white p-4 rounded">
      <h2 className="text-xl font-bold mb-2">Insights</h2>
      <p>Highest Spending Category: {highest}</p>
    </div>
  );
}