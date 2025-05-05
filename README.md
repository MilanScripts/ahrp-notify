
# 🔔 ahrp-notify – FiveM Notification System

![Notification Example](https://milanscripts.vercel.app/notify.png?height=300&width=500)

**ahrp-notify** is a lightweight and customizable notification system for FiveM. It supports both client-side and server-side exports for sending modern and visually styled notifications to players.

---

## ✅ Features

- ✨ Stylish and modern UI
- 🎯 Send notifications from both client and server
- ⚙️ Configurable types: `success`, `error`, `info`, `warning`
- ⏱ Optional duration control (in milliseconds)
- 🧩 Easy to integrate with any existing resource

---

## 📦 Installation

1. Download or clone this repository into your FiveM `resources` folder.
2. Add the following to your `server.cfg`:

```
ensure ahrp-notify
```

---

## 🔧 Usage

### # CLIENT

```lua
exports['ahrp-notify']:notify(
    type,       -- "success", "error", "info", "warning"
    title,      -- Notification title
    message,    -- The content of the notification
    duration    -- (Optional) How long it should last in milliseconds
)
```

#### ✅ Example:

```lua
exports['ahrp-notify']:notify("success", "Operation Complete", "Your changes were saved successfully!", 5000)
```

---

### # SERVER

```lua
exports['ahrp-notify']:notify(
    "src/playerId[,playerId2,...]",  -- Target(s): one or more player IDs in the format "src/ID"
    type,                            -- "success", "error", "info", "warning"
    title,                           -- Notification title
    message,                         -- The content of the notification
    duration                         -- (Optional) How long it should last in milliseconds
)
```

#### ✅ Example:

```lua
exports['ahrp-notify']:notify("src/1", "error", "Action Failed", "You do not have permission to do that.", 4000)
```

---

## 📸 Preview

![Notification Preview](https://milanscripts.vercel.app/notify.png?height=300&width=500)

---

## 📃 License
MIT License

Copyright (c) 2025 MilanScripts

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
---

## 💬 Support

For bugs, feature requests, or feedback, please open an issue or contact via GitHub.
