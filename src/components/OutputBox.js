import React from "react";
export default function OutputBox({ output }) {
    return (
        <div style={{ flex: 1, padding: "20px", background: "#f2f2f2" }}>

            <h2>Output</h2>
            <pre style={{ background: "white", padding: "10px", border: "1px solid #ddd" }}>
                {String(output)}
            </pre>
        </div>
    );
}