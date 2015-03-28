/**
 * Copyright 2014 Erealm Info & Tech.
 *
 * Created by ken on 3/24/15
 */

'use strict'

angular.module('app').controller('MainController', ['$scope', '$http',
    function($scope, $http) {

        $scope.optionList = [
            "gmail.com",
            "googlemail.com",
            "yahoo.com",
            "yahoo.co.uk",
            "hotmail.com",
            "hotmail.co.uk",
            "live.com",
            "msn.com",
            "comcast.net",
            "sbcglobal.net",
            "verizon.net",
            "facebook.com",
            "outlook.com",
            "att.net",
            "gmx.com",
            "icloud.com",
            "me.com",
            "mac.com",
            "aol.com"
        ];

    }
]);