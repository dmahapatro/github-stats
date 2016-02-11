(function(){
    'use strict';

    angular.module('github.stats.dashboard.directive', [])
        .directive('githubOrgs', GithubOrgs)
        .directive('githubRepos', GithubRepos)
        .directive('githubCommits', GithubCommits);

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
})();