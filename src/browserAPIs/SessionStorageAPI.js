export function SessionStorageAPI({ setOutput }){
    const run = () =>{
        sessionStorage.setItem("temp","Temporary Value");
        setOutput("Saved to SessionStorage");
    };
    return <button onClick={run}>SessionStorage Demo</button>
}