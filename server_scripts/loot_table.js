LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:emerald_block").pool((p) => {
        p.addLoot("minecraft:iron_boots");
        p.addNBT({ Enchantments:[{id:"depth_strider", lvl: 255}] });
    });

    //ナイトリッチ
    event
        .addEntityLootModifier("bosses_of_mass_destruction:lich").pool((p) => {
            p.addLoot('cataclysm_spellbooks:coral_staff');
            p.setName(Text.blue("無名の杖のひとつ"));
            p.addLore("ファントムを従えた屍の魔術師が愛用した杖。")
            p.addLore("右手に持っている間定期的にファントムを掃討する。")
        })


    //エルダーガーディアン
    event
        .addEntityLootModifier("minecraft:elder_guardian")
        .addWeightedLoot(1, [
        //ヘルメット
        Item.of('minecraft:chainmail_helmet', 
        '{Damage:0,Trim:{material:"minecraft:diamond",pattern:"minecraft:tide"}}')
        .withName(Text.gray("棘メット")).withNBT({ Enchantments:[{id:"thorns", lvl: 110}] })
        .withNBT('{AttributeModifiers:[{AttributeName:"generic.armor",Name:"armor_bonus",Amount:1.0,Operation:0,Slot:"head",UUID:[I;555,666,777,888]},'+
            '{AttributeName:"puffish_attributes:resistance_shred",Name:"armor_pierce",Amount:0.5,Operation:1,Slot:"head",UUID:[I;2555,666,777,888]}]}')
        .withChance(1), 
        //チェストプレート
        Item.of('minecraft:chainmail_chestplate', 
        '{Damage:0,Trim:{material:"minecraft:diamond",pattern:"minecraft:tide"}}')
        .withName(Text.gray("棘メイル")).withNBT({ Enchantments:[{id:"thorns", lvl: 110}] })
        .withNBT('{AttributeModifiers:[{AttributeName:"generic.armor",Name:"armor_bonus",Amount:3.0,Operation:0,Slot:"chest",UUID:[I;5155,666,777,888]},'+
            '{AttributeName:"puffish_attributes:resistance_shred",Name:"armor_pierce",Amount:0.5,Operation:1,Slot:"chest",UUID:[I;2555,2666,777,888]}]}')
        .withChance(1),
        //レギンス
        Item.of('minecraft:chainmail_leggings', 
        '{Damage:0,Trim:{material:"minecraft:diamond",pattern:"minecraft:tide"}}')
        .withName(Text.gray("棘ズボン")).withNBT({ Enchantments:[{id:"thorns", lvl: 110}] })
        .withNBT('{AttributeModifiers:[{AttributeName:"generic.armor",Name:"armor_bonus",Amount:2.0,Operation:0,Slot:"legs",UUID:[I;555,6616,777,888]},'+
            '{AttributeName:"puffish_attributes:resistance_shred",Name:"armor_pierce",Amount:0.5,Operation:1,Slot:"legs",UUID:[I;2555,666,2777,888]}]}')
        .withChance(1),
        //ブーツ
        Item.of('minecraft:chainmail_boots', 
        '{Damage:0,Trim:{material:"minecraft:diamond",pattern:"minecraft:tide"}}')
        .withName(Text.gray("棘ブーツ")).withNBT({ Enchantments:[{id:"thorns", lvl: 110}] })
        .withNBT('{AttributeModifiers:[{AttributeName:"generic.armor",Name:"armor_bonus",Amount:1.0,Operation:0,Slot:"feet",UUID:[I;555,666,7771,888]},'+
            '{AttributeName:"puffish_attributes:resistance_shred",Name:"armor_pierce",Amount:0.5,Operation:1,Slot:"feet",UUID:[I;2555,666,777,2888]}]}')
        .withChance(1)])

    //フロストモー
    event
        .addEntityLootModifier("mowziesmobs:frostmaw").pool((p) =>{
            p.addLoot(Item.of('minecraft:diamond_sword', '{Damage:0}').enchant('l2complements:ice_blade', 5)/*.enchant('minecraft:vamishing_curse', 1)*/)
            p.setName(Text.blue("凍剣"))
            p.addNBT('{AttributeModifiers:[{AttributeName:"generic.attack_damage", Name:"attack", Slot:"mainhand", Operation:0.0, Amount:6, UUID:[I;123141,45226,62280,24156]},'+
                '{AttributeName:"generic.attack_speed", Name:"attack_speed", Slot:"mainhand", Operation:0.0, Amount:-2.4, UUID:[I;123141,45226,62280,24156]},'+
                '{AttributeName:"generic.movement_speed", Name:"speed", Slot:"mainhand", Operation:1, Amount:0.2, UUID:[I;3141,45226,680,2416]}'+
                '{AttributeName:"forge:entity_reach", Name:"reach", Slot:"mainhand", Operation:0, Amount:1.5, UUID:[I;3141,45226,64805,244216]}]}')
        })
});