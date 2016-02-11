package pages

import geb.Page
import modules.SearchModule

class DashboardPage extends Page {
    static url = "/"
    static at = { title.startsWith 'GitHub Stats' }

    static content = {
        searchModule { module SearchModule }
    }
}
