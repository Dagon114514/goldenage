// priority: -1

// 这个事件用于注册物品，比如器官
// 器官效果的实现逻辑见于../server_scripts/golden_age/中
StartupEvents.registry('item', event => {
	/**
	 * 注册器官时调用的函数
	 * @param {Organ} organ 
	 * @returns {Internal.BasicItemJS$Builder}
	 */
	function registerOrgan(organ) {
		global.ORGAN_LIST.push(organ)
		// 此处.group()中的参数改为你注册的创造模式物品栏的id，定义于./dlc_template_creative_tab_register.js中
		let builder = event.create(organ.itemID).maxStackSize(organ.maxStackSize).tag('kubejs:organ').group("kubejs.golden_age")
		if (organ.ctrlTextLines.length > 0) {
			builder.tag('chestcavity:active')
		}
		if (organ.altTextLines.length > 0) {
			builder.tag('chestcavity:special')
		}
		return builder
	}

	// 示例器官-伤害
	// 'golden_age:example_organ_damage'是注册的器官的物品id
	//registerOrgan(new Organ('golden_age:example_organ_damage')
		// 添加器官的基础描述，"golden_age.tooltips.example_organ_damage.1"是本地化键名，位于/kubejs/assets/golden_age/lang/中的本地化文件
		//.addTextLines('default', [Text.gray({ "translate": "golden_age.tooltips.example_organ_damage.1" })])
		// 添加器官的特殊效果描述
		//.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "golden_age.tooltips.example_organ_damage.2" })])
		// 添加器官的基础数值
		//.addScore('strength', 1)
		// 构建，别忘加了
		//.build())
		// 器官的材质路径，这个材质位于/kubejs/assets/golden_age/item/organs/example_organ_damage.png
		//.texture('golden_age:item/organs/example_organ_damage')
		// 这个标签控制物品的边框
		//.tag('itemborders:iron')
		// 这个标签标明这是一个“伤害”型器官
		//.tag('kubejs:damage')
		// 这个标签是额外的种类描述，定义于./dlc_template_global.js中
		//.tag('kubejs:golden_age');



	//无尽法杖
	event.create('golden_age:infinity_wand', "irons_spells_js:staff").group("kubejs.golden_age")
	.attackDamageBaseline(65)
	.speedBaseline(-1)
	.speed(6)
	.addAdditionalAttribute('irons_spellbooks:max_mana', 'RecitativeStaff', 9999, 'addition')
	.addAdditionalAttribute('irons_spellbooks:spell_power', 'RecitativeStaff', 6.66, 'multiply_base')
	.addAdditionalAttribute('irons_spellbooks:mana_regen', 'RecitativeStaff', 6.66, 'multiply_total')
	.addAdditionalAttribute('irons_spellbooks:cooldown_reduction', 'RecitativeStaff', 6.66, 'multiply_total')
	.addAdditionalAttribute('irons_spellbooks:cast_time_reduction', 'RecitativeStaff', 6.66, 'multiply_total')
	.rarity('rare')
	.texture('golden_age:item/infinity_wand')



	//寰宇支配之剑
    event.create('golden_age:infinity_sword',"irons_spells_js:staff").group("kubejs.golden_age").rarity('rare')
	.texture('golden_age:item/infinity_sword')
    .attackDamageBaseline(2147483648) // 设置攻击力
    .speedBaseline(-2.4) // 设置攻击速度
    
	registerOrgan(new Organ('golden_age:infinity_sword_organ')
	.addScore('strength', 2147483649)
	.build())
	.texture('golden_age:item/organs/infinity_sword')
	.tag('itemborders:diamond')
	.tag('kubejs:damage_only')
	.tag('kubejs:infinity')


	//奇点
	event.create('golden_age:tengyan_point').group("kubejs.golden_age").rarity('epic')
	.texture('golden_age:item/tengyan_point')
	.maxStackSize(1)
	
	
	event.create('golden_age:fire_point').group("kubejs.golden_age").rarity('epic')
	.texture('golden_age:item/fire_point')
	.maxStackSize(1)

	event.create('golden_age:wither_point').group("kubejs.golden_age").rarity('epic')
	.texture('golden_age:item/wither_point')
	.maxStackSize(1)

	event.create('golden_age:old_point').group("kubejs.golden_age").rarity('epic')
	.texture('golden_age:item/old_point')
	.maxStackSize(1)

	event.create('golden_age:ghost_point').group("kubejs.golden_age").rarity('epic')
	.texture('golden_age:item/ghost_point')
	.maxStackSize(1)

	event.create('golden_age:ice_point').group("kubejs.golden_age").rarity('epic')
	.texture('golden_age:item/ice_point')
	.maxStackSize(1)

	event.create('golden_age:lightning_point').group("kubejs.golden_age").rarity('epic')
	.texture('golden_age:item/lightning_point')
	.maxStackSize(1)

	event.create('golden_age:jade_point').group("kubejs.golden_age").rarity('epic')
	.texture('golden_age:item/jade_point')
	.maxStackSize(1)

	event.create('golden_age:dark_point').group("kubejs.golden_age").rarity('epic')
	.texture('golden_age:item/dark_point')
	.maxStackSize(1)

	event.create('golden_age:black_point').group("kubejs.golden_age").rarity('epic')
	.texture('golden_age:item/black_point')
	.maxStackSize(1)

	event.create('golden_age:cursed_point').group("kubejs.golden_age").rarity('epic')
	.texture('golden_age:item/cursed_point')
	.maxStackSize(1)


     //无尽材料
     
	event.create('golden_age:star_fuel').group("kubejs.golden_age").rarity('rare')
	.texture('golden_age:item/star_fuel')
	.maxStackSize(64)
     

     
	event.create('golden_age:neutronium_ingot').group("kubejs.golden_age").rarity('rare')
	.texture('golden_age:item/neutronium_ingot')
	.maxStackSize(64)
	
	event.create('golden_age:infinity_ingot').group("kubejs.golden_age").rarity('rare')
	.texture('golden_age:item/resource_infinity_ingot')
	.maxStackSize(64)



	event.create('golden_age:diamond_lattice').group("kubejs.golden_age").rarity('rare')
	.texture('golden_age:item/diamond_lattice')
	.maxStackSize(64)

	event.create('golden_age:crystal_matrix_ingot').group("kubejs.golden_age").rarity('rare')
	.texture('golden_age:item/crystal_matrix_ingot')
	.maxStackSize(64)

	//邪神之戒
	event.create('golden_age:azathoth_ring').group("kubejs.golden_age").rarity('epic')
	.texture('golden_age:item/azathoth_ring')
	.maxStackSize(1)
	.tag('curios:ring')
	.attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
	.canEquip(() => true))


	//无尽套、、
	event.create('golden_age:infinity_chestplate').group("kubejs.golden_age").rarity('rare')
	.texture('golden_age:item/infinity_chestplate/layer_0')
	.maxStackSize(1)

	event.create('golden_age:infinity_helmet').group("kubejs.golden_age").rarity('rare')
	.texture('golden_age:item/infinity_helmet/layer_0')
	.maxStackSize(1)

	event.create('golden_age:infinity_pants').group("kubejs.golden_age").rarity('rare')
	.texture('golden_age:item/infinity_pants/layer_0')
	.maxStackSize(1)

	event.create('golden_age:infinity_boots').group("kubejs.golden_age").rarity('rare')
	.texture('golden_age:item/infinity_boots/layer_0')
	.maxStackSize(1)
	
	//无极无尽之戒
	event.create('golden_age:infinity_ring').group("kubejs.golden_age").rarity('rare')
	.texture('golden_age:item/infinity_ring')
	.maxStackSize(1)
	.tag('curios:ring')
	.attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
	.canEquip(() => true))
	






	//中子态素收集器
	registerOrgan(new Organ('golden_age:machine')
		.addTextLines('default', [Text.gray({ "translate": "golden_age.tooltips.machine.1" })])
		.addScore('strength', -3)
		.addScore('health', -3)
		.addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "golden_age.tooltips.machine.2" })])
		.addTextLines('ctrl', [LEADING_SYMBOL, Text.gray({ "translate": "golden_age.tooltips.machine.3" })])
		.build())
		.texture('golden_age:item/organs/machine')
		.tag('itemborders:iron')
		.tag('kubejs:infinity')
		.tag('kubejs:key_pressed')
		.tag('kubejs:active_only')
		.tag('kubejs:rclick_only')



	//无尽催化剂st
	registerOrgan(new Organ('golden_age:infinity_catalyst')
		.addTextLines('default', [Text.gray({ "translate": "golden_age.tooltips.infinity_catalyst.1" })])
		.addScore('strength', 20)
		.addScore('health', 20)
		.build())
		.texture('golden_age:item/organs/resource_infinity_catalyst')
		.tag('itemborders:gold')
		.tag('kubejs:infinity')

	//末日之蛋
	registerOrgan(new Organ('golden_age:wither_in')
		.addTextLines('default', [Text.gray({ "translate": "golden_age.tooltips.wither_in.1" })])
		.addScore('strength', 444)
		.addScore('health', 444)
		.build())
		.texture('golden_age:item/organs/wither_in')
		.tag('itemborders:gold')
		.tag('kubejs:infinity')


	})
