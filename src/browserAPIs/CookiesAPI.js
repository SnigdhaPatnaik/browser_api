export function CookiesAPI(){
    const setCookie =()=>{
        document.cookie = "username=sniggy; max-age=3600";
        alert("Cookie Set");
    }
    return <button onClick={setCookie}>Set Cookie</button>
}