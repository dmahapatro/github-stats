package modules

import geb.Module

class SearchModule extends Module {
    static content = {
        searchField {
            $("input[id=searchTerm]")
        }
        searchButton {
            $("button")
        }
    }

    void search(String searchTerm = "Netflix") {
        searchField.value searchTerm
        searchButton.click()
    }
}
