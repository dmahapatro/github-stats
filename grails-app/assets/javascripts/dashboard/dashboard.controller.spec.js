describe('dashboard.controller', function () {
    var $scope, $rootScope, createController, $q, $controller;
    var DashboardService;

    var mockedDashboardService = {
        searchOrgs: function(searchTerm) {
            var deferred = $q.defer();
            if(searchTerm === 'blah') {
                deferred.reject('No repo found');
                return deferred.promise;
            }
            deferred.resolve({
                items: [
                    {login: "Netflix"},
                    {login: "Nebula"}
                ]
            });
            return deferred.promise;
        },
        getRepos: function() {
            var deferred = $q.defer();
            deferred.resolve([
                {name: "grails-core"},
                {name: "grails-plugin"}
            ]);
            return deferred.promise;
        },
        getRecentCommits: function() {
            var deferred = $q.defer();
            deferred.resolve([
                {sha: "23hkjh55kjh4", committer: 'john doe'},
                {sha: "987asdewe123", committer: 'Billy Bob'}
            ]);
            return deferred.promise;
        }
    };

    beforeEach(function () {
        module('github.stats');

        inject(function (_$rootScope_, _DashboardService_, _$q_, _$controller_, ngProgressFactory) {
            $q = _$q_;
            $rootScope = _$rootScope_;
            DashboardService = _DashboardService_;
            $scope = $rootScope.$new();
            $controller = _$controller_;

            createController = $controller('DashboardController', {
                '$scope': $scope,
                'DashboardService': mockedDashboardService,
                'ngProgressFactory': ngProgressFactory
            });
        });
    });

    it('should search for organization and set view model with list of organizations', function(done){
        createController.searchOrgs().then(function(result){
            expect(createController.orgs).toBeDefined();
            expect(createController.orgs.length).toBe(2);
            expect(createController.orgs[0].login).toBe('Netflix');
        }).finally(done);
    });

    it('should populate erros if error is recieved from service', function(done){
        createController.searchTerm = 'blah';

        createController.searchOrgs().then(function(result){
            expect(createController.errors).toEqual('No repo found');
        }).finally(done);
    });

    it('should get list of repos for organization', function(done){
        createController.getRepos().then(function(result){
            expect(createController.repos).toBeDefined();
            expect(createController.repos.length).toBe(2);
            expect(createController.repos[0].name).toBe('grails-core');
        }).finally(done);
    });

    it('should get list of commits for a repo', function(done){
        createController.getRecentCommits({commit_url: 'foo/commits'}).then(function(result){
            expect(createController.commits).toBeDefined();
            expect(createController.commits.length).toBe(2);
            expect(createController.commits[0].committer).toBe('john doe');
        }).finally(done);
    });
});
