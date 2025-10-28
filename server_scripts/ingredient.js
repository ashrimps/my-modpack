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





//エタニウム
event.recipes.create.mixing(
    'l2complements:eternium_ingot',
    ['phantasm:fallen_star','minecraft:lapis_lazuli','minecraft:iron_ingot']
)
//シュルカレート
event.remove({output: 'l2complements:shulkerate_ingot'})
event.recipes.create.mixing(
    'l2complements:shulkerate_ingot',
    ['phantasm:fallen_star','minecraft:shulker_shell','minecraft:iron_ingot']
)
//スカルキウム
event.remove({output:'l2complements:sculkium_ingot'})
event.recipes.create.mixing(
    'l2complements:sculkium_ingot',
    ['l2complements:warden_bone_shard','minecraft:copper_ingot','minecraft:echo_shard']
)
//空白のルーン
event.recipes.create.mixing(
    'irons_spellbooks:blank_rune',
    ['irons_spellbooks:arcane_ingot','minecraft:amethyst_shard','minecraft:gold_ingot']
)
//芽生えたアメジスト
	event.recipes.create.sequenced_assembly([
		'minecraft:budding_amethyst'
	], 'minecraft:amethyst_block', [
		event.recipes.createFilling('minecraft:amethyst_block', ['minecraft:amethyst_block', Fluid.of("create:potion", 250, {Potion:"minecraft:regeneration"})]),
		event.recipes.createPressing('minecraft:amethyst_block', 'minecraft:amethyst_block')
	]).transitionalItem('minecraft:amethyst_block').loops(2)
//凍った骨
	event.recipes.create.sequenced_assembly([
		'irons_spellbooks:frozen_bone'
	], 'minecraft:bone', [
		event.recipes.createDeploying('minecraft:bone', ['minecraft:bone', 'minecraft:snowball']),
		event.recipes.createPressing('minecraft:bone', 'minecraft:bone')
	]).transitionalItem('minecraft:bone').loops(16)
//エンダーパール
event.recipes.create.splashing('minecraft:ender_pearl', 'minecraft:magma_cream')
//毒ポテトレシピ消し
event.remove({output: 'minecraft:poisonous_potato'})
//雷
event.recipes.create.mixing(Fluid.of('create_wizardry:lightning', 250), [Fluid.of('minecraft:lava', 250), Fluid.of('alexscaves:acid', 250)])
})