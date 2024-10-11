import React, { useState } from 'react';
import './App.css';

function App() {
  const [counts, setCounts] = useState({
    coffee: 0,
    tea: 0,
    milk: 0,
    coke: 0,
    beer: 0
  });

  const prices = {
    coffee: 480,
    tea: 280,
    milk: 180,
    coke: 190,
    beer: 580
  };

  const handleClick = (item) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [item]: prevCounts[item] + 1
    }));
  };

  const totalCount = Object.values(counts).reduce((a, b) => a + b, 0);
  const totalPrice = Object.entries(counts).reduce((sum, [item, count]) => sum + count * prices[item], 0);

  const itemLabels = {
    coffee: "コーヒー",
    tea: "紅茶",
    milk: "ミルク",
    coke: "コーラ",
    beer: "ビール"
  };

  return (
    <div>
      <h1>ドリンク注文</h1>
      <div id="buttons">
        {Object.keys(counts).map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            <div className="button-content">
              <span>{itemLabels[item]}</span>
              <span>{prices[item]}円</span>
            </div>
            <span className="badge">{counts[item]}</span>
          </button>
        ))}
      </div>
      <div id="summary">
        <p>お会計</p>
        <hr/>
        <span>商品数: {totalCount}個</span>
        <span>合計金額: {totalPrice}円</span>
      </div>
    </div>
  );
}

export default App;
