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
            
            removeUnit: function() {
                var elem = this._domElement;
                elem.innerHTML = '';
                elem.textContent = '';
                this.unit = null;
            },
            
            hasOwnUnit: function() {
                return this.hasUnit() && this.unit.color == Ctx.turn;
            },
            
            select: function() {
                this.selected = true;
            },
            
            unselect: function() {
                this.selected = false;
            },
            
            moveUnit: function(cell) {
                cell.setUnit(this.unit);
                cell.firstMove = false;
                this.removeUnit();
                this.firstMove = true;
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
            
            setPossibleLocked: function() {
                var cell = this._domElement;
                cell.className += ' cell-possible-locked';
                this.possible = true;
            },
            
            focus: function() {
                var cell = this._domElement;
                cell.className += ' cell-focus';
                this.focused = true;
            },
                        
            unfocus: function() {
                var cell = this._domElement;
                cell.className = cell.className.replace(' cell-focus', '');
                this.focused = false;
            },
            
            setImpossible: function() {
                var cell = this._domElement;
                cell.className = cell.className.replace(' cell-possible-locked', '');
                cell.className = cell.className.replace(' cell-possible', '');
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
            
            hasUnit: function() {
                return this.unit ? true : false;
            },
            
            isSelected: function() {
                return this.selected ? true : false;
            },
            
            _domElement: null,
            _dom: null,
            
            coord: {},
            state: null,
            possible: false,
            unit: null,
            selected: false,
            focused: false,
            
            firstMove: true
        }
    }
};
