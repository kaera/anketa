/** @requires BEM */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl('b-details', {

    onSetMod : {
        js: function() {
            this.domElem.details()
        }
    }

});

})();
