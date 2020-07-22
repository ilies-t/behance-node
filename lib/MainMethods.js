"use strict";
/**
 * Behance-node v0.1.0
 *
 * @link <a href="https://github.com/ilies-t/behance-node">GitHub repository</a>
 * @author <a href="https://github.com/ilies-t">ilies t</a>
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
// import the required packages
const rp = require('request-promise');
const cheerio = require('cheerio');
// import CSS value to get the JSON elements in HTML
const settings = require('./settings.json');
class MainMethods {
    /**
     * Get JSON object from DOM.
     *
     * @param url URL to scrape.
     */
    static getJSONFromUrl(url) {
        return __awaiter(this, void 0, void 0, function* () {
            // search CSS value with cheerio
            const html = yield rp(url);
            const $ = cheerio.load(html);
            // filter to get only innerHTML
            const result = $(settings.jsonResponseCss, html)[0].children[0].data;
            // jsonify and return the result
            return JSON.parse(result);
        });
    }
    /**
     * Delete insignificant data about user.
     *
     * @param user User containing data to delete.
     */
    static deleteInsignificantUserData(user) {
        return __awaiter(this, void 0, void 0, function* () {
            delete user.config;
            delete user.gates;
            delete user.user;
            delete user.env;
            delete user.profile.adminPermissions;
            delete user.profile.admin;
            delete user.profile.checklist;
            delete user.profile.isReportModalVisible;
            delete user.profile.activeSection;
            delete user.profile.wip.uploader.postStoryStatusCode;
            delete user.profile.wip.uploader.sendSMSStatusCode;
            delete user.profile.wip.uploader.sessionId;
            delete user.profile.wip.uploader.isUploadModalVisible;
            delete user.profile.wip.uploader.shouldRedirectToLogin;
        });
    }
    /**
     * Delete insignificant data about project.
     *
     * @param project Project containing data to delete.
     */
    static deleteInsignificantProjectData(project) {
        return __awaiter(this, void 0, void 0, function* () {
            delete project.project.credits;
            delete project.project.cssPaths;
            delete project.project.admin;
            delete project.project.shareConfig;
            delete project.project.commentForm;
            delete project.project.urls;
            delete project.careers;
            delete project.config;
            delete project.footer;
            delete project.footerAnalytics;
            delete project.env;
            delete project.user;
            delete project.gates;
            delete project.projectAnalytics;
            delete project.onboardingAnalytics;
            delete project.downloadAppModal;
            delete project.downloadAppModalAnalytics;
        });
    }
}
exports.MainMethods = MainMethods;
//# sourceMappingURL=MainMethods.js.map