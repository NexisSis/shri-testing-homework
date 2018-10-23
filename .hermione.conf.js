module.exports = {
    baseUrl: 'http://localhost:3000',
    gridUrl: 'http://localhost:4444/wd/hub',
    sets: {
        desktop: {
            files:'test/integration',
        }
    },
    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    },
    plugins:{
        'html-reporter/hermione':{
            path:'hermione-html-report'
        }
    }
};