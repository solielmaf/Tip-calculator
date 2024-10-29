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
    if (e.target.value === "Dissatisified (0%)") setYourTip(0);
    if (e.target.value === "It was Okay (5%)") setYourTip(5);
    if (e.target.value === "It was good (10%)") setYourTip(10);
    if (e.target.value === "Absolutely amazing! (20%)") setYourTip(20);
  }
  function handleFriendTip(e) {
    if (e.target.value === "Dissatisified (0%)") setYourFriend(0);
    if (e.target.value === "It was Okay (5%)") setYourFriend(5);
    if (e.target.value === "It was good (10%)") setYourFriend(10);
    if (e.target.value === "Absolutely amazing! (20%)") setYourFriend(20);
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
      <TipCalculator bill={bill} yourFriend={yourFriend} yourTip={yourTip} />
      {yourFriend}
      {yourTip}
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
function Service({ onTip, onSelect, yourFriend, yourTip, children }) {
  return (
    <>
      <div>
        {children}
        <select value={yourTip} onChange={onTip}>
          <option>Dissatisified (0%)</option>
          <option>It was Okay (5%)</option>
          <option>It was good (10%)</option>
          <option>Absolutely amazing! (20%)</option>
        </select>
      </div>
    </>
  );
}
function TipCalculator({ bill, yourFriend, yourTip }) {
  const [percent, setPercent] = useState();

  const tip = bill * (yourFriend = "Dissatisified (0%)");
}
export default App;
