'use strict';

var rRepoURL = /^(?:(?:git|https?|git\+https|git\+ssh):\/\/)?(?:[^@]+@)?([^\/]+?)[\/:](.+?)\.git$/;
var rGithubPage = /\.github\.(io|com)$/;

/**
 * parseRepo 處理配置的git地址
 *
 * @param  {Object} repo git配置
 *
 * @return {objetc}      返回處理后的git配置
 */
function parseRepo(repo) {
    var split = repo.split(',');
    var url = split.shift();
    var branch = split[0];

    if (!branch && rRepoURL.test(url)) {
        var match = url.match(rRepoURL);
        var host = match[1];
        var path = match[2];

        if (host === 'github.com') {
            branch = rGithubPage.test(path) ? 'master' : 'gh-pages';
        } else if (host === 'coding.net') {
            branch = 'gitcafe-pages';
        }
    }

    return {
        url: url,
        branch: branch || 'temp'
    };
}

module.exports = function(args) {
    var repo = args.repo;
    if (!repo) throw new TypeError('repo is required!');

    if (typeof repo === 'string') {
        var data = parseRepo(repo);
        data.branch = args.branch || data.branch;

        return [data];
    }

    var result = [];
    var keys = Object.keys(repo);

    for (var i = 0, len = keys.length; i < len; i++) {
        result.push(parseRepo(repo[keys[i]]));
    }

    return result;
};