import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export default function Transtion(props) {
  const { deleteTransactions } = useContext(GlobalContext);
  const sign = props.transaction.amount > 0 ? "+" : "-";
  return (
    <li className={props.transaction.amount < 0 ? "minus" : "plus"}>
      {props.transaction.text}{" "}
      <span>
        {sign}${Math.abs(props.transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransactions(props.transaction.id)}
      >
        x
      </button>
    </li>
  );
}
