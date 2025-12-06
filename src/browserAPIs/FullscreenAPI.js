export function FullscreenAPI(){
    return(
        <button onClick={()=> document.documentElement.requestFullscreen()}>
            Go Fullscreen
        </button>
    )
}