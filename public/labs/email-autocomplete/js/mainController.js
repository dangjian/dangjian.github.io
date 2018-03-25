/**
 * Copyright 2014 Erealm Info & Tech.
 *
 * Created by ken on 3/24/15
 */

'use strict'

angular.module('app').controller('MainController', ['$scope', '$http',
    function($scope, $http) {

        $scope.optionList = [
            "qq.com",
            "163.com",
            "sina.com"
        ];

    }
]);