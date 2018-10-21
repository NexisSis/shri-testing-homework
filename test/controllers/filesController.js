const index = require('../../controllers/indexController');
const { createFiles } = require('../../controllers/filesController');
const { expect } = require('chai');

describe("fileController.js", () => {
    it('проверка создания файла ', ()=> {
        const input = [
            {
                type: 'type',
                hash: 'hash',
                path: 'path'
            }
        ];
        const expectObj = [
            {
                type: 'type',
                hash: 'hash',
                path: 'path',
                href: '#',
                name:'path'
            }
        ];
        const result = createFiles(input,'hash');
        console.log(result);
        expect(expectObj).to.be.deep.equal(result);
    });
});