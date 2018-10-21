const git = require('../../utils/git');
const { expect } = require('chai');




describe("git.js", () => {
    it("проверка правильности формата возращаемых данных в gitHistory", async () => {
        const history = await git.gitHistory(1, 20);

        let exprectedKeys = ['author','hash','msg','timestamp'];

        history.forEach(data =>{
            expect(data).to.have.keys(exprectedKeys);
        });
    });

    it("проверка парсинга", async () => {
        const testString = '\nsd\nsd\n\n\nasdasd';
        // правильная проверка
        let expectedString = testString.split('\n').filter(Boolean);
        // реальная проверка
        let parsedString = git.parseGitString(testString);

        expectedString.forEach((item,i) =>{
            expect(item).to.be.equal(parsedString[i]);
        });
    });

    // it("проверка правильности формата возращаемых данных в gitFileTree", async () => {
    //     let mock;
    //     //ожидаемые
    //     const hash = '3317a60547129773e91cc024c1809d5a6625b88a';
    //     const path = 'folder/path';
    //     const res = await git.gitFileTree(hash,path);
    //     console.log(res);
    //
    //     const table = 'typehash\my\path';
    //     git.executeGit = async (params) => {
    //         mock = params;
    //         return await table;
    //     };
    // });
});