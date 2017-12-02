const selectors = require("../test_data/css_selectors")
// const data = require("../test_data/test_data")

modules.export = {
    beforeEach: browser => {
        browser.url('http://www.budgetwithquincy.com')
    },
    after: browser => {
        browser.end()
    },
    'clicking on each button should load the appropriate link': browser => {
        browser
        .click(selectors.links.Home)
        .click(selectors.links.Help)
        .click(selectors.links.Templates)
        .click(selectors.links.Videos)
        .click(selectors.links.Quincy)
        .click(selectors.links.Support)
        .click(selectors.links.Contact)
        .click(selectors.links.Store)
    }
}