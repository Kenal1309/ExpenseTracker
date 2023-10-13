import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Transtion from "./Transtion";

export default function TranstionList() {
  const {transactions}= useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transactions => (
        <Transtion transaction = {transactions}  key = {transactions.id}      />
        ))}
      </ul>
    </>
  );
}

