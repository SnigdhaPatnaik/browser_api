Perfect. Here are the **TOP 25 MOST IMPORTANT Browser APIs** — the ones interviewers actually ask.

For **each API** you get:

✔ **What**
✔ **Why**
✔ **How**
✔ **Advantages**
✔ **Disadvantages**
✔ **1 small code example**

All in **simple, interview-friendly English**.

---

# ✅ **TOP 25 BROWSER APIs — Complete Interview Notes**

---

# **1. DOM API**

### ✔ What

Allows JavaScript to read & modify HTML elements.

### ✔ Why

To update UI dynamically (change text, style, elements).

### ✔ How

`document.querySelector`, `appendChild`, etc.

### ✔ Advantages

✔ Easy to use
✔ Real-time UI updates
✔ Backbone of all JS frameworks

### ✔ Disadvantages

✘ Slow for large DOM trees
✘ Direct manipulation becomes messy

### ✔ Code

```js
document.querySelector("#title").textContent = "Hello DOM";
```

### ✔ Output

The element with id `title` will show:

```
Hello DOM
```

---

# **2. Fetch API**

### ✔ What

Modern API to make HTTP requests.

### ✔ Why

To call backend APIs.

### ✔ How

`fetch(url).then(...)`

### ✔ Advantages

✔ Promise-based
✔ Cleaner than XMLHttpRequest

### ✔ Disadvantages

✘ No default timeout
✘ Need `.json()` manually

### ✔ Code

```js
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => console.log(data));
```

### ✔ Output

Console prints an array of posts:

```
[ { userId: 1, id: 1, title: "...", body: "..." }, ... ]
```

---

# **3. LocalStorage API**

### ✔ What

Stores key–value data permanently in browser.

### ✔ Why

To save user preferences (theme, language etc.).

### ✔ How

`localStorage.setItem()` / `getItem()`

### ✔ Advantages

✔ Simple
✔ Persistent (even after browser restart)

### ✔ Disadvantages

✘ Max 5MB
✘ Only strings

### ✔ Code

```js
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme"));
```

### ✔ Output

```
dark
```

---

# **4. SessionStorage API**

### ✔ What

Temporary storage, cleared on tab close.

### ✔ Why

To store page-session-based data (OTP timer etc.).

### ✔ How

`sessionStorage.setItem()`

### ✔ Advantages

✔ Per-tab storage
✔ Easy to use

### ✔ Disadvantages

✘ Clears on tab close
✘ Only strings

### ✔ Code

```js
sessionStorage.setItem("token", "123");
console.log(sessionStorage.getItem("token"));
```

### ✔ Output

```
123
```

---

# **5. Cookies API**

### ✔ What

Small data stored by browser, often used for authentication.

### ✔ Why

To store tokens for secure communication.

### ✔ How

`document.cookie = "key=value"`

### ✔ Advantages

✔ Works across pages
✔ Can have expiry time

### ✔ Disadvantages

✘ Max 4KB
✘ Sent with every request — affects performance

### ✔ Code

```js
document.cookie = "user=John; path=/; max-age=3600";
console.log(document.cookie);
```

### ✔ Output

```
user=John
```

---

# **6. Geolocation API**

### ✔ What

Gives user’s real-time location (latitude/longitude).

### ✔ Why

Maps, food delivery tracking, taxi apps.

### ✔ How

`navigator.geolocation.getCurrentPosition()`

### ✔ Advantages

✔ Accurate GPS data
✔ Easy to use

### ✔ Disadvantages

✘ Requires permission
✘ Does not work offline

### ✔ Code

```js
navigator.geolocation.getCurrentPosition(pos => {
  console.log(pos.coords.latitude);
});
```

### ✔ Output

```
19.0760   (example)
```

---

# **7. Clipboard API**

### ✔ What

Programmatically copy/paste data.

### ✔ Why

Copy OTP, copy text buttons.

### ✔ How

`navigator.clipboard.writeText()`

### ✔ Advantages

✔ No flash selection
✔ Smooth user experience

### ✔ Disadvantages

✘ Works only on HTTPS
✘ Needs permissions sometimes

### ✔ Code

```js
navigator.clipboard.writeText("Copied!");
console.log("Text copied");
```

### ✔ Output

