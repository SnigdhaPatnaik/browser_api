import { useState } from "react";
export function BatteryAPI(){
    const [level, setLevel] = useState(null);

    const getBattery = async ()=>{
        const battery = await navigator.getBattery();
        setLevel(battery.level * 100 + "%");
    };

    return (
        <>
        <button onClick={getBattery}>Get Battery Level</button>
        <p>{level}</p>
        </>
    )
}