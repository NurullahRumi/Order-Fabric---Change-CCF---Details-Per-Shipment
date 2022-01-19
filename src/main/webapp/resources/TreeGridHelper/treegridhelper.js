(function() {
    'use strict';


    /*
     * TreeGrid data needs to be placed in Body property and in array wrapper
     * by another array.
     *
     * @param data {array} Data
     *
     * @return     {object}
     */
    function prepareTableData(data) {
        return {
            Body: [data]
        };
    }


    /*
     * # TreeGrid
     *
     * TreeGrid module that sets all basic stuff so we don't need to bother with
     * them over and over again later.
     *
     * @return {function} Helper function that creates TreeGrid table
     */
    angular.module('TreeGridHelper', [])
        .factory('TreeGridHelper', function() {

            /*
             * Creates TreeGrid table. Basicaly it prepares data, and layout
             * and sets TreeGrid to export data in JSON format (default is XML),
             * because it's easier to work with JSON in javascript.
             *
             * @param elementId {string} ID of an element that will be containg a table
             * @param options   {object} Object with options
             *
             * @note
             *   options = {
             *   	 data: <array>
             *   	 layout: <object>
             *   }
             *
             * @return {object} TreeGrid table
             */
            function create(elementId, options) {
                var table = TreeGrid({
                    Data: {
                        Data: prepareTableData(options.data)
                    },
                    Layout: {
                        Data: options.layout
                    },
                    Upload: {
                        Format: 'JSON',
                        Xml: 2,
                        Type: 'body'
                    },
                }, elementId);

                return table;
            }

            return create;
        });
})();