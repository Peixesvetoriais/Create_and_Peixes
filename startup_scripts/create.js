//Cria itens
StartupEvents.registry('item', event => {
    //Mecanismo tier 1
    event.create('woodenmechanism')
        .displayName('Mecanismo de madeira')
        .maxStackSize(16)
        .creativetab('create:creative_tab');

    //Mecanismo tier 2
    event.create('zinc_mechanism')
        .displayName('Mecanismo de Zinco')
        .maxStackSize(16)
        .creativetab('create:creative_tab');
})