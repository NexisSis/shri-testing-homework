describe('проверка отображения страниц', () => {
    it('проверка правильности отображения истории', function() {
        return this.browser
            .url('/')
            .waitForExist('.content',1000)
            .url('/')
            .waitForExist('.commit__info',1000)
            .url('/')
            .waitForExist('.commit__author',1000)
    });
    it('проверка правильности отображения файловой системы', function() {
        return this.browser
            .url('/files/2dc1972ed39477c53a894dbc0bdb7ab67dab234c/')
            .waitForExist('.content',1000)
            .url('/files/2dc1972ed39477c53a894dbc0bdb7ab67dab234c/')
            .waitForExist('a',1000)
    });
    it('проверка правильности отображения файла', function() {
        return this.browser
            .url('/content/2dc1972ed39477c53a894dbc0bdb7ab67dab234c/.hermione.conf.js/')
            .waitForExist('.file-content',1000)
    });
});