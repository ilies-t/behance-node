/*
    Behance-node v0.0.1
    Project: https://github.com/ilies-t/behance-node
    Author: ilies t <https://github.com/ilies-t>
    License: Apache License 2.0
*/

// import the required packages
const rp = require('request-promise');

// import some functions
const fun = require('./_functions');

// package ———————————————————————————————————————————————————————————————————————————————————————————————————
var Behance = {
    /*
    * user datas —————————————————————————————————————————————————————————————————————————————————————————————
    */
    user: user = async (_user) => {
        const link = `https://www.behance.net/${_user}`;
        rp(link)
            .then(jsonDatas = async () => {
                // get JSON datas with _jsonDOM()
                const jsonResp = await fun._jsonDOM(link);

                // make the response
                const result = {
                    id: jsonResp.profile.owner.id,
                    first_name: jsonResp.profile.owner.first_name,
                    last_name: jsonResp.profile.owner.last_name,
                    username: jsonResp.profile.owner.username,
                    city: jsonResp.profile.owner.city,
                    state: jsonResp.profile.owner.state,
                    country: jsonResp.profile.owner.country,
                    location: jsonResp.profile.owner.location,
                    company: jsonResp.profile.owner.company,
                    occupation: jsonResp.profile.owner.occupation,
                    created_on: jsonResp.profile.owner.created_on,
                    url: jsonResp.profile.owner.url,
                    profile_picture: jsonResp.profile.owner.images['276'],
                    banner_image_url: jsonResp.profile.owner.banner_image_url,
                    followers: jsonResp.profile.owner.stats.followers,
                    following: jsonResp.profile.owner.stats.following,
                    appreciations: jsonResp.profile.owner.stats.appreciations,
                    views: jsonResp.profile.owner.stats.views,
                    comments: jsonResp.profile.owner.stats.comments,
                };

                return result;
            })
            .catch((_err)=>{console.log(`🔴️ ${_err}\n🔴️ ERROR when get the profile data, Maybe the profile don't exist`)});
        return jsonDatas();
    },

    /*
    * detailled user datas ———————————————————————————————————————————————————————————————————————————————————
    */
    detailledUser: detailledUser = async (_user) => {
        const link = `https://www.behance.net/${_user}`;
        rp(link)
            .then(jsonDatas = async () => {
                // get JSON datas with _jsonDOM()
                const result = await _jsonDOM(link);

                // delete insignificant datas
                fun._deleteUser(result);

                return result;
            })
            .catch((_err)=>{console.log(`🔴️ ${_err}\n🔴️ ERROR when get the profile data, Maybe the profile don't exist`)});
        return jsonDatas();
   },

    /*
    * save user detailled datas in JSON file ———————————————————————————————————————————————————————————————————
    */
    saveDetailledUser: saveDetailledUser = async (_user, _directory) => {
        const link = `https://www.behance.net/${_user}`;
        rp(link)
            .then(jsonDatas = async () => {
                // get JSON datas with _jsonDOM()
                const result = await _jsonDOM(link);

                // delete insignificant datas
                fun._deleteUser(result);

                // save with _saver()
                fun._saver(result, _user, _directory);
            })
            .catch((_err)=>{console.log(`🔴️ ${_err}\n🔴️ ERROR when get the profile data, Maybe the profile don't exist`)});
    },

    /*
    * detailled datas about project ————————————————————————————————————————————————————————————————————————————————
    */
    project: project = async (_project) => {
        const link = `https://www.behance.net/gallery/${_project}`;
        rp(link)
            .then(jsonDatas = async () => {
                // get JSON datas with _jsonDOM()
                const result = await _jsonDOM(link);

                // delete not important datas
                fun._deleteProject(result);

                return result;
            })
            .catch((_err)=>{console.log(`🔴️ ${_err}\n🔴️ ERROR when get the project data, Maybe the project don't exist`)});
        return jsonDatas();
    },

    /*
    *  return detailled datas ————————————————————————————————————————————————————————————————————————————————
    */
    saveProject: saveProject = async (_project, _directory) => {
        const link = `https://www.behance.net/gallery/${_project}`;
        rp(link)
            .then(jsonDatas = async () => {
                // get JSON datas with _jsonDOM()
                const result = await _jsonDOM(link);

                // delete not important datas
                fun._deleteProject(result);

                // write the datas in json file
                fun._saver(result, _project, _directory);
            })
            .catch((_err)=>{console.log(`🔴️ ${_err}\n🔴️ ERROR when get the project data, Maybe the project don't exist`)});
        return jsonDatas();
    },

    /*
    *  return detailled datas ————————————————————————————————————————————————————————————————————————————————
    */
   randomProject: randomProject = async () => {
        const link = `https://www.behance.net/search?content=projects&sort=featured_date&time=today`;
        rp(link)
            .then(jsonDatas = async () => {
                // get JSON datas with _jsonDOM()
                const jsonResp = await _jsonDOM(link);

                // get number of project in JSON returned
                var objectInJSON = jsonResp.search.content.projects;
                var count = Object.keys(objectInJSON).length;

                // choose random a project in JSON
                const theChosenOne = Math.floor(Math.random() * count);
                const result = objectInJSON[theChosenOne];

                return result;
            })
            .catch((_err)=>{console.log(`🔴️ ${_err}\n🔴️ ERROR when get random project`)});
        return jsonDatas()
   },
    // just a function to test if the library is succesfully loaded
    safe:safe=(_err)=>{if(!_err){console.log(`✅ Library is succesfully loaded!`)}else{console.log(`🔴️ Library ERROR\n🔴️\t${_err}`)}}
}

exports['default'] = Behance;
module.exports = exports['default'];