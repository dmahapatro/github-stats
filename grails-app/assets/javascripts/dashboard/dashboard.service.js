(function(){
    'use strict';

    angular.module('github.stats.dashboard.service', ['ngResource'])
        .factory('DashboardService', DashboardService);

    DashboardService.$inject = ['$resource', 'URL'];

    function DashboardService($resource, URL) {
        var searchOrgsUrl   = URL.base + '/search/users?q=type%3Aorg',
            reposForOrgUrl  = URL.base + '/orgs/:org/repos';

        /**
         * Service method to get repositories by Organization, return a Promise
         *
         * @param repoUrl
         * @returns {*|Function}
         */
        function getRepos(repoUrl) {
            var resource = $resource(
                repoUrl, {},
                {
                    get: {
                        method: 'GET',
                        isArray: true,
                        cache: true
                    }
                });


            return resource.get().$promise;
        }

        /**
         * Service method to search organizations by search term
         *
         * @param searchTerm
         * @returns {*|Function}
         */
        function searchOrgs(searchTerm) {
            var resource = $resource(searchOrgsUrl + '+' + searchTerm, {},
                {
                    get: {
                        method: 'GET',
                        cache: true
                    }
                });

            return resource.get().$promise;
        }

        /**
         * Service method to get recent commits for a repo
         *
         * @param commitsUrl
         * @returns {*|Function}
         */
        function getRecentCommits(commitsUrl) {
            // remove {/sha} from commits url
            commitsUrl = commitsUrl.substring(0, commitsUrl.indexOf('{'));

            var resource = $resource(commitsUrl, {},
                {
                    get: {
                        method: 'GET',
                        isArray: true,
                        cache: true
                    }
                });

            return resource.get().$promise;
        }

        return {
            getRepos: getRepos,
            searchOrgs: searchOrgs,
            getRecentCommits: getRecentCommits
        }
    }
})();