'use strict';

(function (angular) {

    function validAlgorithm(algorithm) {
        return algorithms.some(function (key) {
            return key === algorithm;
        });
    }

    var algorithms = ['MD5', 'SHA1'],
        converter = angular.module('Converter', []);

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

