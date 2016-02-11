package extensions

trait AngularJsAware {

    boolean isAngularReady() {
        js.exec('window.MYAPP.waitForAngular();');
        waitFor {
            js.CRATE.APP_READY == true
        }
    }
}