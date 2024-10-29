import "./App.css";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState();
  const [yourTip, setYourTip] = useState("");
  const [yourFriend, setYourFriend] = useState();
  function handleBill(e) {
    setBill(e.target.value);
  }
  function handleYourTip(e) {
    setYourTip(e.target.value);
  }
  function handleFriendTip(e) {
    setYourFriend(e.target.value);
  }
  return (
    <div>
      <Bill onchange={handleBill} bill={bill} />
      <Service
        onTip={handleYourTip}
        yourTip={yourTip}
        onSelect={handleFriendTip}
        yourFriend={yourFriend}
      />
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
function Service({ onTip, onSelect, yourFriend, yourTip }) {
  return (
    <>
      <div>
        How Did you like the Service
        <select value={yourTip} onChange={onTip}>
          <option>Dissatisified (0%)</option>
          <option>It was Okay (5%)</option>
          <option>It was good (10%)</option>
          <option>Absolutely amazing! (20%)</option>
        </select>
      </div>
      <div>
        How did your friend like the Service
        <select value={yourFriend} onChange={onSelect}>
          <option>Dissatisified (0%)</option>
          <option>It was Okay (5%)</option>
          <option>It was good (10%)</option>
          <option>Absolutely amazing! (20%)</option>
        </select>
      </div>
    </>
  );
}
function TipCalculator() {}
export default App;
