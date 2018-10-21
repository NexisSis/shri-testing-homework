const { gitFileTree } = require('../utils/git');
const {
  buildFolderUrl,
  buildFileUrl,
  buildBreadcrumbs
} = require('../utils/navigation');

function buildObjectUrl(parentHash, { path, type }) {
  switch (type) {
    case 'tree':
      return buildFolderUrl(parentHash, path);
    case 'blob':
      return buildFileUrl(parentHash, path);
    default:
      return '#';
  }
}

function createFiles(list,hash){
  return list.map(item => ({
        ...item,
        href: buildObjectUrl(hash, item),
        name: item.path.split('/').pop()
    }));
}

function filesController(req, res, next) {
  const { hash } = req.params;
  const pathParam = (req.params[0] || '').split('/').filter(Boolean);

  const path = pathParam.length ? pathParam.join('/') + '/' : '';

  return gitFileTree(hash, path).then(
    list => {
      const files = createFiles(list,hash);
      res.render('files', {
        title: 'files',
        breadcrumbs: buildBreadcrumbs(hash, pathParam.join('/')),
        files
      });
    },
    err => next(err)
  );
};

module.exports = {
    createFiles,
    filesController
}