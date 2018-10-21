const { gitHistory } = require('../utils/git');
const { buildFolderUrl, buildBreadcrumbs } = require('../utils/navigation');
//const util = require('util');

function createList(history){
    return history.map(item => ({
        ...item,
        href: buildFolderUrl(item.hash, '')
    }));
}

function indexController(req, res) {
  gitHistory(1, 20).then(
    history => {
        //console.log(util.inspect(history, {showHidden: false, depth: null}));
        const list = createList(history);
        //console.log(util.inspect(list, {showHidden: false, depth: null}));
        res.render('index', {
            title: 'history',
            breadcrumbs: buildBreadcrumbs(),
            list
        });
    },
    err => next(err)
  );
};

module.exports = {
    createList,
    indexController
};