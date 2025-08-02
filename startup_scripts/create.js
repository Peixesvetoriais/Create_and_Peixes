StartupEvents.registry('item', event => {
    // Mecanismo tier 1
    event.create('woodenmechanism')
        .displayName('Mecanismo de madeira')
        .maxStackSize(16)
        .texture('kubejs:item/woodenmechanism')

    // Mecanismo tier 2
    event.create('zinc_mechanism')
        .displayName('Mecanismo de Zinco')
        .maxStackSize(16)
        .texture('kubejs:item/zinc_mechanism')

    // Mecanismo tier Redstone
    event.create('computing_mechanism')
        .displayName('Mecanismo de Redstone')
        .maxStackSize(16)
        .texture('kubejs:item/computing_mechanism')

    // Upgrades
    event.create('zinc_upgrade')
        .displayName('Molde de Zinco')
        .maxStackSize(16)
        .texture('kubejs:item/zinc_upgrade')
})