import "./App.css";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState();
  const [yourTip, setYourTip] = useState(0);
  const [yourFriend, setYourFriend] = useState(0);
  const [tip, setTip] = useState(0);

  function handleBill(e) {
    setBill(Number(e.target.value));
  }

  function handleYourTip(e) {
    const newYourTip = Number(e.target.value);
    setYourTip(newYourTip);
    calculateTip(newYourTip, yourFriend);
  }

  function handleFriendTip(e) {
    const newYourFriend = Number(e.target.value);
    setYourFriend(newYourFriend);
    calculateTip(yourTip, newYourFriend);
  }

  function calculateTip(yourTip, yourFriend) {
    const average = (yourFriend + yourTip) / 2;

    setTip((bill * average) / 100);
  }

  return (
    <div>
      <Bill onchange={handleBill} bill={bill} />
      <Service onTip={handleYourTip} yourTip={yourTip}>
        How Did you like the Service
      </Service>
      <Service onTip={handleFriendTip} yourTip={yourFriend}>
        How did your friend like the Service
      </Service>

      <TipCalculator tip={tip} bill={bill} />
    </div>
  );
}
function Bill({ onchange, bill }) {
  return (
    <div>
      How much was the bill?
      <input type="number" value={bill} onChange={onchange} />
    </div>
  );
}
function Service({ onTip, yourTip, children }) {
  return (
    <>
      <div>
        {children}
        <select value={yourTip} onChange={onTip}>
          <option value="0">Dissatisified (0%)</option>
          <option value="5">It was Okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </div>
    </>
  );
}
function TipCalculator({ tip, bill }) {
  if (bill > 0)
    return (
      <h1>
        you pay {bill} + {tip}
      </h1>
    );
}
export default App;
