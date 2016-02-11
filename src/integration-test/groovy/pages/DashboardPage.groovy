package pages

import extensions.AngularJsAware
import geb.Page
import modules.SearchModule

class DashboardPage extends Page implements AngularJsAware {
    static url = "/"
    static at = {
        angularReady
    }

    static content = {
        searchModule {
            module SearchModule
        }
    }
}