```
Text copied
```

(And clipboard contains “Copied!”)

---

# **8. Notification API**

### ✔ What

Shows system-level notifications.

### ✔ Why

Chat alerts, reminders.

### ✔ How

`new Notification("Message")`

### ✔ Advantages

✔ High visibility
✔ Works in background with service worker

### ✔ Disadvantages

✘ Requires user permission

### ✔ Code

```js
new Notification("New message received");
```

### ✔ Output

A system popup notification appears:

```
New message
```

---

# **9. Battery Status API**

### ✔ What

Shows device battery info.

### ✔ Why

Optimize features when low battery.

### ✔ How

`navigator.getBattery()`

### ✔ Advantages

✔ Energy-aware apps

### ✔ Disadvantages

✘ Not supported in all browsers

### ✔ Code

```js
navigator.getBattery().then(b => console.log(b.level));
```
### ✔ Output

```
0.76   (meaning 76%)
```
---

# **10. Fullscreen API**

### ✔ What

Makes an element go fullscreen.

### ✔ Why

Video players, games.

### ✔ How

`element.requestFullscreen()`

### ✔ Advantages

✔ Better UI for media

### ✔ Disadvantages

✘ User gesture required

### ✔ Code

```js
document.documentElement.requestFullscreen();
```
### ✔ Output

Your webpage enters **fullscreen mode**.

---

# **11. History API**

### ✔ What

Controls browser navigation/history.

### ✔ Why

Useful in Single Page Applications.

### ✔ How

`history.pushState()`

### ✔ Advantages

✔ Smooth navigation without reload

### ✔ Disadvantages

✘ Must handle back/forward manually

### ✔ Code

```js
history.pushState({}, "", "/dashboard");
console.log(location.pathname);
```
### ✔ Output

```
/dashboard
```
---

# **12. Navigator API**

### ✔ What

Provides browser and device information.

### ✔ Why

Detect browser features.

### ✔ How

`navigator.userAgent`

### ✔ Advantages

✔ Useful for feature detection

### ✔ Disadvantages

✘ UserAgent can be spoofed

### ✔ Code

```js
console.log(navigator.userAgent);
```
### ✔ Output (example)

```
Mozilla/5.0 (Windows NT 10.0; Win64; x64) ...
```
---

# **13. SpeechSynthesis API**

### ✔ What

Converts text to speech.

### ✔ Why

Voice assistants.

### ✔ How

`speechSynthesis.speak()`

### ✔ Advantages

✔ Hands-free experience

### ✔ Disadvantages

✘ Robotic voices

### ✔ Code

```js
speechSynthesis.speak(new SpeechSynthesisUtterance("Hello User"));
```

### ✔ Output

Browser **speaks**:

```
Hello User
```

---

# **14. SpeechRecognition API**

### ✔ What

Converts user voice into text.

### ✔ Why

Voice commands, search.

### ✔ How

`webkitSpeechRecognition()`

### ✔ Advantages

✔ Great accessibility

### ✔ Disadvantages

✘ Not supported everywhere

### ✔ Code

```js
const rec = new webkitSpeechRecognition();
rec.onresult = e => console.log(e.results[0][0].transcript);
rec.start();
```

### ✔ Output (example after speaking)

```
hello world
```

---

# **15. WebSocket API**

### ✔ What

Real-time communication with server.

### ✔ Why

Chat apps, live dashboards.

### ✔ How

`new WebSocket(url)`

### ✔ Advantages

✔ Bi-directional
✔ Fast

### ✔ Disadvantages

✘ Needs backend WebSocket server

### ✔ Code

```js
const ws = new WebSocket("ws://example.com");
ws.onopen = () => console.log("Connected");
```

### ✔ Output

```
Connected
```

---


# **16. Canvas API**

### ✔ What

Draw graphics using JS.

### ✔ Why

Games, charts, animations.

### ✔ How

`canvas.getContext("2d")`

### ✔ Advantages

✔ Fast rendering

### ✔ Disadvantages

✘ Pixel-based, no DOM

### ✔ Code

```js
const ctx = document.querySelector("canvas").getContext("2d");
ctx.fillRect(20, 20, 100, 50);
```

### ✔ Output

A **filled rectangle** appears on canvas.

---

