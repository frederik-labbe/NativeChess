Game.def = {
    init: function() {
        var board = Board.def.init(8, 8);
        board.drawGrid();
        
        Ctx.game = this;
    }
};
