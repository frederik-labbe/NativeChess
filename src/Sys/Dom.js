Dom.def = {
    init: function(nx, ny) {
        return this.model().init(nx, ny);
    },
    
    model: function() {
        return {
            init: function(nx, ny) {
                this._mem = Mem.def.init(nx * ny);
                return this;
            },
            
            link: function(model, tagName) {
                var elem = document.createElement(tagName);
                this._mem.allocate(model);
                return elem;
            },
    
            unlink: function(index) {
                this._mem.deallocate(index);
            },
            
            appendTo: function(elem, selector) {
                document.querySelector(selector).appendChild(elem);
            },
    
            getElementAt: function(index) {
                var pos = this._mem.getPos(index);
                return this._mem.getValue(pos);
            },
            
            addEventListener: function(model, eventName, callback) {
                model.getElement().addEventListener(eventName, function(event) {
                    callback(model);
                }, false);
            },
    
            _mem: null
        }
    }
};