# **17. IndexedDB API**

### ✔ What

Browser database for large data.

### ✔ Why

Offline apps, caching.

### ✔ How

`indexedDB.open()`

### ✔ Advantages

✔ Stores large files
✔ Works offline

### ✔ Disadvantages

✘ Complex API

### ✔ Code

```js
const db = indexedDB.open("myDB", 1);
db.onsuccess = () => console.log("DB Ready");
```

### ✔ Output

```
DB Ready
```

---

# **18. MutationObserver API**

### ✔ What

Watches DOM changes.

### ✔ Why

Detect dynamic updates without polling.

### ✔ How

`new MutationObserver()`

### ✔ Advantages

✔ Efficient
✔ Accurate

### ✔ Disadvantages

✘ Can fire too frequently

### ✔ Code

```js
new MutationObserver(m => console.log("DOM changed"))
  .observe(document.body, { childList: true });

document.body.append("Hello");
```
### ✔ Output

```
DOM changed
```
---

# **19. IntersectionObserver API**

### ✔ What

Detects when an element enters the viewport.

### ✔ Why

Lazy loading, infinite scroll.

### ✔ How

`new IntersectionObserver()`

### ✔ Advantages

✔ No scroll events
✔ Highly performant

### ✔ Disadvantages

✘ Needs polyfill for old browsers

### ✔ Code

```js
new IntersectionObserver(e => console.log(e))
  .observe(document.querySelector("#box"));
```

### ✔ Output

```
Visible
```

(When `#box` enters viewport)

---

# **20. ResizeObserver API**

### ✔ What

Detects element size changes.

### ✔ Why

Responsive charts, grids.

### ✔ How

`new ResizeObserver()`

### ✔ Advantages

✔ Very accurate

### ✔ Disadvantages

✘ Can be heavy if many elements

### ✔ Code

```js
new ResizeObserver(e => console.log(e))
  .observe(document.querySelector("#box"));
```

### ✔ Output

```
Resized
```

(When element size changes)

---

# **21. MediaDevices API**

### ✔ What

Access camera/microphone.

### ✔ Why

Video call apps.

### ✔ How

`navigator.mediaDevices.getUserMedia()`

### ✔ Advantages

✔ Easy media capture

### ✔ Disadvantages

✘ Permission required

### ✔ Code

```js
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => console.log("Camera On"));
```

### ✔ Output

```
Camera On
```

(Camera opens)

---

# **22. MediaRecorder API**

### ✔ What

Record audio/video.

### ✔ Why

Screen recording, audio notes.

### ✔ How

`new MediaRecorder(stream)`

### ✔ Advantages

✔ Records in chunks

### ✔ Disadvantages

✘ Limited browser support

### ✔ Code

```js
const rec = new MediaRecorder(stream);
rec.onstart = () => console.log("Recording...");
rec.start();
```
### ✔ Output

```
Recording...
```
---

# **23. AbortController API**

### ✔ What

Cancel ongoing fetch calls.

### ✔ Why

Stop unwanted API calls.

### ✔ How

`controller.abort()`

### ✔ Advantages

✔ Saves bandwidth
✔ Avoids race conditions

### ✔ Disadvantages

✘ Need manual implementation

### ✔ Code

```js
const c = new AbortController();
fetch(url, { signal: c.signal });
c.abort();
console.log("Cancelled");
```
### ✔ Output

```
Cancelled
```
---

# **24. Crypto API**

### ✔ What

Generates secure random values.

### ✔ Why

Passwords, tokens, encryption.

### ✔ How

`crypto.getRandomValues()`

### ✔ Advantages

✔ Very secure

### ✔ Disadvantages

✘ No control of randomness

### ✔ Code

```js
console.log(crypto.getRandomValues(new Uint32Array(1)));
```

---

# **25. URL API**

### ✔ What

Helps parse & construct URLs.

### ✔ Why

To manage params easily.

### ✔ How

`new URL("https://site.com?x=1")`

### ✔ Advantages

✔ Built-in methods
✔ Handles URL encoding

### ✔ Disadvantages

✘ Must provide full URL

### ✔ Code

```js
const url = new URL("https://site.com?age=20");
console.log(url.searchParams.get("age"));
```

### ✔ Output

```
20
```

---


