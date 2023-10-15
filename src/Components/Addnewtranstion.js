import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";

export default function Addnewtranstion() {
  const { addTransactions } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
    setTimeout(() => {
      console.log(amount);
    }, 1000);
  };

  const onsubmit = (e) => {
    e.preventDefault();
    // Validation check
    if (text.trim() === "" || amount.trim() === "") {
      alert("Please enter a valid text and amount");
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransactions(newTransaction);
    setText("");
    setAmount("");
  };


  return (
    <>
      <h3>Add New Transtion </h3>
      <form onSubmit={onsubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            placeholder="Enter Text..."
            onChange={onChange}
          ></input>
        </div>
        <div>
          <label htmlFor="amount">
            Amount <br />
            (Negative-Expense, Positive+Income)
          </label>
          <input
            type="number"
            placeholder="Enter Amount...."
            value={amount}
            onChange={onChangeAmount}
          ></input>
        </div>
        <button className="btn" >
          Add Transtion
        </button>
      </form>
    </>
  );
}
