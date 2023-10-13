import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
  ],
};

//Global Context

export const GlobalContext = createContext(initialState);

//Global Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // Actions
  function deleteTransactions(id) {
    dispatch({ type: "DELETE_TRANSACTIONS", payload:  id  });
  }

  function addTransactions(transactions) {
    dispatch({ type: "ADD_TRANSACTIONS", payload:  transactions  });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
