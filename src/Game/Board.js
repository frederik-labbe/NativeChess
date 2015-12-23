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
                var board = this;
                var nx = board._nx;
                var ny = board._ny;
                var dom = board._dom;
                Array.from(Array(ny)).forEach(function(valueI, i) {
                    Array.from(Array(nx)).forEach(function(valueJ, j) {
                        var cell = Cell.def.init(dom, {
                            x: j,
                            y: i
                        });
                        
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
                            board.disableAllMoves();
                            c.enableMoves();
                        });
                        
                        cell.addEventListener('click', function(c) {
                            c.select();
                        });
                        
                        cell.appendTo('#board');
                        board.cells.push(cell);
                        
                        oddCell = !oddCell;
                    });
                    oddCell = !oddCell;
                });
            },
            
            disableAllMoves: function() {
                this.cells.forEach(function(cell) {
                    cell.setImpossible();
                });
            },
            
            getCell: function(x, y) {
                return this._dom.getElementAt(y*this._ny + x);
            },
    
            _nx: -1,
            _ny: -1,
    
            _dom: null,
            cells: []
        }
    }
};
