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
            return RelativeMoves.def.getStraights().concat(RelativeMoves.def.getDiagonals());
        },
        
        canJumpOver: false
    },
    
    rook: {
        get base() {
            return RelativeMoves.def.getStraights();
        },
        
        canJumpOver: false
    },
    
    bishop: {
        get base() {
            return RelativeMoves.def.getDiagonals();
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
    
    getDiagonals: function() {
        var moves = [];
        Array.from(Array(Ctx.board.getDimension())).forEach(function(valueI, i) {
            moves.push({x:-i, y: i});
            moves.push({x:-i, y:-i});
            moves.push({x: i, y: i});
            moves.push({x: i, y:-i});
        });
        return moves;
    },
    
    getStraights: function() {
        var moves = [];
        Array.from(Array(Ctx.board.getDimension())).forEach(function(valueI, i) {
            moves.push({x:-i, y: 0});
            moves.push({x: i, y: 0});
            moves.push({x: 0, y: i});
            moves.push({x: 0, y:-i});
        });
        return moves;
    }
};
