RelativeMoves.def = {
    king: {
        base: {
            movePaths: [
                [
                    {x:-1, y:-1},
                    {x:-1, y: 1},
                    {x: 1, y:-1},
                    {x: 1, y: 1}
                ]
            ]
        },
        
        canJumpOver: false
    },
    
    queen: {
        base: {
            get movePaths() {
                return RelativeMoves.def.getStraights(7).concat(RelativeMoves.def.getDiagonals(7));
            }
        },
        
        canJumpOver: false
    },
    
    rook: {
        base: {
            get movePaths() {
                return RelativeMoves.def.getStraights(7);
            }
        },
        
        canJumpOver: false
    },
    
    bishop: {
        base: {
            get movePaths() {
                return RelativeMoves.def.getDiagonals(7);
            }
        },
        
        canJumpOver: false
    },
    
    knight: {
        base: {
            movePaths: [
                [
                    {x:-2, y:1},
                    {x:-2, y:-1},
                    {x:-1, y:2},
                    {x:-1, y:-2},
                    {x:1, y:2},
                    {x:1, y:-2},
                    {x:2, y:1},
                    {x:2, y:-1}
                ]
            ]
        },
        
        canJumpOver: true
    },
    
    pawn: {
        first: {
            movePaths: [
                [
                    {x:0, y:1},
                    {x:0, y:2}
                ]
            ]
        },
        
        base: {
            movePaths: [
                [
                    {x:0, y:1}
                ]
            ]
        },
        
        canJumpOver: false
    },
    
    getDiagonals: function(count) {
        var movePaths = [[],[],[],[]];
        Array.from(Array(count)).forEach(function(valueI, i) {
            var next = i + 1;
            movePaths[0].push({x:-next, y: next});
            movePaths[1].push({x:-next, y:-next});
            movePaths[2].push({x: next, y: next});
            movePaths[3].push({x: next, y:-next});
        });
        return movePaths;
    },
    
    getStraights: function(count) {
        var movePaths = [[],[],[],[]];
        Array.from(Array(count)).forEach(function(valueI, i) {
            var next = i + 1;
            movePaths[0].push({x:-next, y: 0});
            movePaths[1].push({x: next, y: 0});
            movePaths[2].push({x: 0,    y: next});
            movePaths[3].push({x: 0,    y:-next});
        });
        return movePaths;
    }
};
