RelativeMoves.def = {
    king: {
        base: [
            {x:-1, y:-1},
            {x:-1, y: 1},
            {x: 1, y:-1},
            {x: 1, y: 1}
        ],
        
        canJumpOver: false
    },
    
    queen: {
        get base() {
            return RelativeMoves.def.getStraights(7).concat(RelativeMoves.def.getDiagonals(7));
        },
        
        canJumpOver: false
    },
    
    rook: {
        get base() {
            return RelativeMoves.def.getStraights(7);
        },
        
        canJumpOver: false
    },
    
    bishop: {
        get base() {
            return RelativeMoves.def.getDiagonals(7);
        },
        
        canJumpOver: false
    },
    
    knight: {
        base: [
            {x:-2, y:1},
            {x:-2, y:-1},
            {x:-1, y:2},
            {x:-1, y:-2},
            {x:1, y:2},
            {x:1, y:-2},
            {x:2, y:1},
            {x:2, y:-1}
        ],
        
        canJumpOver: true
    },
    
    pawn: {
        first: [
            {x:0, y:1},
            {x:0, y:2}
        ],
        
        base: [
            {x:0, y:1}
        ],
        
        canJumpOver: false
    },
    
    getDiagonals: function(count) {
        var moves = [];
        Array.from(Array(count)).forEach(function(valueI, i) {
            var next = i + 1;
            moves.push({x:-next, y: next});
            moves.push({x:-next, y:-next});
            moves.push({x: next, y: next});
            moves.push({x: next, y:-next});
        });
        return moves;
    },
    
    getStraights: function(count) {
        var moves = [];
        Array.from(Array(count)).forEach(function(valueI, i) {
            var next = i + 1;
            moves.push({x:-next, y: 0});
            moves.push({x: next, y: 0});
            moves.push({x: 0,    y: next});
            moves.push({x: 0,    y:-next});
        });
        return moves;
    }
};
