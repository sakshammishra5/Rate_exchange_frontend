import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/rates`)
      .then(res => res.json())
      .then(setData)
      .catch(() => setError("Service temporarily unavailable"));
  }, []);

  if (error) return <p>{error}</p>;
  if (!data) return <p>Loading exchange rates...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>USD Exchange Rates</h2>

      {data.stale && (
        <p style={{ color: "orange" }}>
          Showing cached data (may be slightly outdated)
        </p>
      )}

      <p>
        {data.cached ? "Cached" : "Fresh"} • {data.age_seconds}s old
      </p>

      <ul>
        {Object.entries(data.rates).slice(0, 10).map(([key, value]) => (
          <li key={key}>
            {key}: {value.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
