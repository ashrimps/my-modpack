// 自動発動（装備チェック）
PlayerEvents.tick(event => {
  if (event.server.tickCount % 40 !== 0) return; // 2秒ごと

  const player = event.player;
  const chest = player.getEquipment('chest');
  const name = player.username;
  if (!chest || chest.id !== 'minecraft:diamond_chestplate') return;

  // 周囲6ブロック以内の敵にスローⅠ（3秒間）をコマンドで付与
  event.server.runCommandSilent(`execute at ${name} run effect give @e[distance=0..10, type=!minecraft:player] minecraft:levitation 1`);
});

PlayerEvents.tick(event => {
  if (event.server.tickCount % 20 !== 0) return; //1秒ごと

  const player = event.player;
  const mainhand = player.getEquipment('mainhand');
  const name = player.username;
  if (!mainhand || mainhand.id !== 'cataclysm_spellbooks:coral_staff') return;

  // 周囲6ブロック以内の敵にスローⅠ（3秒間）をコマンドで付与
  event.server.runCommandSilent(`kill @e[type=minecraft:phantom]`);
});


EntityEvents.hurt(event => {
  const entity = event.entity;    //攻撃を受けた
  //const pos = event.source.sourcePositionRaw(); //攻撃をした

  // プレイヤーだけ対象にする
  if (!entity.isPlayer()) return;
  let uuid = entity.getUuid().toString()
    
  const playerName = entity.username;
  // UUID指定でコマンドを実行する場合
  event.server.runCommandSilent(`effect give ${uuid} minecraft:levitation 2`);
});
