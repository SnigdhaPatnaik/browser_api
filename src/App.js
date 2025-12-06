// import React, { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import OutputBox from "./components/OutputBox";
// import * as APIList from "./browserAPIs/index.js";
// export default function App() {
//   const [output, setOutput] = useState("Click any API from sidebar...");

//   const handleClick = async (apiName) => {
//     const result = await APIList[apiName]();
//     setOutput(result);
//   }
//   const apiNames = Object.keys(APIList);
//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       <Sidebar apiNames={apiNames} onClick={handleClick} />
//       <OutputBox output={output} />
//     </div>
//   );
// }

import { useState } from "react";
import * as APIs from "./browserAPIs/index.js";

const apiNames = Object.keys(APIs);

export default function App() {
  debugger
  const [selectedAPI, setSelectedAPI] = useState("LocalStorageAPI");

  const SelectedComponent = APIs[selectedAPI];

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div style={{ width: "250px", height: "600px", borderRight: "apx solid #ddd", padding: 10, overflowY: "scroll" }}>
        <h3>Browser APIs</h3>
        {
          apiNames.map((name) => {
            return <button
              key={name}
              onClick={() => setSelectedAPI(name)}
              style={{
                display: "block",
                width: "100%",
                margin: "6px 0",
                padding: "8px",
                background: selectedAPI === name ? "#222" : "#eee",
                color: selectedAPI === name ? "white" : "black",
                border: "none",
                cursor: "pointer"
              }}
            >
              {name.replace("API", "")}
            </button>
          })
        }
      </div>

      {/* Content Area */}
      <div style={{ flex: 1, padding: 20 }}>
        <h2>{selectedAPI.replace("API", "")}</h2>
        <SelectedComponent />
      </div>
    </div>
  )
}