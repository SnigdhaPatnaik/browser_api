import { useEffect, useRef, useState } from "react";
export function ResizeObserverAPI() {
    const boxRef = useRef();
    const [size, setSize] = useState({});

    useEffect(() => {
        const obs = new ResizeObserver(([entry]) =>
            setSize(entry.contentRect)
        );
        obs.observe(boxRef.current);
    }, []);

    return (
        <>
            <div
                ref={boxRef}
                style={{ width: "50%", height: 100, background: "lightblue" }}
            >
                <pre>{JSON.stringify(size,null,2)}</pre>
            </div>
        </>
    )
}