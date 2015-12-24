Cell.def = {
    init: function(dom, coord) {
        return this.model().init(dom, coord);
    },
    
    model: function() {
        return {
            init: function(dom, coord) {
                this._domElement = dom.link(this, 'div');
                this._dom = dom;
                this.coord = coord;
                return this;
            },
            
            setUnit: function(unit) {
                var elem = this._domElement;
                elem.innerHTML = unit.uchar;
                elem.textContent = unit.uchar;
                this.unit = unit;
            },
            
            enableMoves: function() {
                if (this.unit && this.unit.color == Ctx.turn) {
                    var board = Ctx.board;
                    
                    var moves = RelativeMoves.def[this.unit.id];
                    if (moves && moves.first && this.unit.firstMove) {
                        moves = moves.first;
                    } else {
                        moves = moves.base;
                    }
                    
                    var cell = this;
                    cell.setPossible();
                    
                    var relative = Ctx.turn == 'black' ? 1 : -1;
                    moves.forEach(function(move) {
                        board.getCell(
                            cell.coord.x + relative * move.x,
                            cell.coord.y + relative * move.y
                        ).setPossible();
                    });
                }
            },
            
            select: function() {
                Ctx.board.selectCell(this);
                this.selected = true;
            },
            
            unselect: function() {
                Ctx.board.unselectCell();
                this.selected = false;
            },
            
            moveUnit: function(x, y) {
                //TODO(frederik-labbe): move unit to coordinate x,y
            },
    
            setLight: function() {
                var cell = this._domElement;
                cell.className = 'cell-light';
                this.state = 'light';
            },
    
            setDark: function() {
                var cell = this._domElement;
                cell.className = 'cell-dark';
                this.state = 'dark';
            },
            
            setPossible: function() {
                var cell = this._domElement;
                cell.className += ' cell-possible';
                this.possible = true;
            },
            
            setImpossible: function() {
                var cell = this._domElement;
                cell.className = cell.className.replace('cell-possible', '');
                this.possible = false;
            },
            
            appendTo: function(selector) {
                var elem = this._domElement;
                this._dom.appendTo(elem, selector);
            },
            
            addEventListener: function(eventName, callback) {
                var _this = this;
                this._dom.addEventListener(_this, eventName, callback);
            },
            
            getElement: function() {
                return this._domElement;
            },
            
            _domElement: null,
            _dom: null,
            
            coord: {},
            state: null,
            possible: false,
            unit: null,
            selected: false
        }
    }
};
