/* 
 * ServerEvents.recipes(callback) is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the 
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing". 
*/
// Listen for the "recipes" server event.

const diamond = 'minecraft:diamond';
const copper = 'minecraft:copper_ingot';
const iron = 'minecraft:iron_ingot';
const gold = 'minecraft:gold_ingot';
const netherite = 'minecraft:netherite_ingot';
const amethyst = 'minecraft:amethyst_shard';

console.log('Hello! The recipe event has fired!');
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
event.shapeless(
Item.of('minecraft:dirt', '{AttributeModifiers:[{AttributeName:"attributeslib:arrow_velocity", Name:"armsr", Slot:"offhand", Operation:1.0, Amount:10, UUID:[I;123141,456226,6280,2415916]}]}'),
  [
    'minecraft:dirt'
  ]
)
event.shapeless(
Item.of('minecraft:iron_helmet', '{AttributeModifiers:[{AttributeName:"puffish_attributes:resistance_shred", Name:"armosr", Slot:"head", Operation:1.0, Amount:0.6, UUID:[I;123141,456226,6280,2415916]}]}'),
  [
    'minecraft:iron_helmet'
  ]
)
event.shapeless(
Item.of('minecraft:leather_helmet', '{AttributeModifiers:[{AttributeName:"puffish_attributes:resistance", Name:"armors", Slot:"head", Operation:1.0, Amount:-0.5, UUID:[I;23141,45626,6280,2415916]}]}'),
  [
    'minecraft:leather_helmet'
  ]
)






//------------------------------------------------------------------------
//サムライ装備
//鉄
event.remove({output: 'descendants_weaponry:iron_samurai_helmet'})
event.shaped(
    Item.of('descendants_weaponry:iron_samurai_helmet', 1),
    [
        'AAA',
        'ABA',
    ],
    {
        A: iron,
        B: 'minecraft:arrow'
    }
)
event.remove({output: 'descendants_weaponry:iron_samurai_chestplate'})
event.shaped(
    Item.of('descendants_weaponry:iron_samurai_chestplate', 1),
    [
        'ABA',
        'AAA',
        'AAA'
    ],
    {
        A: iron,
        B: 'minecraft:arrow'
    }
)
event.remove({output: 'descendants_weaponry:iron_samurai_leggings'})
event.shaped(
    Item.of('descendants_weaponry:iron_samurai_leggings', 1),
    [
        'AAA',
        'ABA',
        'A A'
    ],
    {
        A: iron,
        B: 'minecraft:arrow'
    }
)
event.remove({output: 'descendants_weaponry:iron_samurai_boots'})
event.shaped(
    Item.of('descendants_weaponry:iron_samurai_boots', 1),
    [
        'ABA',
        'A A',
    ],
    {
        A: iron,
        B: 'minecraft:arrow'
    }
)
//金
event.remove({output: 'descendants_weaponry:golden_samurai_helmet'})
event.shaped(
    Item.of('descendants_weaponry:golden_samurai_helmet', 1),
    [
        'AAA',
        'ABA',
    ],
    {
        A: gold,
        B: 'minecraft:arrow'
    }
)
event.remove({output: 'descendants_weaponry:golden_samurai_chestplate'})
event.shaped(
    Item.of('descendants_weaponry:golden_samurai_chestplate', 1),
    [
        'ABA',
        'AAA',
        'AAA'
    ],
    {
        A: gold,
        B: 'minecraft:arrow'
    }
)
event.remove({output: 'descendants_weaponry:golden_samurai_leggings'})
event.shaped(
    Item.of('descendants_weaponry:golden_samurai_leggings', 1),
    [
        'AAA',
        'ABA',
        'A A'
    ],
    {
        A: gold,
        B: 'minecraft:arrow'
    }
)
event.remove({output: 'descendants_weaponry:golden_samurai_boots'})
event.shaped(
    Item.of('descendants_weaponry:golden_samurai_boots', 1),
    [
        'ABA',
        'A A'
    ],
    {
        A: gold,
        B: 'minecraft:arrow'
    }
)
//ダイヤ
event.remove({output: 'descendants_weaponry:diamond_samurai_helmet'})
event.shaped(
    Item.of('descendants_weaponry:diamond_samurai_helmet', 1),
    [
        'AAA',
        'ABA'
    ],
    {
        A: diamond,
        B: 'minecraft:arrow'
    }
)
event.remove({output: 'descendants_weaponry:diamond_samurai_chestplate'})
event.shaped(
    Item.of('descendants_weaponry:diamond_samurai_chestplate', 1),
    [
        'ABA',
        'AAA',
        'AAA'
    ],
    {
        A: diamond,
        B: 'minecraft:arrow'
    }
)
event.remove({output: 'descendants_weaponry:diamond_samurai_leggings'})
event.shaped(
    Item.of('descendants_weaponry:diamond_samurai_leggings', 1),
    [
        'AAA',
        'ABA',
        'A A'
    ],
    {
        A: diamond,
        B: 'minecraft:arrow'
    }
)
event.remove({output: 'descendants_weaponry:diamond_samurai_boots'})
event.shaped(
    Item.of('descendants_weaponry:diamond_samurai_boots', 1),
    [
        'ABA',
        'A A'
    ],
    {
        A: diamond,
        B: 'minecraft:arrow'
    }
)






