ServerEvents.recipes(event => {
//火の杖
event.remove({output: 'cataclysm_spellbooks:soul_brazier'})
event.shaped(
  Item.of('cataclysm_spellbooks:soul_brazier'),
  [
    '  A',
    ' B ',
    'B  '
  ],
  {
    A: 'irons_spellbooks:fire_rune',
    B: 'l2weaponry:reinforced_handle'
  }
)
//エンダーの杖
event.remove({output: 'cataclysm_spellbooks:void_staff'})
event.shaped(
  Item.of('cataclysm_spellbooks:void_staff'),
  [
    '  A',
    ' B ',
    'B  '
  ],
  {
    A: 'irons_spellbooks:ender_rune',
    B: 'l2weaponry:reinforced_handle'
  }
)
//雷の杖
event.remove({output: 'irons_spellbooks:energized_core'})
event.remove({output: 'irons_spellbooks:lightning_rod'})
event.shaped(
  Item.of('irons_spellbooks:lightning_rod'),
  [
    '  A',
    ' B ',
    'B  '
  ],
  {
    A: 'irons_spellbooks:lightning_rune',
    B: 'l2weaponry:reinforced_handle'
  }
)
//氷の杖
event.remove({output: 'irons_spellbooks:ice_staff'})
event.shaped(
  Item.of('irons_spellbooks:ice_staff'),
  [
    '  A',
    ' B ',
    'B  '
  ],
  {
    A: 'irons_spellbooks:ice_rune',
    B: 'l2weaponry:reinforced_handle'
  }
)
//聖の杖
event.remove({output: 'cataclysm_spellbooks:spirit_sunderer'})
event.shaped(
  Item.of('cataclysm_spellbooks:spirit_sunderer'),
  [
    '  A',
    ' B ',
    'B  '
  ],
  {
    A: 'irons_spellbooks:holy_rune',
    B: 'l2weaponry:reinforced_handle'
  }
)
//召喚の杖
event.remove({output: 'cataclysm_spellbooks:fake_wudjets_staff'})
event.shaped(
  Item.of('cataclysm_spellbooks:fake_wudjets_staff'),
  [
    '  A',
    ' B ',
    'B  '
  ],
  {
    A: 'irons_spellbooks:evocation_rune',
    B: 'l2weaponry:reinforced_handle'
  }
)
//自然の杖
event.remove({output: 'cataclysm_spellbooks:bloom_stone_staff'})
event.shaped(
  Item.of('cataclysm_spellbooks:bloom_stone_staff'),
  [
    '  A',
    ' B ',
    'B  '
  ],
  {
    A: 'irons_spellbooks:nature_rune',
    B: 'l2weaponry:reinforced_handle'
  }
)
//サンゴの杖（ナイトリッチ用）
event.remove({output: 'cataclysm_spellbooks:coral_staff'})
})