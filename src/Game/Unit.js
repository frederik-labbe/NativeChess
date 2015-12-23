Unit.def = {
    init: function(typeDef) {
        return this.model().init(typeDef);
    },
    
    model: function() {
        return {
            init: function(typeDef) {
                this.id = typeDef.id;
                this.color = typeDef.color;
                this.displayName = typeDef.displayName;
                this.uchar = typeDef.uchar;
                return this;
            },
            
            id: null,
            displayName: null,
            uchar: null
        }
    }
};
