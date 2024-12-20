// priority: 9

/**
 * 器官激活策略
 * 对应.tag('kubejs:active')
 * @constant
 * @type {Object<string,function(Internal.ServerPlayer, organ, Map):void>}
 */
const dlcTemplateOrganActiveStrategies = {
    // 示例器官-激活
    'golden_age:example_organ_active': function (player, organ, attributeMap) {
        // 获取玩家的胸腔属性
        let playerChestInstance = player.getChestCavityInstance()
        // 向胸腔属性中放入新属性
        // new ResourceLocation('chestcavity', 'health')指健康属性
        playerChestInstance.organScores.put(new ResourceLocation('chestcavity', 'health'),
            // playerChestInstance.getOrganScores().get()获取玩家的当前属性
            // $Float是将javascript数字转化为java的单精度浮点数，必须要有
            new $Float(playerChestInstance.getOrganScores().get(new ResourceLocation('chestcavity', 'health')) + 2))
    },
}

var assign_organ_active = Object.assign(organActiveStrategies, dlcTemplateOrganActiveStrategies);

/**
 * 器官激活唯一策略
 * 对应.tag('kubejs:active_only')
 * @constant
 * @type {Object<string,function(Internal.ServerPlayer, organ, Map):void>}
 */
const dlcTemplateOrganActiveOnlyStrategies = {
    'golden_age:machine': function (player, organ, attributeMap) {
        let maxCount = player.persistentData.getInt(resourceCountMax) ?? defaultResourceMax
        player.persistentData.putInt(resourceCountMax, maxCount + 10000)

        
    },
    
    
    
    
}

var assign_organ_active_only = Object.assign(organActiveOnlyStrategies, dlcTemplateOrganActiveOnlyStrategies);