/**
 * Copyright 2014 Erealm Info & Tech.
 *
 * Created by ken on 4/13/15
 */

var app = angular.module('labs', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when("/home", {
        templateUrl: "home.html"
    });

    $routeProvider.when("/javascriptclass", {
        templateUrl: "JavaScriptClass/index.html"
    });
    $routeProvider.when("/javascriptclass/:classId", {
        templateUrl: function(params){ return "JavaScriptClass/" + params.classId + ".html"}
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
}]);

app.run(['$rootScope', function($rootScope){
    $rootScope.compileCode = function(event, next, current) {
        SyntaxHighlighter.highlight();

        $(".collapse").collapse();
    };
}]);
