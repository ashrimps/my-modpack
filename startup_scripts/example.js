// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

// kubejs/startup_scripts/my_items.js
StartupEvents.registry('item', event => {
  event.create('common_magic_star') // ID = kubejs:mystic_gem
    .displayName('§8魔法の星:灰') // アイテム名（色コード可）
    .maxStackSize(64) // スタック数
})

StartupEvents.registry('item', event => {
  event.create('common_rock') // ID = kubejs:mystic_gem
    .displayName('§8灰の魔石') // アイテム名（色コード可）
    .maxStackSize(64) // スタック数
})
StartupEvents.registry('item', event => {
  event.create('uncommon_rock') // ID = kubejs:mystic_gem
    .displayName('§2緑の魔石') // アイテム名（色コード可）
    .maxStackSize(64) // スタック数
})
StartupEvents.registry('item', event => {
  event.create('rare_rock') // ID = kubejs:mystic_gem
    .displayName('§1青の魔石') // アイテム名（色コード可）
    .maxStackSize(64) // スタック数
})
StartupEvents.registry('item', event => {
  event.create('epic_rock') // ID = kubejs:mystic_gem
    .displayName('§5紫の魔石') // アイテム名（色コード可）
    .maxStackSize(64) // スタック数
})
StartupEvents.registry('item', event => {
  event.create('legend_rock') // ID = kubejs:mystic_gem
    .displayName('§6金の魔石') // アイテム名（色コード可）
    .maxStackSize(64) // スタック数
})