//Receitas em formato
ServerEvents.recipes(event => {
    // Constantes de banco de dados
    let events = JsonIO.read("kubejs/data/events.json");

    //Mecanismo tier 1
    event.shapeless(
        Item.of('kubejs:woodenmechanism', 2),
        [
            '#minecraft:wooden_slabs',
            'create:andesite_alloy',
            'create:andesite_casing',
        ]
    )
    //Create Base
    events["create-base"].forEach((el) => event.stonecutting(el[0], el[1]));

    //Create: Connected
    event.stonecutting('4x create_connected:encased_chain_cogwheel', 'kubejs:woodenmechanism')
    event.stonecutting('2x create_connected:inverted_clutch', 'kubejs:woodenmechanism')
    event.stonecutting('2x create_connected:inverted_gearshift', 'kubejs:woodenmechanism')
    event.stonecutting('2x create_connected:parallel_gearbox', 'kubejs:woodenmechanism')
    event.stonecutting('2x create_connected:vertical_parallel_gearbox', 'kubejs:woodenmechanism')
    event.stonecutting('2x create_connected:six_way_gearbox', 'kubejs:woodenmechanism')
    event.stonecutting('2x create_connected:vertical_six_way_gearbox', 'kubejs:woodenmechanism')
    event.stonecutting('2x create_connected:cross_connector', 'kubejs:woodenmechanism')
    event.stonecutting('2x create_connected:shear_pin', 'kubejs:woodenmechanism')
    event.stonecutting('2x create_connected:overstress_clutch', 'kubejs:woodenmechanism')
    event.stonecutting('2x create_connected:centrifugal_clutch', 'kubejs:woodenmechanism')
    event.stonecutting('2x create_connected:freewheel_clutch', 'kubejs:woodenmechanism')
    event.stonecutting('2x create_connected:brake', 'kubejs:woodenmechanism')
    event.stonecutting('create_connected:item_silo', 'kubejs:woodenmechanism')

    //Maquinas tier 2 
    //Molde de Zinco
    event.shaped(
        Item.of('kubejs:zinc_upgrade', 2),
        [
            'ABA',
            'ACA',
            'AAA'
        ],
        {
            A: 'minecraft:andesite',
            B: 'create:zinc_ingot',
            C: 'create:andesite_casing'
        }
    )
    //Mecanismo tier 2
    event.smithing(
        'kubejs:zinc_mechanism',
        'kubejs:zinc_upgrade',
        'kubejs:woodenmechanism',
        'minecraft:redstone'
    )
    //Create Base
    event.stonecutting('create:mechanical_drill', 'kubejs:zinc_mechanism')
    event.stonecutting('create:mechanical_saw', 'kubejs:zinc_mechanism')
    event.stonecutting('create:mechanical_harvester', 'kubejs:zinc_mechanism')
    event.stonecutting('create:mechanical_plough', 'kubejs:zinc_mechanism')
    event.stonecutting('create:mechanical_roller', 'kubejs:zinc_mechanism')
    event.stonecutting('create:basin', 'kubejs:zinc_mechanism')
    event.stonecutting('create:mechanical_press', 'kubejs:zinc_mechanism')
    event.stonecutting('create:mechanical_mixer', 'kubejs:zinc_mechanism')
    event.stonecutting('create:millstone', 'kubejs:zinc_mechanism')
    event.stonecutting('create:encased_fan', 'kubejs:zinc_mechanism')

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
    event.shapeless(
        Item.of('kubejs:computing_mechanism', 2),
        [
            'minecraft:cobblestone',
            'create:transmitter',
            'create:cardboard_block',
            'create:andesite_alloy'
        ]
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