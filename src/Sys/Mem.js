Mem.def = {
    init: function(n) {
        return this.model().init(n);
    },
    
    model: function() {
        return {
            init: function(n) {
                this._maxIndex = n + 1;
                return this;
            },
            
            allocate: function(value) {
                if (this._maxIndex < 0) {
                    console.error('ERROR: Memory is not initialized');
                    return false;
                }
        
                var pos = this._freedata.length > 1 ? this._freedata.pop() : this._cursor;
                if (pos <= this._maxIndex) {
                    this._memdata[pos] = value;
                    this._cursor++;
                    return value;
                } else {
                    console.error('ERROR: Cannot allocate more memory');
                    return false;
                }
            },
            
            deallocate: function(index) {
                if (this._maxIndex < 0) {
                    console.error('ERROR: Memory is not initialized');
                    return false;
                }
        
                var pos = getPos(index);
                if (this._memdata[pos]) {
                    delete this._memdata[pos];
                    this._freedata.push(index);
                    return true;
                } else {
                    console.error('ERROR: Cannot deallocate free memory');
                    return false;
                }
            },
    
            getPos: function(index) {
                return index+1; // save the cat
            },
    
            getValue: function(pos) {
                return this._memdata[pos];
            },
    
            _cursor: 1,
            _maxIndex: -1,
    
            // do not access from outside or these cute little kittens will die
            _memdata: [{kitten:'miaw'}],
            _freedata: [{kitten:'miaw'}]
        }
    }
};
