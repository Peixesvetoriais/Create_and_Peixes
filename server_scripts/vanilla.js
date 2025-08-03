ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:white_wool', 1),
        [
            'AA ',
            'AA ',
            '   '
        ],
        {
            A: 'minecraft:feather'
        }
    )
    event.shapeless(
        Item.of('minecraft:feather', 8),
        [
            'minecraft:white_wool',
            'minecraft:white_wool'
        ]
    )
})
