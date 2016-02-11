package com.github.stats

import grails.test.mixin.integration.Integration
import pages.DashboardPage
import spock.lang.*
import geb.spock.*

@Integration
@Stepwise
class GithubStatsSpec extends GebSpec {

    @Ignore
    void "test something"() {
        when:"The home page is visited"
        go '/'

        then:
        title == 'GitHub Stats'
    }
}
