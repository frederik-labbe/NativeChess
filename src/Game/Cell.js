Cell.def = {
    init: function(dom) {
        return this.model().init(dom);
    },
    
    model: function() {
        return {
            init: function(dom) {
                this._domElement = dom.link(this, 'div');
                this._dom = dom;
                return this;
            },
            
            setUnit: function(unit) {
                var elem = this._domElement;
                elem.innerHTML = unit.uchar;
                elem.textContent = unit.uchar;
                this.unit = unit;
            },
            
            showMoves: function() {
                //TODO(frederik-labbe): display possible moves
            },
            
            select: function() {
                //TODO(frederik-labbe): this is for handling testing purpose
                // one click on own unit --> highlight unit
                // then one click on possible move --> move unit
                if (this.state == 'light') {
                    this.setDark();
                } else {
                    this.setLight();
                }
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
            
            state: null,
            unit: null
        }
    }
};
