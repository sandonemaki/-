import React, { useState } from 'react';
import './App.css';


// ドリンクの種類を表す型
type DrinkType = 'coffee' | 'tea' | 'milk' | 'coke' | 'beer';

// 各ドリンクの数量を管理する型
type Counts = Record<DrinkType, number>;

// 各ドリンクの価格を管理する型
type Prices = Record<DrinkType, number>;

function App() {
  const [counts, setCounts] = useState<Counts>({
    coffee: 0,
    tea: 0,
    milk: 0,
    coke: 0,
    beer: 0,
  });

  const prices: Prices = {
    coffee: 480,
    tea: 280,
    milk: 180,
    coke: 190,
    beer: 580,
  };

  const handleClick = (item: DrinkType) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [item]: prevCounts[item] + 1,
    }));
  };

  const totalCount = Object.values(counts).reduce((a, b) => a + b, 0);
  const totalPrice = Object.entries(counts).reduce(
    (sum, [item, count]) => sum + count * prices[item as DrinkType],
    0
  );

  const itemLabels: Record<DrinkType, string> = {
    coffee: "コーヒー",
    tea: "紅茶",
    milk: "ミルク",
    coke: "コーラ",
    beer: "ビール",
  };

  return (
    <div>
      <h1>ドリンク注文</h1>
      <div id="buttons">
        {Object.keys(counts).map((item) => (
          <button key={item} onClick={() => handleClick(item as DrinkType)}>
            <div className="button-content">
              <span>{itemLabels[item as DrinkType]}</span>
              <span>{prices[item as DrinkType]}円</span>
            </div>
            <span className="badge">{counts[item as DrinkType]}</span>
          </button>
        ))}
      </div>
      <div id="summary">
        <p>お会計</p>
        <hr />
        <span>商品数: {totalCount}個</span>
        <span>合計金額: {totalPrice}円</span>
      </div>
    </div>
  );
}

export default App;
