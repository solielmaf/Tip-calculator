import "./App.css";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState();
  const [yourTip, setYourTip] = useState(0);
  const [yourFriend, setYourFriend] = useState(0);
  const average = (yourFriend + yourTip) / 2;
  const tip = (bill * average) / 100;

  function handleBill(e) {
    setBill(Number(e.target.value));
  }
  function handleReset() {
    setBill("");
    setYourTip(0);
    setYourFriend(0);
  }

  return (
    <div>
      <Bill onchange={handleBill} bill={bill} />
      <Service onTip={setYourTip} yourTip={yourTip}>
        How Did you like the Service
      </Service>
      <Service onTip={setYourFriend} yourTip={yourFriend}>
        How did your friend like the Service
      </Service>

      <TipCalculator tip={tip} bill={bill} handleReset={handleReset} />
    </div>
  );
}
function Bill({ onchange, bill }) {
  return (
    <div>
      How much was the bill?
      <input
        type="number"
        value={bill}
        onChange={onchange}
        placeholder="Bill value"
      />
    </div>
  );
}
function Service({ onTip, yourTip, children }) {
  return (
    <>
      <div>
        {children}
        <select value={yourTip} onChange={(e) => onTip(Number(e.target.value))}>
          <option value="0">Dissatisified (0%)</option>
          <option value="5">It was Okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </div>
    </>
  );
}
function TipCalculator({ tip, bill, handleReset }) {
  if (bill > 0)
    return (
      <>
        <h1>
          you pay ${bill + tip} (${bill} + ${tip})
        </h1>
        <button onClick={handleReset}>Reset</button>
      </>
    );
}
export default App;
