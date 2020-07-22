"use strict";
/**
 * Behance-node v0.1.0
 *
 * @link <a href='https://github.com/ilies-t/behance-node'>GitHub repository</a>
 * @author <a href='https://github.com/ilies-t'>ilies t</a>
 * @licence Apache Licence 2.0
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import main methods
const MainMethods_1 = require("./MainMethods");
/**
 * Main package class
 */
class Behance {
    // methods
    /**
     * Get user information by username.
     *
     * @param username Desired username.
     * @param detailed Return more detail about user or not.
     */
    static user(username, detailed) {
        return __awaiter(this, void 0, void 0, function* () {
            // get JSON data with jsonDOM()
            return MainMethods_1.MainMethods.getJSONFromUrl(`https://www.behance.net/${username}`)
                .then((jsonResponse) => {
                // then return more data
                if (detailed) {
                    return MainMethods_1.MainMethods.deleteInsignificantUserData(jsonResponse)
                        .then(() => {
                        return jsonResponse;
                    });
                    // then return basic data
                }
                else {
                    // make the response
                    return {
                        id: jsonResponse.profile.owner.id,
                        first_name: jsonResponse.profile.owner.first_name,
                        last_name: jsonResponse.profile.owner.last_name,
                        username: jsonResponse.profile.owner.username,
                        city: jsonResponse.profile.owner.city,
                        state: jsonResponse.profile.owner.state,
                        country: jsonResponse.profile.owner.country,
                        location: jsonResponse.profile.owner.location,
                        company: jsonResponse.profile.owner.company,
                        occupation: jsonResponse.profile.owner.occupation,
                        created_on: jsonResponse.profile.owner.created_on,
                        url: jsonResponse.profile.owner.url,
                        profile_picture: jsonResponse.profile.owner.images['276'],
                        banner_image_url: jsonResponse.profile.owner.banner_image_url,
                        followers: jsonResponse.profile.owner.stats.followers,
                        following: jsonResponse.profile.owner.stats.following,
                        appreciations: jsonResponse.profile.owner.stats.appreciations,
                        views: jsonResponse.profile.owner.stats.views,
                        comments: jsonResponse.profile.owner.stats.comments,
                    };
                }
            });
        });
    }
    /**
     * Get project data by project path.
     *
     * @param path Desired project path, must contain project id and name.
     */
    static project(path) {
        return __awaiter(this, void 0, void 0, function* () {
            // get JSON data with jsonDOM()
            return MainMethods_1.MainMethods.getJSONFromUrl(`https://www.behance.net/gallery/${path}`)
                .then((jsonResponse) => {
                return MainMethods_1.MainMethods.deleteInsignificantProjectData(jsonResponse)
                    .then(() => {
                    return jsonResponse;
                });
            });
        });
    }
    /**
     * Get a random project data using sort.
     *
     * @param sort Type of sort.
     * @param time Date parameter for sort.
     */
    static randomProject(sort, time) {
        return __awaiter(this, void 0, void 0, function* () {
            // unknown parameters
            if (![undefined, null, 'recommended', 'curated', 'most_appreciated', 'most_viewed', 'most_commented', 'most_recent']
                .includes(sort) &&
                ![undefined, null, 'today', 'this_week', 'this_month', 'all_time'].includes(time)) {
                throw new Error(`'${sort}' is not a valid sort parameter`);
            }
            // create url
            let URL = `https://www.behance.net/search`;
            let sortURL = ``;
            let timeURL = ``;
            let isTimeSortAllowed;
            // these cannot be sorted by date
            if (sort === 'recommended' || sort === 'curated' || sort === 'most_recent') {
                switch (sort) {
                    case 'curated':
                        sortURL = 'featured_date';
                        break;
                    case 'most_recent':
                        sortURL = 'published_date';
                        break;
                    default:
                        sortURL = 'recommended';
                        break;
                }
                isTimeSortAllowed = false;
                URL += `?sort=${sortURL}`;
            }
            // these can be sorted by date
            else if (sort === 'most_appreciated' || sort === 'most_viewed' || sort === 'most_commented') {
                switch (sort) {
                    case 'most_appreciated':
                        timeURL = 'appreciations';
                        break;
                    case 'most_viewed':
                        timeURL = 'views';
                        break;
                    case 'most_commented':
                        timeURL = 'comments';
                        break;
                }
                isTimeSortAllowed = true;
                URL += `?sort=${timeURL}`;
            }
            // append time
            if (isTimeSortAllowed) {
                switch (time) {
                    case 'today':
                        timeURL = 'today';
                        break;
                    case 'this_week':
                        timeURL = 'week';
                        break;
                    case 'this_month':
                        timeURL = 'month';
                        break;
                    case 'all_time':
                        timeURL = 'all';
                        break;
                    default:
                        timeURL = 'week';
                        break;
                }
                URL += `&time=${timeURL}`;
            }
            // get JSON data with jsonDOM()
            return MainMethods_1.MainMethods.getJSONFromUrl(URL)
                .then((jsonResponse) => {
                // get length of all projects
                const count = Object.keys(jsonResponse.search.content.projects).length;
                // random chose between all projects
                const theChosenOne = Math.floor(Math.random() * count);
                return jsonResponse.search.content.projects[theChosenOne];
            });
        });
    }
}
exports.Behance = Behance;
module.exports = Behance;
//# sourceMappingURL=Behance.js.map