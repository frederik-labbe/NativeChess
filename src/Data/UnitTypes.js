UnitTypes.def = {
    king: {
        white:
            Unit.def.init({
                id: 'white-king',
                color: 'white',
                displayName: {
                    en: 'king',
                    fr: 'roi'
                },
                uchar: '\u2654'
            }),
            
        black:
            Unit.def.init({
                id: 'black-king',
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
                id: 'white-queen',
                color: 'white',
                displayName: {
                    base: 'queen',
                    fr: 'reine'
                },
                uchar: '\u2655'
            }),
            
        black:
            Unit.def.init({
                id: 'black-queen',
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
                id: 'white-rook',
                color: 'white',
                displayName: {
                    base: 'rook',
                    fr: 'tour'
                },
                uchar: '\u2656'
            }),
            
        black:
            Unit.def.init({
                id: 'black-rook',
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
                id: 'white-bishop',
                color: 'white',
                displayName: {
                    base: 'bishop',
                    fr: 'fou'
                },
                uchar: '\u2657'
            }),
            
        black:
            Unit.def.init({
                id: 'black-bishop',
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
                id: 'white-knight',
                color: 'white',
                displayName: {
                    base: 'knight',
                    fr: 'chevalier'
                },
                uchar: '\u2658'
            }),
            
        black:
            Unit.def.init({
                id: 'black-knight',
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
                id: 'white-rook',
                color: 'white',
                displayName: {
                    base: 'rook',
                    fr: 'tour'
                },
                uchar: '\u2659'
            }),
            
        black:
            Unit.def.init({
                id: 'black-rook',
                color: 'black',
                displayName: {
                    base: 'rook',
                    fr: 'tour'
                },
                uchar: '\u265f'
            })
    }
};
