ServerEvents.recipes(event => {
    //Array do Create e addons do Create
    let events = JsonIO.read("kubejs/data/events.json");

    //Receitas tier 1
    event.shaped(
        //Receita do Mecanismo tier 1
        Item.of('kubejs:woodenmechanism', 3),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'create:andesite_casing'
        }
    )
    //Receitas do Create
    events["create-base-tier1"].forEach((el) => event.stonecutting(el[0], el[1]));
    //Receitas do Create: Connected
    events["create-connected-tier1"].forEach((el) => event.stonecutting(el[0], el[1]));
        //Receita do Mecanismo tier 2
        //Receita do Molde de Zinco
        event.shaped(
            Item.of('kubejs:zinc_upgrade', 2),
            [
                'ABA',
                'ACA',
                'AAA'
            ],
            {
                A: 'minecraft:granite',
                B: 'create:zinc_ingot',
                C: 'create:andesite_casing'
            }
        )
        //Receita do Mecanismo tier 2
        event.smithing(
            'kubejs:zinc_mechanism',
            'kubejs:zinc_upgrade',
            'kubejs:woodenmechanism',
            'minecraft:redstone'
        )
    //Receitas do Create
    events["create-base-tier2"].forEach((el) => event.stonecutting(el[0], el[1]));
    //Maquinas tier fluido
    //Mecanismo tier Fluido
    event.shaped(
        Item.of('create_factory_logistics:fluid_mechanism', 1),
        [
            'ABA',
            'ACA',
            'ADA'
        ],
        {
            A: 'minecraft:dried_kelp',
            B: 'create:copper_sheet',
            C: 'create:copper_casing',
            D: 'create:andesite_alloy'
        }
    )
    //Create Base
    event.stonecutting('2x create:belt_connector', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('4x create:fluid_pipe', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('2x create:mechanical_pump', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('2x create:fluid_valve', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('2x create:copper_valve_handle', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('create:fluid_tank', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('2x create:hose_pulley', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('2x create:item_drain', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('2x create:spout', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('2x create:portable_fluid_interface', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('2x create:steam_engine', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('4x create:steam_whistle', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('3x create:andesite_funnel', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('3x create:andesite_tunnel', 'create_factory_logistics:fluid_mechanism')

    //Create: Enchantment Industry
    event.stonecutting('2x create_enchantment_industry:disenchanter', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('2x create_enchantment_industry:printer', 'create_factory_logistics:fluid_mechanism')

    //Create: Factory Logistics
    event.stonecutting('2x create_factory_logistics:jar_packager', 'create_factory_logistics:fluid_mechanism')

    //Create: Connected
    event.stonecutting('create_connected:fluid_vessel', 'create_factory_logistics:fluid_mechanism')

    //Maquinas tier redstone
    //Mecanismo tier Redstone
    event.shaped(
        Item.of('kubejs:computing_mechanism', 2),
        [
            'ABA',
            'ACA',
            'ADA'
        ],
        {
            A: 'minecraft:quartz',
            B: 'create:andesite_alloy',
            C: 'minecraft:redstone_block',
            D: 'create:cardboard_block'
        }
    )
    //Create Base
    event.stonecutting('create:packager', 'kubejs:computing_mechanism')
    event.stonecutting('create:package_frogport', 'kubejs:computing_mechanism')
    event.stonecutting('2x create:stock_link', 'kubejs:computing_mechanism')
    event.stonecutting('create:stock_ticker', 'kubejs:computing_mechanism')
    event.stonecutting('create:redstone_requester', 'kubejs:computing_mechanism')
    event.stonecutting('2x create:redstone_contact', 'kubejs:computing_mechanism')
    event.stonecutting('2x create:redstone_link', 'kubejs:computing_mechanism')
    event.stonecutting('4x create:analog_lever', 'kubejs:computing_mechanism')
    event.stonecutting('2x create:powered_latch', 'kubejs:computing_mechanism')
    event.stonecutting('2x create:powered_toggle_latch', 'kubejs:computing_mechanism')
    event.stonecutting('2x minecraft:repeater', 'kubejs:computing_mechanism')
    event.stonecutting('2x minecraft:comparator', 'kubejs:computing_mechanism')
    event.stonecutting('16x minecraft:redstone_torch', 'kubejs:computing_mechanism')
    event.stonecutting('2x quark:redstone_randomizer', 'kubejs:computing_mechanism')
})