"use client";

import { FormEvent, useState } from "react";

const centerVh = {
  display: "flex",
  margin: "auto",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid cyan",
  padding: "32px"
}

export default function Home() {

  const [inputVal, setInputVal] = useState("")

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Clicked")
  }

  return (
    <>
      <h1 style={{ fontSize: "5rem", textAlign: "center" }}>NextJS Project</h1>
      <div style={centerVh}>
        <form style={{ display: "flex", flexDirection: "column", maxWidth: "600px" }} onSubmit={handleSubmit}>
          <input type="text" placeholder="Type name here..." style={{ border: "1px solid red" }}></input>
          <button style={{marginTop: "16px", cursor: "pointer"}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Predict Data
          </button>
        </form>
      </div>
    </>
  );
}
