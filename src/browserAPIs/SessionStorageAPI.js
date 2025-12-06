export function SessionStorageAPI({ setOutput }){
    const run = () =>{
        debugger
        sessionStorage.setItem("temp","Temporary Value");
        setOutput("Saved to SessionStorage");
    };
    return <button onClick={run}>SessionStorage Demo</button>
}