//ヘビー装備
//鉄
event.remove({output: 'descendants_weaponry:iron_heavy_helmet'})
event.shaped(
    Item.of('descendants_weaponry:iron_heavy_helmet', 1),
    [
        'AAA',
        'ABA',
    ],
    {
        A: iron,
        B: '#minecraft:swords'
    }
)
event.remove({output: 'descendants_weaponry:iron_heavy_chestplate'})
event.shaped(
    Item.of('descendants_weaponry:iron_heavy_chestplate', 1),
    [
        'ABA',
        'AAA',
        'AAA'
    ],
    {
        A: iron,
        B: '#minecraft:swords'
    }
)
event.remove({output: 'descendants_weaponry:iron_heavy_leggings'})
event.shaped(
    Item.of('descendants_weaponry:iron_heavy_leggings', 1),
    [
        'AAA',
        'ABA',
        'A A'
    ],
    {
        A: iron,
        B: '#minecraft:swords'
    }
)
event.remove({output: 'descendants_weaponry:iron_heavy_boots'})
event.shaped(
    Item.of('descendants_weaponry:iron_heavy_boots', 1),
    [
        'ABA',
        'A A',
    ],
    {
        A: iron,
        B: '#minecraft:swords'
    }
)
//金
event.remove({output: 'descendants_weaponry:golden_heavy_helmet'})
event.shaped(
    Item.of('descendants_weaponry:golden_heavy_helmet', 1),
    [
        'AAA',
        'ABA',
    ],
    {
        A: gold,
        B: '#minecraft:swords'
    }
)
event.remove({output: 'descendants_weaponry:golden_heavy_chestplate'})
event.shaped(
    Item.of('descendants_weaponry:golden_heavy_chestplate', 1),
    [
        'ABA',
        'AAA',
        'AAA'
    ],
    {
        A: gold,
        B: '#minecraft:swords'
    }
)
event.remove({output: 'descendants_weaponry:golden_heavy_leggings'})
event.shaped(
    Item.of('descendants_weaponry:golden_heavy_leggings', 1),
    [
        'AAA',
        'ABA',
        'A A'
    ],
    {
        A: gold,
        B: '#minecraft:swords'
    }
)
event.remove({output: 'descendants_weaponry:golden_heavy_boots'})
event.shaped(
    Item.of('descendants_weaponry:golden_heavy_boots', 1),
    [
        'ABA',
        'A A'
    ],
    {
        A: gold,
        B: '#minecraft:swords'
    }
)
//ダイヤ
event.remove({output: 'descendants_weaponry:diamond_heavy_helmet'})
event.shaped(
    Item.of('descendants_weaponry:diamond_heavy_helmet', 1),
    [
        'AAA',
        'ABA'
    ],
    {
        A: diamond,
        B: '#minecraft:swords'
    }
)
event.remove({output: 'descendants_weaponry:diamond_heavy_chestplate'})
event.shaped(
    Item.of('descendants_weaponry:diamond_heavy_chestplate', 1),
    [
        'ABA',
        'AAA',
        'AAA'
    ],
    {
        A: diamond,
        B: '#minecraft:swords'
    }
)
event.remove({output: 'descendants_weaponry:diamond_heavy_leggings'})
event.shaped(
    Item.of('descendants_weaponry:diamond_heavy_leggings', 1),
    [
        'AAA',
        'ABA',
        'A A'
    ],
    {
        A: diamond,
        B: '#minecraft:swords'
    }
)
event.remove({output: 'descendants_weaponry:diamond_heavy_boots'})
event.shaped(
    Item.of('descendants_weaponry:diamond_heavy_boots', 1),
    [
        'ABA',
        'A A'
    ],
    {
        A: diamond,
        B: '#minecraft:swords'
    }
)

