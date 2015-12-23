UnitTypes.def = {
    king: {
        white:
            Unit.def.init({
                id: 'king',
                color: 'white',
                displayName: {
                    en: 'king',
                    fr: 'roi'
                },
                uchar: '\u2654'
            }),
            
        black:
            Unit.def.init({
                id: 'king',
                color: 'black',
                displayName: {
                    en: 'king',
                    fr: 'roi'
                },
                uchar: '\u265a'
            })
    },
    
    queen: {
        white: 
            Unit.def.init({
                id: 'queen',
                color: 'white',
                displayName: {
                    base: 'queen',
                    fr: 'reine'
                },
                uchar: '\u2655'
            }),
            
        black:
            Unit.def.init({
                id: 'queen',
                color: 'black',
                displayName: {
                    base: 'queen',
                    fr: 'reine'
                },
                uchar: '\u265b'
            })
    },
    rook: {
        white:
            Unit.def.init({
                id: 'rook',
                color: 'white',
                displayName: {
                    base: 'rook',
                    fr: 'tour'
                },
                uchar: '\u2656'
            }),
            
        black:
            Unit.def.init({
                id: 'rook',
                color: 'black',
                displayName: {
                    base: 'rook',
                    fr: 'tour'
                },
                uchar: '\u265c'
            })
    },
    bishop: {
        white:
            Unit.def.init({
                id: 'bishop',
                color: 'white',
                displayName: {
                    base: 'bishop',
                    fr: 'fou'
                },
                uchar: '\u2657'
            }),
            
        black:
            Unit.def.init({
                id: 'bishop',
                color: 'black',
                displayName: {
                    base: 'bishop',
                    fr: 'fou'
                },
                uchar: '\u265d'
            })
    },
    knight: {
        white:
            Unit.def.init({
                id: 'knight',
                color: 'white',
                displayName: {
                    base: 'knight',
                    fr: 'chevalier'
                },
                uchar: '\u2658'
            }),
            
        black:
            Unit.def.init({
                id: 'knight',
                color: 'black',
                displayName: {
                    base: 'knight',
                    fr: 'chevalier'
                },
                uchar: '\u265e'
            })
    },
    pawn: {
        white:
            Unit.def.init({
                id: 'pawn',
                color: 'white',
                displayName: {
                    base: 'pawn',
                    fr: 'pion'
                },
                uchar: '\u2659'
            }),
            
        black:
            Unit.def.init({
                id: 'pawn',
                color: 'black',
                displayName: {
                    base: 'pawn',
                    fr: 'tour'
                },
                uchar: '\u265f'
            })
    }
};
