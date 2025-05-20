"Use client"

const centerVh = {
  // display: "flex",
  margin: "auto",
  justifyContent: "center",
  alignItems: "center"
}

export default function Home() {
  return (
    <div style={centerVh}>
      <h1 style={{fontSize: "5rem"}}>NextJS Project</h1>
      <form style={{display: "flex", flexDirection: "column", maxWidth: "600px"}}>
        <input type="text"></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
