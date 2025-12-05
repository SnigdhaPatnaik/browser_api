Here are **many commonly asked Browser APIs** with **super-short, interview-friendly explanations** + **tiny examples** so you can easily remember them.

---

# ✅ **1. DOM API**

**What:** Lets you access and modify HTML elements.
**Why:** Update UI dynamically.
**Example:**

```js
document.getElementById("title").textContent = "Hello!";
```

---

# ✅ **2. Fetch API**

**What:** Makes HTTP requests.
**Why:** Get data from backend.
**Example:**

```js
fetch("/api/users").then(res => res.json()).then(data => console.log(data));
```

---

# ✅ **3. LocalStorage API**

**What:** Stores small data permanently in browser.
**Why:** Save user settings.
**Example:**

```js
localStorage.setItem("theme", "dark");
```

---

# ✅ **4. SessionStorage API**

**What:** Stores data only for that tab.
**Why:** Temporary data like step-by-step form.
**Example:**

```js
sessionStorage.setItem("otp", "1234");
```

---

# ✅ **5. Cookie API (document.cookie)**

**What:** Browser stores key–value pairs, often for authentication.
**Example:**

```js
document.cookie = "token=abc123; max-age=3600";
```

---

# ✅ **6. Navigator API**

**What:** Gives system info like browser, network, device.
**Example:**

```js
console.log(navigator.userAgent);
```

---

# ✅ **7. Geolocation API**

**What:** Gets user location (with permission).
**Example:**

```js
navigator.geolocation.getCurrentPosition(pos => console.log(pos.coords));
```

---

# ✅ **8. Clipboard API**

**What:** Copy & paste programmatically.
**Example:**

```js
navigator.clipboard.writeText("Hello!");
```

---

# ✅ **9. Notification API**

**What:** Show desktop notifications.
**Example:**

```js
new Notification("Download Completed!");
```

---

# ✅ **10. Web Storage API (local + session)**

Already covered above.

---

# ✅ **11. History API**

**What:** Control browser navigation.
**Why:** Used in SPA routing (React Router).
**Example:**

```js
history.pushState({}, "", "/dashboard");
```

---

# ✅ **12. Intersection Observer API**

**What:** Detect when an element enters viewport.
**Why:** Lazy loading, infinite scroll.
**Example:**

```js
new IntersectionObserver((entries)=> console.log(entries));
```

---

# ✅ **13. Mutation Observer API**

**What:** Watches DOM changes.
**Why:** Detect dynamically changed UI.
**Example:**

```js
new MutationObserver(m => console.log(m)).observe(document.body, {childList:true});
```

---

# ✅ **14. Web Workers API**

**What:** Run JS in background thread.
**Why:** Heavy tasks without blocking UI.
**Example:**

```js
const worker = new Worker("worker.js");
```

---

# ✅ **15. Canvas API**

**What:** Draw graphics, charts, games.
**Example:**

```js
const ctx = canvas.getContext("2d");
ctx.fillRect(10, 10, 100, 100);
```

---

# ✅ **16. Drag and Drop API**

**What:** Native drag-drop support.
**Example:**

```js
element.ondragstart = (e) => console.log("Dragging...");
```

---

# ✅ **17. Fullscreen API**

**What:** Make element fullscreen.
**Example:**

```js
document.documentElement.requestFullscreen();
```

---

# ✅ **18. Web Speech API**

**What:** Speech-to-text & text-to-speech.
**Example:**

```js
speechSynthesis.speak(new SpeechSynthesisUtterance("Hello"));
```

---

# ✅ **19. WebRTC API**

**What:** Real-time audio/video chat.
**Example:**
Used for video calling apps.

---

# ✅ **20. Battery Status API**

**What:** Get device battery details.
**Example:**

```js
navigator.getBattery().then(b => console.log(b.level));
```

---

# ✅ **21. Screen API**

**What:** Screen dimensions, pixel ratio.
**Example:**

```js
console.log(screen.width, screen.height);
```

---

# ✅ **22. Crypto API**

**What:** Generate secure random values, hashing.
**Example:**

```js
crypto.getRandomValues(new Uint32Array(1));
```

---

# ✅ **23. URL API**

**What:** Parse or manipulate URLs.
**Example:**

```js
const u = new URL("https://google.com?q=hello");
```

---

# ✅ **24. BroadcastChannel API**

**What:** Communicate between browser tabs.
**Example:**

```js
new BroadcastChannel("chat").postMessage("Hello");
```

---

# ✅ **25. WebSocket API**

**What:** Live real-time communication.
**Example:**

```js
new WebSocket("ws://localhost:8080");
```



