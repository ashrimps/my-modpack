EntityEvents.spawned(event =>{
    let players = event.server.players
    if(event.entity.type.toString() == "minecraft:zombie"){
        for (let player of players) {
            if (player.stages.has("stage1")) {
                console.log(`${player.name} はネザー解放ステージを持っています`);
                event.server.runCommandSilent(`effect give @a minecraft:levitation 1`);
            }
        }
    }
})