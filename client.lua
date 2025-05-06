RegisterNetEvent('milanscripts:client:notify', function(type, title, message, duration)
    if not type or not title or not message then return end

    duration = duration or 5000

    SendNUIMessage({
        action = 'notify',
        type = type,
        title = title,
        message = message,
        duration = duration
    })
end)

local function Notify(type, title, message, duration)
    if not type or not title or not message then return end

    duration = duration or 5000

    SendNUIMessage({
        action = 'notify',
        type = type,
        title = title,
        message = message,
        duration = duration
    })
end

exports('notify', Notify)

--[[
    -- Success notification
    exports['ahrp-notify']:notify('success', 'Mission Complete', 'You earned $5,000!', 5000)
    
    -- Error notification
    exports['ahrp-notify']:notify('error', 'Mission Failed', 'Try again later', 5000)
    
    -- Info notification
    exports['ahrp-notify']:notify('info', 'New Mission', 'Check your map', 5000)
    
    -- Warning notification
    exports['ahrp-notify']:notify('warning', 'Low Health', 'Find medical attention', 5000)
]]
