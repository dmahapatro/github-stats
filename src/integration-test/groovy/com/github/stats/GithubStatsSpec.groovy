package com.github.stats

import grails.test.mixin.integration.Integration
import pages.DashboardPage
import spock.lang.*
import geb.spock.*

@Integration
class GithubStatsSpec extends GebSpec {

    void "dashboard is loaded"() {
        when:"The home page is visited"
        go '/'

        then: 'github brand is shown'
        $('body .navbar-brand').text() == 'GitHub Statistics'

        and: 'search field is present'
        $('#searchTerm').isDisplayed()
        $('form').$('button').text() == 'Search'
    }

    void "test organizations are loaded when search is done"() {
        when:"The home page is visited"
        go '/'

        and:
        $("input[id=searchTerm]").value "Netflix"
        $('button').click()

        then: 'Organizations panel is shown'
        waitFor {
            $('#orgs').isDisplayed()
            $('#orgs .panel-heading').text().startsWith "Number of hits #"
            $('uib-accordion .panel-group').children().text() == "Netflix"
        }
    }
}