//ネザライト
event.remove({output: 'descendants_weaponry:netherite_heavy_helmet'})
event.smithing(
'descendants_weaponry:netherite_heavy_helmet',
'minecraft:netherite_upgrade_smithing_template',
'descendants_weaponry:diamond_heavy_helmet',
'minecraft:netherite_ingot'
)
event.remove({output: 'descendants_weaponry:netherite_heavy_chestplate'})
event.smithing(
'descendants_weaponry:netherite_heavy_chestplate',
'minecraft:netherite_upgrade_smithing_template',
'descendants_weaponry:diamond_heavy_chestplate',
'minecraft:netherite_ingot'
)
event.remove({output: 'descendants_weaponry:netherite_heavy_leggings'})
event.smithing(
'descendants_weaponry:netherite_heavy_leggings',
'minecraft:netherite_upgrade_smithing_template',
'descendants_weaponry:diamond_heavy_leggings',
'minecraft:netherite_ingot'
)
event.remove({output: 'descendants_weaponry:netherite_heavy_boots'})
event.smithing(
'descendants_weaponry:netherite_heavy_boots',
'minecraft:netherite_upgrade_smithing_template',
'descendants_weaponry:diamond_heavy_boots',
'minecraft:netherite_ingot'
)





//---------------------------------------------------------------
//---------------------------------------------------------------
//魔法
//かぼちゃ装備
event.remove({output:'irons_spellbooks:pumpkin_helmet'})
event.shaped(
Item.of('irons_spellbooks:pumpkin_helmet'),
  [
    ' B ',
    'BAB'
  ],
  {
    A: 'minecraft:diamond_helmet',
    B: 'irons_spellbooks:magic_cloth'
  }
)
event.remove({output:'irons_spellbooks:pumpkin_chestplate'})
event.shaped(
Item.of('irons_spellbooks:pumpkin_chestplate'),
  [
    ' B ',
    'BAB'
  ],
  {
    A: 'minecraft:diamond_chestplate',
    B: 'irons_spellbooks:magic_cloth'
  }
)
event.remove({output:'irons_spellbooks:pumpkin_leggings'})
event.shaped(
Item.of('irons_spellbooks:pumpkin_leggings'),
  [
    ' B ',
    'BAB'
  ],
  {
    A: 'minecraft:diamond_leggings',
    B: 'irons_spellbooks:magic_cloth'
  }
)
event.remove({output:'irons_spellbooks:pumpkin_boots'})
event.shaped(
Item.of('irons_spellbooks:pumpkin_boots'),
  [
    ' B ',
    'BAB'
  ],
  {
    A: 'minecraft:diamond_boots',
    B: 'irons_spellbooks:magic_cloth'
  }
)



//---------------------------------------------------------------------------
//ネザライト魔法
event.remove({output: 'irons_spellbooks:netherite_mage_helmet'})
event.smithing(
    'irons_spellbooks:netherite_mage_helmet',
    'minecraft:netherite_upgrade_smithing_template',
    'irons_spellbooks:pumpkin_helmet',
    'minecraft:netherite_ingot'
)
event.remove({output: 'irons_spellbooks:netherite_mage_chestplate'})
event.smithing(
    'irons_spellbooks:netherite_mage_chestplate',
    'minecraft:netherite_upgrade_smithing_template',
    'irons_spellbooks:pumpkin_chestplate',
    'minecraft:netherite_ingot'
)
event.remove({output: 'irons_spellbooks:netherite_mage_leggings'})
event.smithing(
    'irons_spellbooks:netherite_mage_leggings',
    'minecraft:netherite_upgrade_smithing_template',
    'irons_spellbooks:pumpkin_leggings',
    'minecraft:netherite_ingot'
)
event.remove({output: 'irons_spellbooks:netherite_mage_leggings'})
event.smithing(
    'irons_spellbooks:netherite_mage_boots',
    'minecraft:netherite_upgrade_smithing_template',
    'irons_spellbooks:pumpkin_boots',
    'minecraft:netherite_ingot'
)

