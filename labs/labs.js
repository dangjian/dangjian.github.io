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

    $routeProvider.when("/pathmenu", {
        title: '仿Path菜单',
        templateUrl: 'pathmenu/index.htm',
        action: function() {
            $('#menu-container').pathmenu({ base: '#base_button', direction: 'topright', width: 150 });
            $('#direction_list').bind('change', function (e) {
                var direction = e.target.value;
                var width = 150;
                if (direction == 'right' || direction == 'left') width = 400;
                $('#menu-container').pathmenu({ base: '#base_button', direction: direction, width: width });
            })
        }
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

app.directive('head', ['$rootScope','$compile',
    function($rootScope, $compile){
        return {
            restrict: 'E',
            link: function(scope, elem){
                var html = '<link rel="stylesheet" ng-repeat="(routeCtrl, cssUrl) in routeStyles" ng-href="{{cssUrl}}" >';
                elem.append($compile(html)(scope));

                scope.routeStyles = {};

                $rootScope.$on('$routeChangeStart', function (e, next, current) {

                    if(current && current.$$route && current.$$route.css){
                        if(!Array.isArray(current.$$route.css)){
                            current.$$route.css = [current.$$route.css];
                        }
                        angular.forEach(current.$$route.css, function(sheet){
                            delete scope.routeStyles[sheet];
                        });
                    }

                    if(next && next.$$route && next.$$route.css){
                        if(!Array.isArray(next.$$route.css)){
                            next.$$route.css = [next.$$route.css];
                        }
                        angular.forEach(next.$$route.css, function(sheet){
                            scope.routeStyles[sheet] = sheet;
                        });
                    }

                });

            }
        };
    }
]);
