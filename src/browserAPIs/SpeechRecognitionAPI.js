export function SpeechRecognitionAPI(){
    const start = () =>{
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

            const rec = new SpeechRecognition();
            rec.onresult = (e) => alert(e.results[0][0].transcript);
            rec.start();
    };
    return <button onClick={start}>Start Speech Recognition</button>
}