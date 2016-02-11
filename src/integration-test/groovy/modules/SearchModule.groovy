package modules

import geb.Module

class SearchModule extends Module {
    static content = {
        searchForm {$("form")}
        searchButton {$("input", value: "Search")}
    }

    void search(String searchTerm = "Netflix") {
        searchForm.searchTerm = searchTerm
        searchButton.click()
    }
}
