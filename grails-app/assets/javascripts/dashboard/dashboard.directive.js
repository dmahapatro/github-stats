(function(){
    'use strict';

    angular.module('github.stats.dashboard.directive', [])
        .directive('githubOrgs', GithubOrgs)
        .directive('githubRepos', GithubRepos)
        .directive('githubCommits', GithubCommits)
        .directive('progressBar', ProgressBarInit);

    ProgressBarInit.$inject = ['$document'];

    function GithubOrgs() {
        return {
            restrict: 'E',
            templateUrl: 'orgs.html'
        }
    }

    function GithubRepos() {
        return {
            restrict: 'E',
            templateUrl: 'repos.html'
        }
    }

    function GithubCommits() {
        return {
            restrict: 'E',
            templateUrl: 'commits.html'
        }
    }

    /**
     * Initialize Progress Bar
     */
    function ProgressBarInit($document) {
        return function($scope, element) {
            if($scope.progressBar) {
                $scope.progressBar.setHeight('2px');
                $scope.progressBar.setParent($document[0].getElementById('dashboard'));
            }
        }
    }
})();