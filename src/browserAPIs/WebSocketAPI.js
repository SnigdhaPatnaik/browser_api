export function WebSocketAPI(){
    const connect=()=>{
       const ws = new WebSocket("wss://echo.websocket.org");
       ws.onopen = () => ws.send("Hello WebSocket");
       ws.onmessage = (msg) => alert(msg.data);
    };
    return <button onClick={connect}>Open WebSocket</button>
}