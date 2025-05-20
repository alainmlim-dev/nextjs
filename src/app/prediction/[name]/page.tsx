
const centerVh = {
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid cyan",
    padding: "32px"
}

interface Params {
    params: { name: string }
}

export default function Name({ params }: Params) {

    return (
        <>
            <div>
                <h1 style={{ fontSize: "5rem", textAlign: "center" }}>NextJS Project - Prediction</h1>
                <h2 style={{ fontSize: "3rem", textAlign: "center" }}>Hi, {params.name}!</h2>
            </div>
        </>
    );
}