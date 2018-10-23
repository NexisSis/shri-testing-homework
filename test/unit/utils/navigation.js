const { buildBreadcrumbs,
        buildFolderUrl,
        buildFileUrl } = require('../../../utils/navigation');
const { expect } = require('chai');

describe("navigation.js", () => {
    it("проверка правильности формирования хлебных крошек без hash", async () => {

        const rootText = [
            { text: 'HISTORY', href: undefined }
        ];
        expect(rootText).to.deep.equal(buildBreadcrumbs());

    });
    it("проверка правильности формирования хлебных крошек c hash и path", async () => {

        const hash = '3317a60547129773e91cc024c1809d5a6625b88a';
        const path = 'path';
        const result = [
            { text: 'HISTORY', href: '/' },
            { text: 'ROOT', href: '/files/' + hash + '/' },
            { text: path }
        ];

        const breadCrumbs = buildBreadcrumbs(hash,path);
        expect(result).to.deep.equal(breadCrumbs);

    });
    it('проверка правильности возврата пути папки по хэшу', () => {

        const hash = '3317a60547129773e91cc024c1809d5a6625b88a';
        const path = 'path';

        const result = '/files/' + hash + '/' + path;
        const folderUrl = buildFolderUrl(hash, path);
        expect(result).to.be.equal(folderUrl);

    });

    it('проверка правильности возврата пути файла по хэшу', () => {

        const hash = '3317a60547129773e91cc024c1809d5a6625b88a';
        const path = 'path';

        const result = '/content/' + hash + '/' + path;
        const fileUrl = buildFileUrl(hash, path);
        expect(result).to.be.equal(fileUrl);

    });
});