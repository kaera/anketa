/** @requires BEM */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl('b-details', {

    onSetMod : {
        js: function() {
            this.findElem('code').each(function() {
                hljs.highlightBlock(this)
            });
        }
    }

});

})();
