exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./pages/*/*.spec.js'],
    params: {
        url: 'https://www.etsy.com/'
    },
    suites: {
        cart: 'pages/cart/*.spec.js',
        login: 'pages/login/*.spec.js',
        search: 'pages/search/*.spec.js'
    },

    onPrepare: function(){
        browser.ignoreSynchronization = true;
    }
}