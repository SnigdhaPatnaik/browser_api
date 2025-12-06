export function SpeechSynthesisAPI() {
    const speak = () => {
        const utter = new SpeechSynthesisUtterance("Hello from speech API");
        speechSynthesis.speak(utter);
    };
    return <button onClick={speak}>Speak Text</button>
}