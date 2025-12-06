export function GeolocationAPI(){
    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((pos)=>{
            alert(`Lat: ${pos.coords.latitude},Lng: ${pos.coords.longitude}`)
        })
    }
    return <button onClick={getLocation}>Get Location</button>
}