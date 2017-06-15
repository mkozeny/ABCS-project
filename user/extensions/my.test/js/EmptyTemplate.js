define([], function () {

    'use strict';

    /**
     * Implementation of {@link extensions.dt/js/spi/ExtensionManager} SPI.
     *
     * @see {@link extensions.dt/js/spi/ExtensionManager}
     * @returns {EmptyTemplate}
     */
    function EmptyTemplate() {
    }

    EmptyTemplate.prototype.initialise = function (dependencies) {
        //TODO inisialise your extension here.
        //
        //If the initialisation requires an asynchronous operation
        //it is important that this function returns a Promise
        //of that operation result.
        //
        //You may possibly use the information passed via the dependencies
        //argument in your initialisation code.
    };

    EmptyTemplate.prototype.destroy = function (dependencies) {
        //TODO destroy your extension here.
        //
        //If the destroy requires an asynchronous operation
        //it is important that this function returns a Promise
        //of that operation result.
        //
        //You may possibly use the information passed via the dependencies
        //argument in your initialisation code.
    };

    EmptyTemplate.prototype.generateRuntimeCode = function (dependencies) {
        //TODO return a piece of javascript code which is responsible
        //for the extension initialisation in runtime.
        //See {@link extensions.dt/js/spi/ExtensionManager#generateRuntimeCode ExtensionManager.generateRuntimeCode}
    };

    return new EmptyTemplate();

});