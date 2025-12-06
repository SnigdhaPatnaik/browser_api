export function ClipboardAPI(){
    return (
        <button onClick={()=> navigator.clipboard.writeText("Hello World!")}>
            Copy "Hello World"
        </button>
    )
}