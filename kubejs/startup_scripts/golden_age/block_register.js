StartupEvents.registry('minecraft:block', event => {
	event.create('golden_age:infinity_block', 'basic')
	.hardness(10)
	.material('obsidian')
})

StartupEvents.registry('minecraft:block', event => {
	event.create('golden_age:crystal_matrix', 'basic')
	.hardness(5)
	.material('obsidian')
})

StartupEvents.registry('minecraft:block', event => {
	event.create('golden_age:neutron', 'basic')
	.hardness(7)
	.material('obsidian')
})