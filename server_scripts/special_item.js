// kubejs/server_scripts/retaliate_any_armor.js
/*
EntityEvents.hurt(event => {
  const entity = event.entity;        // ダメージを受けた側
  const source = event.source.entity; // 攻撃者
  if (!entity.isPlayer() || !source) return;

  const slots = ['head', 'chest', 'legs', 'feet'];
  for (const slot of slots) {
    const item = entity.getEquipmentItem(slot);
    if (!item || !item.nbt || !item.nbt.display || !item.nbt.display.Name) continue;

    try {
      const name = JSON.parse(item.nbt.display.Name).text;
      if (name === "力の鎧") {

        // 攻撃者が生きている場合のみ
        if (source.isLiving()) {
          // ダメージを与える
          source.hurt(DamageSource.apply, 5); // 💥 これが今の正解
          
          // 効果音
          entity.level.playSound(null, entity.x, entity.y, entity.z, 'minecraft:thorns.hit', 'players', 1.0, 1.0);
        }

        break;
      }
    } catch (e) {}
  }
});*/


// Forge 1.20.1 用
// ブロックを壊したらダメージを受けるスクリプト

BlockEvents.broken(event => {
  const player = event.player;
  const block = event.block;
  const name = player.username;

  // 3. generic ダメージを適用（攻撃者なし）
  event.server.runCommandSilent(`effect give ${name} minecraft:levitation 2`);
});

EntityEvents.spawned(event => {
  //event.entity.setItemSlot(5, 'minecraft:diamond_helmet')
  // 1. DamageSources クラスをロード
  const DamageSources = Java.loadClass('net.minecraft.world.damagesource.DamageSources');

  //  2. ワールド（レベル）から DamageSources を作成
  //const sources = new DamageSources(event.entity.level);

  // 3. generic ダメージを適用（攻撃者なし）
  //event.entity.hurt(sources.generic, 5.0);
})
