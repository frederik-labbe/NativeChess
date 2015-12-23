Board.def = {
    init: function(nx, ny) {
        var board = this.model().init(nx, ny);
        Ctx.board = board;
        return board;
    },
    
    model: function() {
        return {
            init: function(nx, ny) {
                var dom = Dom.def.init(nx, ny);
                this._dom = dom;
                this._nx = nx;
                this._ny = ny;
                return this;
            },
            
            drawGrid: function() {
                var oddCell = true;
                var nx = this._nx;
                var ny = this._ny;
                var dom = this._dom;
                Array.from(Array(ny)).forEach(function(valueI, i) {
                    Array.from(Array(nx)).forEach(function(valueJ, j) {
                        var cell = Cell.def.init(dom);
                        if (oddCell) {
                            cell.setLight();
                        } else {
                            cell.setDark();
                        }
                        
                        if (InitialState.def.grid[i]) {
                            var unit = InitialState.def.grid[i][j];
                            cell.setUnit(unit);
                        }
                        
                        cell.addEventListener('mouseover', function(c) {
                            c.showMoves();
                        });
                        
                        cell.addEventListener('click', function(c) {
                            c.select();
                        });
                        
                        cell.appendTo('#board');
                        oddCell = !oddCell;
                    });
                    oddCell = !oddCell;
                });
            },
            
            getCell: function(x, y) {
                this._dom.getElementAt(y*this._ny + x);
            },
    
            _nx: -1,
            _ny: -1,
    
            _dom: null
        }
    }
};
