
export default (state, action) => {
  // Switch case for action types
  switch (action.type) {
    case "DELETE_TRANSACTIONS":
      // Filter out transaction with matching id
      return {
        ...state,
        transactions: state.tansactions.filter(
          (transactions) => transactions.id !== action.payload
        ),
      };
    case "ADD_TRANSACTIONS":
      // Add new transaction to the beginning of the list
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    default:
      // Return current state if no matching action type
      return state;
  }
};





