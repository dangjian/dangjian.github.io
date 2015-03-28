/**
 * Copyright 2014 Erealm Info & Tech.
 *
 * Created by ken on 3/24/15
 */
angular.module('emailAutoComplete', [])
    .directive('emailAutoComplete', function ($compile, $timeout) {
        'use strict';

        return {
            restrict: 'A',
            replace: false,
            scope: {
                suggestions: '=optionList'
            },
            controller: ['$scope', function ($scope) {
                $scope.searchFilter = '';
                $scope.fillMail = function(value) {
                    if (!$scope.searchValue) return false;
                    if (value.indexOf($scope.searchFilter) === 0) {
                        return true;
                    } else {
                        return false;
                    }
                };
            }],
            link: function ($scope, elem, attrs) {

                var suggestionsDom = angular.element('\
          <ul class="ng-auto-complete" ng-show="searchValue && (suggestions | filter:fillMail).length > 0">\
            <li\
              ng-repeat="suggestion in suggestions | filter:fillMail "\
              index="{{ $index }}"\
              ng-class="{ active: ($index === selectedIndex) }"\
              ng-bind="searchValue + \'@\' +suggestion"></li>\
          </ul>');
                suggestionsDom.width(elem.innerWidth());
                var elemPosition = elem.position();
                suggestionsDom.css({
                    top: elemPosition.top + elem.outerHeight(true),
                    left: elemPosition.left,
                    position: 'absolute'
                });
                suggestionsDom.insertAfter(elem);
                $compile(suggestionsDom)($scope);

                elem.on('input', function(){
                    $scope.currentValue = $.trim(elem.val());
                    $timeout(function() {
                        if ($scope.currentValue !== $.trim(elem.val())){
                            return;
                        }
                        if (!$scope.currentValue) {
                            $scope.searchValue = '';
                            $scope.searchFilter = '';
                        } else {
                            var inputValues = $scope.currentValue.split('@');
                            $scope.searchValue = inputValues[0];
                            if (inputValues.length > 1) {
                                $scope.searchFilter = inputValues[1];
                            } else {
                                $scope.searchFilter = '';
                            }
                        }

                        $scope.$apply();
                        $scope.typing = false;
                    }, 500);
                });

                suggestionsDom.on('click', function(e) {
                    var selectValue = $(e.target).html();
                    if (selectValue) {
                        $scope.searchValue = '';
                        $scope.searchFilter = '';
                        $scope.$apply();
                        elem.val(selectValue);
                    }
                });
            }
        };
    }
);