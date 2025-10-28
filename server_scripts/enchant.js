ServerEvents.recipes(event => {
event.shaped(
  Item.of('minecraft:stone', 3),
  [
    'A B',
    ' C ',
    'B A'
  ],
  {
    A: 'minecraft:andesite',
    B: 'minecraft:diorite',
    C: 'minecraft:granite'
  }
)


//採掘エンチャ
event.remove({output: Item.of('minecraft:enchanted_book').enchant('l2complements:ender_reach', 1)})
event.shapeless(
Item.of('minecraft:enchanted_book').enchant('l2complements:ender_reach', 1),
  [
    'minecraft:book',
    '#minecraft:pickaxes',
    'minecraft:coal_block'
  ]
)
event.shapeless(
Item.of('minecraft:enchanted_book').enchant('l2complements:vien_mining', 1),
  [
    'minecraft:book',
    '#minecraft:pickaxes',
    'minecraft:copper_block'
  ]
)
event.shapeless(
Item.of('minecraft:enchanted_book').enchant('l2complements:cubic_eater', 1),
  [
    'minecraft:book',
    '#minecraft:pickaxes',
    'minecraft:gold_block'
  ]
)
event.shapeless(
Item.of('minecraft:enchanted_book').enchant('l2complements:drill_digging', 1),
  [
    'minecraft:book',
    '#minecraft:pickaxes',
    'create:zinc_block'
  ]
)
event.shapeless(
Item.of('minecraft:enchanted_book').enchant('l2complements:plane_digging', 1),
  [
    'minecraft:book',
    '#minecraft:pickaxes',
    'minecraft:redstone_block'
  ]
)
event.shapeless(
Item.of('minecraft:enchanted_book').enchant('l2complements:cubic_digging', 1),
  [
    'minecraft:book',
    '#minecraft:pickaxes',
    'minecraft:iron_block'
  ]
)
event.shapeless(
Item.of('minecraft:enchanted_book').enchant('l2complements:plane_eater', 1),
  [
    'minecraft:book',
    '#minecraft:pickaxes',
    'create:brass_block'
  ]
)
//火炎耐性
event.shaped(
Item.of('minecraft:enchanted_book').enchant('l2complements:fire_reject', 1),
  [
    ' A ',
    'BCB',
    ' B '
  ],
  {
    A: 'bosses_of_mass_destruction:blazing_eye',
    B: 'minecraft:blaze_powder',
    C: 'minecraft:book'
  }
)
})