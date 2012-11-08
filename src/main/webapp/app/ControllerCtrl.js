'use strict';

(function (angular) {

    var converter = angular.module('Converter', []),
        algorithms = ['MD5', 'SHA1'];

    converter.directive('measure', function ($timeout) {
        var continueProcessing = false,
            count = 0,
            measure = function (scope, fn) {
                if (continueProcessing) {
                    scope[fn]();
                    count++;
                    $timeout(function () {
                        measure(scope, fn);
                    });
                }
            },
            update = function (scope) {
                $timeout(function () {
                    scope.measurement = count + "/s";
                    count = 0;
                    if (continueProcessing) {
                        update(scope);
                    }
                }, 1000);
            };

        return {
            restrict: 'E',
            template: '<label for="checkPerformance">Measure Performance?<input id="checkPerformance" type="checkbox" ng-model="checkPerformance"/><div id="measurement">{{measurement}}</div></label>',
            link: function (scope, element, attrs) {
                scope.$watch('checkPerformance', function (value) {
                    continueProcessing = value;
                    if (continueProcessing) {
                        measure(scope, attrs.scopefunction);
                        update(scope);
                    }
                });
            }};
    });

    converter.filter('uppercase', function () {
        return function (text) {
            return text.toString().toUpperCase();
        };
    });

    converter.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/converter/:converter', {templateUrl: 'partials/algorithm.html', controller: 'ConverterCtrl'})
            .otherwise({redirectTo: '/'});
    }]);

    converter.controller('ConverterCtrl', ['$scope', '$routeParams', 'converterService',
        function ($scope, $routeParams, converterService) {
            $scope.algorithms = algorithms;
            $scope.converter = $routeParams.converter;
            $scope.hash = function () {
                return converterService.convert($scope.converter, $scope.userText);
            };
        }]);

    converter.factory('converterService', [function () {
        function validAlgorithm(algorithm) {
            return algorithms.some(function (key) {
                return key === algorithm;
            });
        }

        return {
            convert: function (algorithm, text) {
                if (text && validAlgorithm(algorithm)) {
                    return CryptoJS[algorithm](text).toString();
                }
                return "";
            }
        }
    }]);

}(window.angular));

