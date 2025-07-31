//Receitas em formato
ServerEvents.recipes(event => {
    //Mecanismo tier 1
    event.shaped(
        Item.of('kubejs:woodenmechanism', 2),
        [
            'AAB',
            'ACA',
            'BAA'
        ],
        {
            A: '#minecraft:wooden_slabs',
            B: 'create:andesite_alloy',
            C: 'create:andesite_casing'
        }
    )
    //Create Base
    event.stonecutting('8x create:shaft', 'kubejs:woodenmechanism')
    event.stonecutting('4x create:cogwheel', 'kubejs:woodenmechanism')
    event.stonecutting('2x create:large_cogwheel', 'kubejs:woodenmechanism')
    event.stonecutting('2x create:gearbox', 'kubejs:woodenmechanism')
    event.stonecutting('2x create:vertical_gearbox', 'kubejs:woodenmechanism')
    event.stonecutting('4x create:encased_chain_drive', 'kubejs:woodenmechanism')
    event.stonecutting('4x create:adjustable_chain_gearshift', 'kubejs:woodenmechanism')
    event.stonecutting('2x create:clutch', 'kubejs:woodenmechanism')
    event.stonecutting('4x create:turntable', 'kubejs:woodenmechanism')
    event.stonecutting('2x create:chain_conveyor', 'kubejs:woodenmechanism')
    event.stonecutting('2x create:depot', 'kubejs:woodenmechanism')
    event.stonecutting('2x create:weighted_ejector', 'kubejs:woodenmechanism')
    event.stonecutting('1x create:item_vault', 'kubejs:woodenmechanism')
    event.stonecutting('9x create:linear_chassis', 'kubejs:woodenmechanism')
    event.stonecutting('9x create:secondary_linear_chassis', 'kubejs:woodenmechanism')
    event.stonecutting('9x create:radial_chassis', 'kubejs:woodenmechanism')
    event.stonecutting('2x create:cuckoo_clock', 'kubejs:woodenmechanism')
    event.stonecutting('2x create:windmill_bearing', 'kubejs:woodenmechanism')
    event.stonecutting('2x create:mechanical_bearing', 'kubejs:woodenmechanism')
    event.stonecutting('2x create:rope_pulley', 'kubejs:woodenmechanism')
    event.stonecutting('2x create:sticker', 'kubejs:woodenmechanism')
    event.stonecutting('2x create:mechanical_piston', 'kubejs:woodenmechanism')
    event.stonecutting('2x create:sticky_mechanical_piston', 'kubejs:woodenmechanism')
    event.stonecutting('8x create:piston_extension_pole', 'kubejs:woodenmechanism')
    event.stonecutting('2x create:gantry_carriage', 'kubejs:woodenmechanism')
    event.stonecutting('8x create:gantry_shaft', 'kubejs:woodenmechanism')
    event.stonecutting('2x create:speedometer', 'kubejs:woodenmechanism')
    event.stonecutting('2x create:stressometer', 'kubejs:woodenmechanism')
    event.stonecutting('2x create:cart_assembler', 'kubejs:woodenmechanism')

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
//Maquinas tier 2 
    //Mecanismo tier 2
    event.smithing(
        'kubejs:zinc_mechanism',
        'minecraft:redstone',
        'kubejs:woodenmechanism',
        'create:zinc_ingot'
    )
//Maquinas tier fluido
    //Mecanismo tier Fluido
    event.shaped(
        Item.of('create_factory_logistics:fluid_mechanism', 1),
        [
            'ABA',
            'ACA',
            'ABA'
        ],
        {
            A: 'minecraft:dried_kelp',
            B: 'create:copper_sheet',
            C: 'create:copper_casing'
        }
    )
    //Create Base
    event.stonecutting('2x create:belt_connector', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('4x create:fluid_pipe', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('4x create:mechanical_pipe', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('2x create:fluid_valve', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('2x create:copper_valve_handle', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('1x create:fluid_tank', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('2x create:hose_pulley', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('2x create:item_drain', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('2x create:spout', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('2x create:portable_fluid_interface', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('2x create:steam_engine', 'create_factory_logistics:fluid_mechanism')
    event.stonecutting('4x create:steam_whistle', 'create_factory_logistics:fluid_mechanism')
})