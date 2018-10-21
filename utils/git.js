const { resolve } = require('path');
const REPO = resolve('.');

const { execFile } = require('child_process');

function parseGitString(data,historyItem){
  let result = data.split('\n').filter(Boolean);
  if(historyItem){
      result = result.map(historyItem);
  };
  return result;
}

function executeGit(cmd, args) {
  return new Promise((resolve, reject) => {
    execFile(cmd, args, { cwd: REPO }, (err, stdout) => {
      if (err) {
        reject(err);
      }
      resolve(stdout.toString());
    });
  });
}

function parseHistoryItem(line) {
  const [hash, author, timestamp, msg] = line.split('\t');
  return {
    hash,
    author,
    timestamp,
    msg
  };
}

function gitHistory(page = 1, size = 10) {
  const offset = (page - 1) * size;
  return executeGit('git', [
    'log',
    '--pretty=format:%H%x09%an%x09%ad%x09%s',
    '--date=iso',
    '--skip',
    offset,
    '-n',
    size
  ]).then(data => parseGitString(data,parseHistoryItem));

}

function parseFileTreeItem(line) {
  const [info, path] = line.split('\t');
  const [, type, hash] = info.split(' ');

  return { type, hash, path };
}

function gitFileTree(hash, path) {
  const params = ['ls-tree', hash];
  path && params.push(path);

  return executeGit('git', params).then(data => {
    return parseGitString(data,parseFileTreeItem);
  });

}

function gitFileContent(hash) {
  return executeGit('git', ['show', hash]);
}

module.exports = {
    gitHistory,
    gitFileTree,
    gitFileContent,
    parseGitString
};
