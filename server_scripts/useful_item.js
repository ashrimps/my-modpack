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



//次元バックパック削除
event.remove({output: '#l2backpack:dimensional_storages'})
//貯蔵ユニット（ドロワー）
event.remove({output: 'l2backpack:drawer'})
event.shapeless(
Item.of('l2backpack:drawer', '{backpack_pickup_config:{StackingFactor:8}}'),
  [
    'minecraft:chest'
  ]
)
//エンダードロワー
event.remove({output: 'l2backpack:ender_drawer'})
event.shapeless(
Item.of('l2backpack:ender_drawer'),
  [
    'minecraft:ender_pearl',
    'l2backpack:drawer'
  ]
)
//エンチャ複製本
event.remove({output: 'l2hostility:book_of_reprint'})
event.shaped(
  Item.of('l2hostility:book_of_reprint'),
  [
    'AAA',
    'ABA',
    'AAA'
  ],
  {
    A: 'irons_spellbooks:dragonskin',
    B: 'minecraft:book'
  }
)
//エンダーバックパック
event.remove({output: 'l2backpack:ender_backpack'})
event.shaped(
  Item.of('l2backpack:ender_backpack'),
  [
    'ACA',
    'DBD',
    'EEE'
  ],
  {
    A: 'minecraft:gold_nugget',
    B: 'minecraft:ender_chest',
    C: 'irons_spellbooks:dragonskin',
    D: 'minecraft:iron_ingot',
    E: '#minecraft:wool'
  }
)
//アーマースワップ
event.remove({output: 'l2backpack:armor_swap'})
event.shaped(
  Item.of('l2backpack:armor_swap'),
  [
    ' B ',
    'BAB',
    ' B '
  ],
  {
    A: '#forge:armors/helmets',
    B: 'minecraft:leather'
  }
)
//火炎耐性リング
event.remove({output: 'irons_spellbooks:fireward_ring'})
event.shaped(
  Item.of('irons_spellbooks:fireward_ring'),
  [
    'BC ',
    'CAC',
    ' C '
  ],
  {
    A: 'irons_spellbooks:arcane_salvage',
    B: 'bosses_of_mass_destruction:blazing_eye',
    C: 'irons_spellbooks:cinder_essence'
  }
)
//毒耐性リング
event.remove({output: 'irons_spellbooks:poisonward_ring'})
event.shaped(
  Item.of('irons_spellbooks:poisonward_ring'),
  [
    'B  ',
    ' A ',
    '   '
  ],
  {
    A: 'irons_spellbooks:arcane_salvage',
    B: 'alexscaves:block_of_uranium'
  }
)
//銀リング
event.shaped(
Item.of('irons_spellbooks:silver_ring'),
  [
    ' A ',
    'A A',
    ' A '
  ],
  {
    A: 'minecraft:iron_ingot'
  }
)
//マナリング
event.remove({output: 'irons_spellbooks:mana_ring'})
event.shaped(
Item.of('irons_spellbooks:mana_ring'),
  [
    'CA ',
    'ABA',
    ' A '
  ],
  {
    A: 'irons_spellbooks:arcane_ingot',
    B: 'irons_spellbooks:silver_ring',
    C: 'minecraft:diamond'
  }
)
//金ニンジン亜種
event.remove({output: 'l2complements:totemic_carrot'})
event.shaped(
Item.of('l2complements:totemic_carrot'),
  [
    'CAC',
    'ABA',
    'CAC'
  ],
  {
    A: 'minecraft:gold_nugget',
    B: 'minecraft:carrot',
    C: 'minecraft:sugar'
  }
)
//上位金ニンジン亜種
event.remove({output: 'l2complements:enchanted_totemic_carrot'})
event.recipes.create.filling(
  'l2complements:enchanted_totemic_carrot', 
  [Fluid.of("create:potion", 250, {Potion:"minecraft:swiftness"}), 'l2complements:totemic_carrot']
)
//フック用燃料タンク小
event.remove({output: 'create_sa:small_fueling_tank'})
event.shaped(
Item.of('create_sa:small_fueling_tank'),
  [
    'CAC',
    'ABA',
    'CAC'
  ],
  {
    A: 'create:sturdy_sheet',
    B: 'create:fluid_tank',
    C: 'minecraft:blackstone'
  }
)
//フック用燃料タンク中
event.remove({output: 'create_sa:medium_fueling_tank'})
event.shaped(
Item.of('create_sa:medium_fueling_tank'),
  [
    'CAC',
    'ABA',
    'CAC'
  ],
  {
    A: 'create:sturdy_sheet',
    B: 'create_sa:small_fueling_tank',
    C: 'minecraft:blackstone'
  }
)
//フック用燃料タンク大
event.remove({output: 'create_sa:large_fueling_tank'})
event.shaped(
Item.of('create_sa:large_fueling_tank'),
  [
    'CAC',
    'ABA',
    'CAC'
  ],
  {
    A: 'create:sturdy_sheet',
    B: 'create_sa:medium_fueling_tank',
    C: 'minecraft:blackstone'
  }
)
//治癒の指輪
event.remove({output: 'l2hostility:ring_of_healing'})
event.shaped(
Item.of('l2hostility:ring_of_healing'),
  [
    ' AB',
    'A A',
    ' A '
  ],
  {
    A: 'create:polished_rose_quartz',
    B: 'alexscaves:sweet_tooth'
  }
)
//拘束の指輪
event.remove({output: 'l2hostility:ring_of_incarceration'})
event.shaped(
Item.of('l2hostility:ring_of_incarceration'),
  [
    ' AB',
    'A A',
    ' A '
  ],
  {
    A: 'alexscaves:scrap_metal',
    B: 'minecraft:netherite_ingot'
  }
)
//生命の指輪
event.remove({output: 'l2hostility:ring_of_life'})
event.shaped(
Item.of('l2hostility:ring_of_life'),
  [
    ' AB',
    'A A',
    ' A '
  ],
  {
    A: 'minecraft:amethyst_shard',
    B: 'create:precision_mechanism'
  }
)
})