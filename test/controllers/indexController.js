const index = require('../../controllers/indexController');
const { createList } = require('../../controllers/indexController');
const { expect } = require('chai');

describe("indexController.js", () => {
    it('проверка создания ссылки ', ()=>{
        const input = [
            {
                hash: 'hash',
                author: 'author',
                timespamp :'timestamp',
                msg:'msg'
            }
        ];
        const expectObj = [
            {
                hash: 'hash',
                author: 'author',
                timespamp :'timestamp',
                msg:'msg',
                href:'/files/hash/'
            }
        ];
        const result = createList(input,'hash');

        expect(expectObj).to.be.deep.equal(result);

    });
});