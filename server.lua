local function Notify(target, type, title, message, duration)
    if not target or not type or not title or not message then return end

    duration = duration or 5000

    if type(target) == "string" and target:sub(1, 4) == "src/" then
        local ids = target:sub(5)

        for id in string.gmatch(ids, '([^,]+)') do
            local playerId = tonumber(id)
            if playerId then
                TriggerClientEvent('milanscripts:notify:client:notify', playerId, type, title, message, duration)
            end
        end
    else
        print("[milanscripts notify] Invalid target format. Use 'src/playerId' or 'src/id1,id2,...'")
    end
end

exports('notify', Notify)
