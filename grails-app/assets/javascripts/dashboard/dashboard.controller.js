(function(){
    'use strict';

    angular.module('github.stats.dashboard.controller', [
        'ngProgress'
    ]).controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', 'DashboardService', 'ngProgressFactory'];

    function DashboardController($scope, DashboardService, ngProgressFactory) {
        var vm = this;
        $scope.progressBar = ngProgressFactory.createInstance();
        vm.noRepoMessage = '';
        vm.itemToOrder = 'name';
        vm.commitLimits = 2;
        vm.isOpen = true;
        vm.searchTerm = '';
        vm.searchHits = 0;
        vm.errors = [];
        vm.repos = [];
        vm.orgs = [];
        vm.commits = [];
        vm.getRepos = getRepos;
        vm.searchOrgs = searchOrgs;
        vm.getRecentCommits = getRecentCommits;

        /**
         * Entry point for getRepos service call
         *
         * @param repoUrl
         * @returns {*}
         */
        function getRepos(repoUrl) {
            $scope.progressBar.start();

            return DashboardService.getRepos(repoUrl).then(function(repos){
                vm.repos = repos;

                if(!vm.repos || vm.repos.length == 0) {
                    vm.noRepoMessage = 'No repository present for this Organization';
                } else {
                    vm.noRepoMessage = '';
                }
            }).catch(function(error){
                vm.errors = error;
            }).finally(function(){
                $scope.progressBar.complete();
            });
        }

        /**
         * Entry point for search organizations call
         *
         * @returns {*}
         */
        function searchOrgs() {
            $scope.progressBar.start();
            vm.repos = [];
            vm.commits = [];

            return DashboardService.searchOrgs(vm.searchTerm).then(function(result){
                if(result) {
                    vm.searchHits = result.total_count;
                    vm.orgs = result.items;
                }
            }).catch(function(error){
                vm.errors = error;
            }).finally(function(){
                $scope.progressBar.complete();
            });
        }

        /**
         * Entry point for getting recent commits
         * @param repo
         * @returns {*}
         */
        function getRecentCommits(repo) {
            $scope.progressBar.start();
            var url = repo.commits_url || '';

            return DashboardService.getRecentCommits(url).then(function(result){
                if(result) {
                    vm.commits = result;
                    vm.repoName = repo.name;
                }
            }).catch(function(error){
                vm.errors = error;
            }).finally(function(){
                $scope.progressBar.complete();
            });
        }
    }
})();