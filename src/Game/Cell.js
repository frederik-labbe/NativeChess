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
            
            hasOwnUnit: function() {
                return this.hasUnit() && this.unit.color == Ctx.turn;
            },
            
            select: function() {
                this.selected = true;
            },
            
            unselect: function() {
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
            
            setPossibleLocked: function() {
                var cell = this._domElement;
                cell.className += ' cell-possible-locked';
                this.possible = true;
            },
            
            setImpossible: function() {
                var cell = this._domElement;
                cell.className = cell.className.replace('cell-possible', '');
                cell.className = cell.className.replace('cell-possible-locked', '');
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
            selected: false
        }
    }
};
