System.register(['@angular/core/testing', './range.query'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, range_query_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (range_query_1_1) {
                range_query_1 = range_query_1_1;
            }],
        execute: function() {
            testing_1.describe('Range query format', function () {
                // Set initial things
                // set expected query format
                var query;
                var expectedFormat = {
                    'range': {
                        'foo': {
                            'from': 1,
                            'to': 100
                        }
                    }
                };
                // instantiate query component and set the input fields 
                testing_1.beforeEach(function () {
                    query = new range_query_1.RangeQuery();
                    query.queryName = 'range';
                    query.fieldName = 'foo';
                    query.inputs = {
                        from: {
                            value: 1
                        }, to: {
                            value: 100
                        }
                    };
                });
                function isValidJson(str) {
                    try {
                        JSON.parse(str);
                    }
                    catch (e) {
                        return false;
                    }
                    return true;
                }
                // Test to check if queryformat is valid json
                testing_1.it('is valid json', function () {
                    var format = query.setFormat();
                    var validJson = isValidJson(JSON.stringify(format));
                    testing_1.expect(validJson).toEqual(true);
                });
                // Test to check if result of setformat is equal to expected query format.
                testing_1.it('Is setformat matches with expected query format', function () {
                    var format = query.setFormat();
                    testing_1.expect(format).toEqual(expectedFormat);
                });
            });
        }
    }
});
//# sourceMappingURL=range.query.spec.js.map