import { useReducer } from "react";


const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }
}

const UseRedCounterApp=() =>{
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>
        +
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>
    </>
  );
}

export default UseRedCounterApp