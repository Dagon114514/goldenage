// priority: -1

// 导入Java类
const $CreativeTabRegistrydlc_template = Java.loadClass("dev.architectury.registry.CreativeTabRegistry")

// 创建DLC专属的创造模式物品栏
// "kubejs:golden_age"改为你希望注册的物品栏id，"golden_age:example_organ_damage"改为你希望作为图标的物品
$CreativeTabRegistrydlc_template.create(Utils.id("kubejs:golden_age"), () => Item.of("golden_age:infinity_catalyst"))
