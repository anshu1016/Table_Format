import "./styles.css";
import { useState } from "react";

export default function App() {
  const [row, SetRow] = useState(Array(8).fill(null));
  const [col, setCol] = useState(Array(4).fill(null));

  const rowLength = row.length;
  const colLength = col.length;

  return (
    <div className="App">
      <h1>Table Format</h1>
      Row:
      <input
        type="range"
        min={2}
        max={10}
        step={2}
        value={rowLength}
        onChange={(e) => SetRow(Array(parseInt(e.target.value)).fill(null))}
      />
      Col:
      <input
        type="range"
        min={2}
        max={10}
        step={2}
        value={colLength}
        onChange={(e) => setCol(Array(parseInt(e.target.value)).fill(null))}
      />
      <table border="1">
        <tbody>
          {row.map((_, rowIndex) => (
            <tr key={rowIndex}>
              {col.map((_, colIndex) => (
                <td key={colIndex}>{colLength * rowIndex + colIndex + 1}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
