
const curiosHelper = Java.loadClass("top.theillusivec4.curios.api.CuriosApi").getCuriosHelper()
function isEquippedCurio(entity, curioId) {
    return curiosHelper.findFirstCurio(entity, curioId).isPresent()
}


ServerEvents.tags("item", event => {
    event.add("curios:ring", "golden_age:infinity_ring")
})

PlayerEvents.tick(event => {
    let player = event.player
     
    if ( isEquippedCurio(player, "golden_age:infinity_ring") ) {
        player.abilities.mayfly = true
        player.onUpdateAbilities()}
        else {
            player.abilities.mayfly = false
            player.onUpdateAbilities()
        }

    }
)
        
EntityEvents.hurt(event => {
    let {entity, source, amount} = event
    //不为玩家时return
    if ( !entity.class.toString().contains("ServerPlayer") ) {
        return
    }
    if ( isEquippedCurio(entity, "golden_age:infinity_ring") ) {
        if ( source.toString().contains("minecraft:outOfWorld") ) {
            event.cancel()
        }
        else {event.cancel()}
    }
})

