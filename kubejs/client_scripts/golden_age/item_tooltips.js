ItemEvents.tooltip((tooltip) => {   
    tooltip.addAdvanced('golden_age:azathoth_ring', (item, advanced, text) => {
        text.add(Text.darkRed(Text.translatable("golden_age.tooltips.azathoth_ring.1")));
    }),

    tooltip.addAdvanced('golden_age:infinity_ingot', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("golden_age.tooltips.infinity_ingot.1")));
    }),
    tooltip.addAdvanced('golden_age:neutronium_ingot', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("golden_age.tooltips.neutronium_ingot.1")));
    }),
    tooltip.addAdvanced('golden_age:infinity_ring', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("golden_age.tooltips.infinity_ring.1")));
    }),
    tooltip.addAdvanced('golden_age:crystal_matrix_ingot', (item, advanced, text) => {
        text.add(Text.gray(Text.translatable("golden_age.tooltips.crystal_matrix_ingot.1")));
    })
})