ServerEvents.recipes(event => {

event.remove({output:Item.of('legendary_monsters:soul_great_sword', '{Damage:0}')})
event.shaped(
  Item.of('legendary_monsters:soul_great_sword', '{Damage:0,RepairCost:3}').enchant('l2complements:cursed_blade', 3),
  [
    ' A ',
    ' B ',
    ' C '
  ],
  {
    A: 'minecraft:obsidian',
    B: 'legendary_monsters:corrupted_soul',
    C: 'minecraft:diamond_sword'
  }
)
})