'use strict';

(function (angular) {

    var converter = angular.module('Converter', []);

    converter.filter('lowercase', function () {
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
            $scope.algorithms = ['MD5', 'SHA1'];
            $scope.converter = $routeParams.converter;
            $scope.hash = function() {
                return converterService.convert("MD5", $scope.userText);
            };
        }]);

    converter.factory('converterService', [function () {
        return {
            convert: function (algorithm, text) {

                if (text) {
                    return CryptoJS[algorithm](text).toString();
                }
                return "";
            }
        }
    }]);

}(window.angular));

