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
                            if (!board.hasCellSelected()) {
                                if (board.hasCellFocused()) {
                                    board.unfocusCell(board.focusedCell);
                                }
                                if (board.moveOptions.length > 0) {
                                    board.disableAllMoves();
                                }
                                if (c.hasOwnUnit()) {
                                    board.focusCell(c);
                                    board.enableMoves(c);
                                }
                            }
                        });
                        
                        cell.addEventListener('click', function(c) {
                            if (c.hasOwnUnit()) {
                                if (!board.hasCellSelected(c)) {
                                    board.selectCell(c);
                                    board.lockMoveOptions();
                                } else if (c.isSelected()) {
                                    board.unselectCell(c);
                                    board.unlockMoveOptions();
                                }
                            } else if (c.possible) {
                                board.moveCellUnit(board.selectedCell, c);
                                board.disableAllMoves();
                                board.unselectCell(board.selectedCell);
                                Ctx.turn = Ctx.turn == 'black' ? 'white' : 'black';
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
                
                var relatives = RelativeMoves.def[unit.id];
                var canJump = relatives.canJumpOver;
                var movePaths;
                if (relatives.first && cell.firstMove) {
                    movePaths = relatives.first.movePaths;
                } else {
                    movePaths = relatives.base.movePaths;
                }
                
                var direction = Ctx.turn == 'black' ? 1 : -1;
                
                movePaths.forEach(function(movePath) {
                    var encounter = false;
                    
                    movePath.forEach(function(move) {
                        if (!encounter || canJump) {
                            var relativeX = cell.coord.x + move.x;
                            var relativeY = cell.coord.y + direction * move.y;
                        
                            if (relativeX >= 0 && relativeX < board._nx && relativeY >= 0 && relativeY < board._ny) {
                                var relativeCell = board.getCell(relativeX, relativeY);
                                
                                if (!relativeCell.hasUnit()) {
                                    board.moveOptions.push(relativeCell);
                                } else if (!canJump) {
                                    encounter = true;
                                }
                            }
                        }
                    });
                });
                
                board.moveOptions.forEach(function(moveOption) {
                    moveOption.setPossible();
                });
            },
            
            moveCellUnit: function(cellFrom, cellTo) {
                cellFrom.moveUnit(cellTo);
                cellFrom.unfocus();
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
                this.moveOptions.forEach(function(moveOption) {
                    moveOption.setImpossible();
                });
                this.moveOptions = [];
            },
            
            getCell: function(x, y) {
                return this._dom.getElementAt(y*this._ny + x);
            },
            
            focusCell: function(cell) {
                cell.focus();
                this.focusedCell = cell;
            },
            
            unfocusCell: function(cell) {
                cell.unfocus();
                this.focusedCell = null;
            },
            
            selectCell: function(cell) {
                cell.select();
                this.selectedCell = cell;
            },
            
            unselectCell: function(cell) {
                cell.unselect();
                this.selectedCell = null;
            },
            
            hasCellFocused: function() {
                return this.focusedCell ? true : false;
            },
            
            hasCellSelected: function() {
                return this.selectedCell ? true : false;
            },
            
            getDimension: function() {
                return this._nx;
            },
    
            _nx: -1,
            _ny: -1,
    
            _dom: null,
            cells: [],
            moveOptions: [],
            selectedCell: null,
            focusedCell: null
        }
    }
};
