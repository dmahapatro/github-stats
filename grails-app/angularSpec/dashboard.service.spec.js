describe('dashboard service', function(){
    var service, $httpBackend;

    beforeEach(function(){
        module('github.stats');

        inject(function(DashboardService, _$httpBackend_){
            service = DashboardService;
            $httpBackend = _$httpBackend_;
        });
    });

    it('test search organizations', function(done){
        var searchTerm = 'Netf';
        $httpBackend.expectGET('https://api.github.com/search/users?q=type%3Aorg+'+searchTerm).respond(200, {
            items: [
                {login: 'Netjets'},
                {login: 'NetFlix'}
            ]
        });

        expect(service).toBeDefined();

        service.searchOrgs(searchTerm).then(function(result){
            expect(result.items[0].login).toEqual('Netjets');
            expect(result.items[1].login).toEqual('NetFlix');
        }).finally(done);

        $httpBackend.flush();
    });

    it('test get list of repo for Organization', function(done){
        $httpBackend.expectGET('https://api.github.com/foo/commits').respond(200, [
            {name: 'asgard'},
            {name: 'spinnaker'}
        ]);

        expect(service).toBeDefined();

        service.getRepos('https://api.github.com/foo/commits').then(function(result){
            expect(result[0].name).toEqual('asgard');
            expect(result[1].name).toEqual('spinnaker');
        }).finally(done);

        $httpBackend.flush();
    });
});