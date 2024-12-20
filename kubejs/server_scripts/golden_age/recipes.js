function GoetyRitualRecipe(craftType, ingredients, activation_item, output) {
    this.type = 'goety:ritual'
    this.ritual_type = 'goety:craft'
    this.craftType = craftType
    this.activation_item = activation_item
    this.ingredients = ingredients
    this.result = output
    this.duration = 20
    this.soulCost = 10
}

GoetyRitualRecipe.prototype = {
    setDuration: function (duration) {
        this.duration = duration
        return this
    },
    setSoulCost: function (soulCost) {
        this.soulCost = soulCost
        return this
    },
    setRitualType: function (ritual_type) {
        this.ritual_type = ritual_type
        return this
    },
    setEntityToSacrifice: function (entity_to_sacrifice) {
        this.entity_to_sacrifice = entity_to_sacrifice
        return this
    },
}






ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }
    registerCustomRecipe(new GoetyRitualRecipe('lich', 
    [Ingredient.of('goety:storm_staff'),
    Ingredient.of('goety:ominous_staff'), 
    Ingredient.of('goety:nameless_staff'), 
    Ingredient.of('irons_spellbooks:graybeard_staff'),
    Ingredient.of('irons_spellbooks:artificer_cane'),
    Ingredient.of('irons_spellbooks:ice_staff'),
    Ingredient.of('irons_spellbooks:blood_staff'), 
    Ingredient.of('irons_spellbooks:hither_thither_wand'),
    Ingredient.of('goety:frost_staff'),
    Ingredient.of('goety:wild_staff'),
    Ingredient.of('irons_spellbooks:mana_ring'),
    Ingredient.of('witherstormmod:withered_nether_star')],
    Item.of('goety:philosophers_stone'), 
    Item.of('golden_age:azathoth_ring')).setSoulCost(5000).setDuration(20))
    
    
	event.recipes.summoningrituals
        .altar('witherstormmod:withered_nether_star')
        .id('golden_age:tengyan_point')
        .input('64x cataclysm:ignitium_block')
        .input('64x cataclysm:ignitium_block')
        .input('64x cataclysm:ignitium_block')
        .input('64x cataclysm:ignitium_block')
        .input('64x cataclysm:ignitium_block')
        .itemOutput('golden_age:tengyan_point')
        .recipeTime(3000);
    
	event.recipes.summoningrituals
        .altar('witherstormmod:withered_nether_star')
        .id('golden_age:lightning_point')
        .input('64x iceandfire:dragonsteel_lightning_block')
        .input('64x iceandfire:dragonsteel_lightning_block')
        .input('64x iceandfire:dragonsteel_lightning_block')
        .input('64x iceandfire:dragonsteel_lightning_block')
        .input('64x iceandfire:dragonsteel_lightning_block')
        .itemOutput('golden_age:lightning_point')
        .recipeTime(3000);

	event.recipes.summoningrituals
        .altar('witherstormmod:withered_nether_star')
        .id('golden_age:wither_point')
        .input('64x cataclysm:witherite_block')
        .input('64x cataclysm:witherite_block')
        .input('64x cataclysm:witherite_block')
        .input('64x cataclysm:witherite_block')
        .input('64x cataclysm:witherite_block')
        .itemOutput('golden_age:wither_point')
        .recipeTime(3000);
    
	event.recipes.summoningrituals
        .altar('witherstormmod:withered_nether_star')
        .id('golden_age:old_point')
        .input('64x cataclysm:ancient_metal_block')
        .input('64x cataclysm:ancient_metal_block')
        .input('64x cataclysm:ancient_metal_block')
        .input('64x cataclysm:ancient_metal_block')
        .input('64x cataclysm:ancient_metal_block')
        .itemOutput('golden_age:old_point')
        .recipeTime(3000);

	event.recipes.summoningrituals
        .altar('witherstormmod:withered_nether_star')
        .id('golden_age:ghost_point')
        .input('64x iceandfire:ghost_ingot')
        .input('64x iceandfire:ghost_ingot')
        .input('64x iceandfire:ghost_ingot')
        .input('64x iceandfire:ghost_ingot')
        .input('64x iceandfire:ghost_ingot')
        .itemOutput('golden_age:ghost_point')
        .recipeTime(3000);
 
	event.recipes.summoningrituals
        .altar('witherstormmod:withered_nether_star')
        .id('golden_age:ice_point')
        .input('64x iceandfire:dragonsteel_ice_block')
        .input('64x iceandfire:dragonsteel_ice_block')
        .input('64x iceandfire:dragonsteel_ice_block')
        .input('64x iceandfire:dragonsteel_ice_block')
        .input('64x iceandfire:dragonsteel_ice_block')
        .itemOutput('golden_age:ice_point')
        .recipeTime(3000);
 
	event.recipes.summoningrituals
        .altar('witherstormmod:withered_nether_star')
        .id('golden_age:fire_point')
        .input('64x iceandfire:dragonsteel_fire_block')
        .input('64x iceandfire:dragonsteel_fire_block')
        .input('64x iceandfire:dragonsteel_fire_block')
        .input('64x iceandfire:dragonsteel_fire_block')
        .input('64x iceandfire:dragonsteel_fire_block')
        .itemOutput('golden_age:fire_point')
        .recipeTime(3000);

	event.recipes.summoningrituals
        .altar('witherstormmod:withered_nether_star')
        .id('golden_age:jade_point')
        .input('64x goety:jade_block')
        .input('64x goety:jade_block')
        .input('64x goety:jade_block')
        .input('64x goety:jade_block')
        .input('64x goety:jade_block')
        .itemOutput('golden_age:jade_point')
        .recipeTime(3000);
 
	event.recipes.summoningrituals
        .altar('witherstormmod:withered_nether_star')
        .id('golden_age:black_point')
        .input('64x goety:dark_metal_block')
        .input('64x goety:dark_metal_block')
        .input('64x goety:dark_metal_block')
        .input('64x goety:dark_metal_block')
        .input('64x goety:dark_metal_block')
        .itemOutput('golden_age:black_point')
        .recipeTime(3000);
    
	event.recipes.summoningrituals
        .altar('witherstormmod:withered_nether_star')
        .id('golden_age:dark_point')
        .input('64x graveyard:dark_iron_block')
        .input('64x graveyard:dark_iron_block')
        .input('64x graveyard:dark_iron_block')
        .input('64x graveyard:dark_iron_block')
        .input('64x graveyard:dark_iron_block')
        .itemOutput('golden_age:dark_point')
        .recipeTime(3000);

	event.recipes.summoningrituals
        .altar('witherstormmod:withered_nether_star')
        .id('golden_age:cursed_point')
        .input('64x goety:cursed_metal_block')
        .input('64x goety:cursed_metal_block')
        .input('64x goety:cursed_metal_block')
        .input('64x goety:cursed_metal_block')
        .input('64x goety:cursed_metal_block')
        .itemOutput('golden_age:cursed_point')
        .recipeTime(3000);

	event.recipes.summoningrituals
        .altar('witherstormmod:withered_nether_star')
        .id('golden_age:infinity_catalyst')
        .input('1x golden_age:cursed_point')
        .input('1x golden_age:dark_point')
        .input('1x golden_age:black_point')
        .input('1x golden_age:jade_point')
        .input('1x golden_age:fire_point')
        .input('1x golden_age:ice_point')
        .input('1x golden_age:fire_point')
        .input('1x golden_age:ghost_point')
        .input('1x golden_age:fire_point')
        .input('1x golden_age:old_point')
        .input('1x golden_age:wither_point')
        .input('1x golden_age:lightning_point')
        .input('1x golden_age:tengyan_point')
        .itemOutput('golden_age:infinity_catalyst')
        .recipeTime(3000);

    
    
    event.recipes.create.mechanical_crafting('golden_age:infinity_ring', [
        'AA  D    ',
        'ABADEDD  ',
        ' AACDCCD ',
        ' DCD DCD ',
        'DFD   DGD',
        ' DCD DCD ',
        ' DCCDCCD ',
        '  DDHDD  ',
        '    D    '


    ], {
        A: 'golden_age:crystal_matrix_ingot',
        B: 'golden_age:infinity_block',
        C: 'golden_age:infinity_ingot',
        D: 'golden_age:neutronium_ingot',
        E: 'golden_age:infinity_helmet',
        F: 'golden_age:infinity_chestplate',
        G: 'golden_age:infinity_pants',
        H: 'golden_age:infinity_boots',

         })
 
    event.recipes.create.mechanical_crafting('golden_age:infinity_chestplate', [
        ' BB   BB ',
        'BBB   BBB',
        'BBB   BBB',
        ' BCCCCCB ',
        ' BCCACCB ',
        ' BCCCCCB ',
        ' BCCCCCB ',
        ' BCCCCCB ',
        '  BBBBB  '


    ], {
        A: 'golden_age:crystal_matrix',
        B: 'golden_age:neutronium_ingot',
        C: 'golden_age:infinity_ingot',

         })

    event.recipes.create.mechanical_crafting('golden_age:infinity_pants', [
        'DDDDDDDDD',
        'DCCCBCCCD',
        'DCDDBDDCD',
        'DCD   DCD',
        'DAD   DAD',
        'DCD   DCD',
        'DCD   DCD',
        'DCD   DCD',
        'DDD   DDD'


    ], {
        A: 'golden_age:crystal_matrix',
        B: 'golden_age:infinity_catalyst',
        C: 'golden_age:infinity_ingot',
        D: 'golden_age:neutronium_ingot',

         })
    
    event.recipes.create.mechanical_crafting('golden_age:infinity_sword', [
        '       CC',
        '      CCC',
        '     CCC ',
        '    CCC  ',
        ' A CCC   ',
        '  ACC    ',
        '  DA     ',
        ' D  A    ',
        'B        '


    ], {
        A: 'golden_age:crystal_matrix',
        B: 'golden_age:infinity_catalyst',
        C: 'golden_age:infinity_ingot',
        D: 'golden_age:neutronium_ingot',

         })

    event.recipes.create.mechanical_crafting('golden_age:infinity_boots', [
        ' BBB BBB ',
        ' BAB BAB ',
        ' BAB BAB ',
        'BBAB BABB',
        'BAAB BAAB',
        'BBBB BBBB'



    ], {
        A: 'golden_age:infinity_ingot',
        B: 'golden_age:neutronium_ingot',
         })


     event.recipes.create.mechanical_crafting('golden_age:infinity_helmet', [
        '  BBBBB  ',
        ' BAAAAAB ',
        ' B CAC B ',
        ' BAAAAAB ',
        ' BAAAAAB ',
        ' BA A AB '



    ], {
        A: 'golden_age:infinity_ingot',
        B: 'golden_age:neutronium_ingot',
        C: 'golden_age:infinity_catalyst',
         })        
    event.recipes.create.mechanical_crafting('golden_age:infinity_wand', [
        '      A  ',
        '     ACA ',
        '     DCCA',
        '    DCDA ',
        '   DBD   ',
        ' ADCD    ',
        'ACCD     ',
        ' ACA     ',
        '  A      '


    ], {
        A: 'golden_age:crystal_matrix_ingot',
        B: 'golden_age:infinity_block',
        C: 'golden_age:infinity_ingot',
        D: 'golden_age:neutronium_ingot',
         })

    
    
    event.shaped(Item.of('golden_age:diamond_lattice', 1), [
        'A A',
        ' A ',
        'A A'
    ],
        {
            A: 'minecraft:diamond',
        })

    event.shaped(Item.of('golden_age:neutron', 1), [
        'AAA',
        'AAA',
        'AAA'
    ],
        {
            A: 'golden_age:neutronium_ingot',
        })

    event.shaped(Item.of('golden_age:crystal_matrix', 1), [
        'AAA',
        'AAA',
        'AAA'
    ],
        {
            A: 'golden_age:crystal_matrix_ingot',
        })

    event.shaped(Item.of('golden_age:crystal_matrix_ingot', 1), [
        'ABA',
        'ABA'
    ],
        {
            A: 'golden_age:diamond_lattice',
            B: 'minecraft:nether_star',
        })
    event.shaped(Item.of('golden_age:infinity_sword_organ', 1), [
        'A'
        
    ],
        {
            A: 'golden_age:infinity_sword',
        })    
    event.shaped(Item.of('golden_age:infinity_sword', 1), [
        'A'
        
    ],
        {
            A: 'golden_age:infinity_sword_organ',
        })        
    event.recipes.create.mechanical_crafting('golden_age:infinity_ingot', [
        'CCCCCCCCC',
        'CABBABBAC',
        'CBAABAABC',
        'CABBABBAC',
        'CCCCCCCCC'       

    ], 
        {
            A: 'golden_age:crystal_matrix_ingot',
            B: 'golden_age:infinity_catalyst',
        C: 'golden_age:neutronium_ingot',
        })
 

    event.shaped(Item.of('golden_age:infinity_block', 1), [
        'AAA',
        'AAA',
        'AAA'
    ],
        {
            A: 'golden_age:infinity_ingot',
        })


    event.recipes.create.mechanical_crafting('golden_age:machine', [
        'AADDDDDAA',
        'A DDDDD A',
        'A  CCC  A',
        'B CCCCC B',
        'A CCBCC A',
        'B CCCCC B',
        'A  CCC  A',
        'A       A',
        'AAABABAAA'


    ], {
        A: 'minecraft:iron_block',
        B: 'golden_age:crystal_matrix_ingot',
        C: 'minecraft:redstone_block',
        D: 'minecraft:quartz_block',
    })







    
})
