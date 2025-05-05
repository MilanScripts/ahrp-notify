
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

This project is licensed under the MIT License. Feel free to use and modify it in your own servers!

---

## 💬 Support

For bugs, feature requests, or feedback, please open an issue or contact via GitHub.
