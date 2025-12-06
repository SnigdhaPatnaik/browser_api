import React from "react";
export default function Sidebar({ apiNames, onClick }) {
    return (
        <div style={ { width: "250px" , background: "#222", color: "white", padding: "10px", overflowY: "scroll"}}>
            <h2>Browser APIs</h2>
            {
                apiNames.map((name)=>(
                    <button
                        key={name}
                        onClick={()=> onClick(name)}
                        style={{display:"block", width:"100%", padding:"8px", margin: "6px 0"}}
                    >
                        {name}
                    </button>
                ))
            }
        </div>
    )
}