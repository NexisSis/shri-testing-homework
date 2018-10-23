const { assert } = require('chai');

describe('проверка хлебных крошек', () => {
    it('проверка правильности хлебных крошек', function() {
        return this.browser
            .url('/')
            .getText('.breadcrumbs')
            .then(text =>
                assert.isOk(text === 'HISTORY', 'неправильные хлебные крошки')
            )
            .click('a')
            .getText('.breadcrumbs')
            .then(text =>
                assert.isOk(text === 'HISTORY / ROOT', 'неправильные хлебные крошки')
            )
            .url('/files/2dc1972ed39477c53a894dbc0bdb7ab67dab234c/controllers')
            .getText('.breadcrumbs')
            .then(text =>
                  assert.isOk(text == 'HISTORY / ROOT / controllers', 'неправильные хлебные крошки')
            )
    });
});