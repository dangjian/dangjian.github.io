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
        title: 'JavaScript讲义',
        templateUrl: "JavaScriptClass/index.html"
    });
    $routeProvider.when("/javascriptclass/:classId", {
        title: 'JavaScript讲义',
        templateUrl: function(params){ return "JavaScriptClass/" + params.classId + ".html"}
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
}]);

app.run(['$rootScope', function($rootScope){
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
    $rootScope.compileCode = function() {
        SyntaxHighlighter.highlight();

        $(".collapse").collapse();
    };
}]);
