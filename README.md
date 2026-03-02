Note Taker Browser Extension
A lightweight Chrome browser extension that allows users to take, view, and manage notes directly from the browser popup. Notes are persisted across sessions using LocalStorage, ensuring your data stays available every time you open the extension.

**Features**
Create, edit, and delete notes in a simple popup interface.
Persistent storage using LocalStorage (JSON.stringify() / JSON.parse()).
Dynamic DOM rendering for real-time updates.
Minimal, clean UI designed for fast note capture.
Works entirely offline — no backend required.

**Technologies Used**

JavaScript (ES6+) — event-driven programming, DOM manipulation, state management
HTML & CSS — structured popup layout, responsive design
Browser APIs — LocalStorage for persistence, Chrome extension manifest (Manifest V3)

**Installation / Testing**

Download or clone the repository.
Open Chrome and navigate to chrome://extensions/.
Enable Developer mode.
Click Load unpacked and select the note-taker-extension/ folder.
Click the extension icon in your browser to open the popup and start taking notes.

**What I Learned**

How to structure a web app as a browser extension.
Managing persistent state using LocalStorage.
Dynamic DOM rendering based on application state.
Applying user-centered design principles to improve usability.
Event-driven logic for interactive web components.

**Future Improvements**

Add note search and categorization.
Implement syncing across devices using browser storage APIs or cloud integration.
Add export/import functionality for notes.