//------------------------------------------------------------------------
//スカルキウム
event.remove({output: 'l2complements:sculkium_helmet'})
event.smithing(
    'l2complements:sculkium_helmet',
    'phantasm:void_crystal_shard',
    'minecraft:diamond_helmet',
    'l2complements:sculkium_ingot'
)
event.remove({output: 'l2complements:sculkium_chestplate'})
event.smithing(
    'l2complements:sculkium_chestplate',
    'phantasm:void_crystal_shard',
    'minecraft:diamond_chestplate',
    'l2complements:sculkium_ingot'
)
event.remove({output: 'l2complements:sculkium_leggings'})
event.smithing(
    'l2complements:sculkium_leggings',
    'phantasm:void_crystal_shard',
    'minecraft:diamond_leggings',
    'l2complements:sculkium_ingot'
)
event.remove({output: 'l2complements:sculkium_boots'})
event.smithing(
    'l2complements:sculkium_boots',
    'phantasm:void_crystal_shard',
    'minecraft:diamond_boots',
    'l2complements:sculkium_ingot'
)




//-------------------------------------------------
//スポナー装備
event.remove({output: 'dungeonnowloading:spawner_helmet'})
event.smithing(
    'dungeonnowloading:spawner_helmet',
    'dungeonnowloading:spawner_blade',
    'minecraft:diamond_helmet',
    'dungeonnowloading:spawner_frame'
)
event.remove({output: 'dungeonnowloading:spawner_chestplate'})
event.smithing(
    'dungeonnowloading:spawner_chestplate',
    'dungeonnowloading:spawner_blade',
    'minecraft:diamond_chestplate',
    'dungeonnowloading:spawner_frame'
)
event.remove({output: 'dungeonnowloading:spawner_leggings'})
event.smithing(
    'dungeonnowloading:spawner_leggings',
    'dungeonnowloading:spawner_blade',
    'minecraft:diamond_leggings',
    'dungeonnowloading:spawner_frame'
)
event.remove({output: 'dungeonnowloading:spawner_boots'})
event.smithing(
    'dungeonnowloading:spawner_boots',
    'dungeonnowloading:spawner_blade',
    'minecraft:diamond_boots',
    'dungeonnowloading:spawner_frame'
)

//--------------------------------
//ジェットパック
event.remove({output: 'create_sa:andesite_jetpack_chestplate'})
event.remove({output: 'create_sa:copper_jetpack_chestplate'})


//----------------------------------------------------------
//エンド到達時点での魔法装備
event.smithing(
    Item.of('cataclysm_spellbooks:abyssal_warlock_mask', '{ISB_Spells:{data:[],maxSpells:1,mustEquip:1b,spellWheel:1b}}'),
    'phantasm:void_crystal_shard',
    'irons_spellbooks:netherite_mage_helmet',
    'irons_spellbooks:dragonskin'
)
event.smithing(
    Item.of('cataclysm_spellbooks:abyssal_warlock_chestplate', '{ISB_Spells:{data:[],maxSpells:1,mustEquip:1b,spellWheel:1b}}'),
    'phantasm:void_crystal_shard',
    'irons_spellbooks:netherite_mage_chestplate',
    'irons_spellbooks:dragonskin'
)
event.smithing(
    Item.of('cataclysm_spellbooks:abyssal_warlock_leggings'),
    'phantasm:void_crystal_shard',
    'irons_spellbooks:netherite_mage_leggings',
    'irons_spellbooks:dragonskin'
)
event.smithing(
    Item.of('cataclysm_spellbooks:abyssal_warlock_boots'),
    'phantasm:void_crystal_shard',
    'irons_spellbooks:netherite_mage_boots',
    'irons_spellbooks:dragonskin'
)
	event.recipes.create.sequenced_assembly([
		Item.of('create:precision_mechanism').withChance(130.0), // this is the item that will appear in JEI as the result
		Item.of('create:golden_sheet').withChance(8.0), // the rest of these items will be part of the scrap
		Item.of('create:andesite_alloy').withChance(8.0),
		Item.of('create:cogwheel').withChance(5.0),
		Item.of('create:shaft').withChance(2.0),
		Item.of('create:crushed_gold_ore').withChance(2.0),
		Item.of('2x minecraft:gold_nugget').withChance(2.0)
	], 'create:golden_sheet', [ // 'create:golden_sheet' is the input
		// the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
		// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'minecraft:iron_nugget'])
	]).transitionalItem('create:incomplete_precision_mechanism').loops(5) // set the transitional item and the number of loops
})
