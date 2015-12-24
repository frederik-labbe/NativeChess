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
                            if (!board.hasUnitSelected()) {
                                board.disableAllMoves();
                                if (c.hasOwnUnit()) {
                                    board.enableMoves(c);
                                }
                            }
                        });
                        
                        cell.addEventListener('click', function(c) {
                            if (c.hasOwnUnit() && !c.isSelected()) {
                                board.lockMoveOptions();
                                board.selectCell(c);
                            } else {
                                board.unlockMoveOptions();
                                board.unselectCell(c);
                            }
                        });
                        
                        cell.appendTo('#board');
                        board.cells.push(cell);
                        
                        oddCell = !oddCell;
                    });
                    oddCell = !oddCell;
                });
            },
            
            enableMoves: function(cell) {
                var unit = cell.unit;
                var board = this;
                board.moveOptions = [];
                
                var moves = RelativeMoves.def[unit.id];
                if (moves && moves.first && unit.firstMove) {
                    moves = moves.first;
                } else {
                    moves = moves.base;
                }
                
                board.moveOptions.push(cell);
                cell.setPossible();
                
                var relative = Ctx.turn == 'black' ? 1 : -1;
                moves.forEach(function(move) {
                    var relativeCell = board.getCell(
                        cell.coord.x + relative * move.x,
                        cell.coord.y + relative * move.y
                    );
                    board.moveOptions.push(relativeCell);
                    relativeCell.setPossible();
                });
            },
            
            lockMoveOptions: function() {
                this.moveOptions.forEach(function(cell) {
                    cell.setImpossible();
                    cell.setPossibleLocked();
                });
            },
            
            unlockMoveOptions: function() {
                this.moveOptions.forEach(function(cell) {
                    cell.setImpossible();
                    cell.setPossible();
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
            
            selectCell: function(cell) {
                cell.select();
                this.selectedCell = cell;
            },
            
            unselectCell: function(cell) {
                cell.unselect();
                this.selectedCell = null;
            },
            
            hasUnitSelected: function() {
                return this.selectedCell ? true : false;
            },
    
            _nx: -1,
            _ny: -1,
    
            _dom: null,
            cells: [],
            moveOptions: [],
            selectedCell: null,
        }
    }
};
