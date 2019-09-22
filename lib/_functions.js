/*
    Behance-node v0.0.1
    Project: https://github.com/ilies-t/behance-node
    Author: ilies t <https://github.com/ilies-t>
    License: Apache License 2.0
*/

// import the required packages
const rp = require('request-promise');
const fs = require('fs');
const cheerio = require('cheerio');

// import CSS value to get the JSON elements in HTML
const settings = require('./settings.json');

var fun = {
    // delete insgnifiant user datas
    _deleteUser : _deleteUser = (__result) => {
        delete __result.config; delete __result.gates; delete __result.user; delete __result.env; delete __result.profile.adminPermissions; delete __result.profile.admin; delete __result.profile.checklist; delete __result.profile.isReportModalVisible; delete __result.profile.activeSection; delete __result.profile.wip.uploader.postStoryStatusCode; delete __result.profile.wip.uploader.sendSMSStatusCode; delete __result.profile.wip.uploader.sessionId; delete __result.profile.wip.uploader.isUploadModalVisible; delete __result.profile.wip.uploader.shouldRedirectToLogin;
    },

    // delete insgnifiant project datas
    _deleteProject : _deleteProject = (__result) => {
        delete __result.project.credits; delete __result.project.cssPaths; delete __result.project.otherProjects; delete __result.project.admin; delete __result.project.shareConfig; delete __result.project.commentForm; delete __result.project.urls; delete __result.config; delete __result.footer; delete __result.env; delete __result.user; delete __result.gates;
    },

    // JSON tag finder in DOM
    _jsonDOM : _jsonDOM = async (__link) => {

        // search CSS value with cheerio
        const html = await rp(__link);
        var $ = cheerio.load(html);
    
        // filter to get only the datas innerHTML
        var result = $(settings.jsonResponseCss, html)[0].children[0].data;
    
        // jsonify and return the result
        return JSON.parse(result);
    },

    // save JSON file
    _saver : _saver = (__result, __datasType, __directory) => {

        // if directory don't exists, create it
        if (!fs.existsSync(__directory)){
            fs.mkdirSync(__directory);
        };
    
        // write the datas in json file
        const jsonContent = JSON.stringify(__result, null, 4);
    
        // replace to clarify the name
        __datasType = __datasType.replace('-', '_');
        __datasType = __datasType.replace('/', '-');
    
        // write it
        fs.writeFile(`${__directory}/${__datasType}.json`, jsonContent, 'utf-8', (_err) => {
            if(_err) {
                console.log(`🔴️ ERROR with JSON save\n🔴️ ${_err}`);
            }
        });
    }

}

exports['default'] = fun;
module.exports = exports['default'];