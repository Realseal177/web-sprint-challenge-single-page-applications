import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  console.log(history);

  const routeToPizza = () => {
    console.log("Going to pizza");
    history.push("/pizza");
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
        alt=""
      />
      <button onClick={routeToPizza} id="order-pizza">
        Pizza?
      </button>
    </div>
  );
}
