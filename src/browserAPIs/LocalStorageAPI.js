export function LocalStorageAPI() {
    localStorage.setItem("demo", "Hello LocalStorage");
    let code = `
    localStorage.setItem("demo","Hello LocalStorage");
    localStorage.getItem("demo")`;
    return <div>
        <h1>Input</h1>{code}
        <h1>Outout</h1>{localStorage.getItem("demo")}
    </div>
}