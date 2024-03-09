"use strict";
/**
 * Behance-node v1.0.0
 *
 * @link <a href="https://github.com/ilies-t/behance-node">GitHub repository</a>
 * @author <a href="https://github.com/ilies-t">ilies t</a>
 * @licence Apache Licence 2.0
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMethods = void 0;
// import the required packages
const cheerio = __importStar(require("cheerio"));
const axios_1 = __importDefault(require("axios"));
// import CSS value to get the JSON elements in HTML
const settings = __importStar(require("./settings.json"));
class MainMethods {
    /**
     * Get JSON object from DOM.
     *
     * @param url URL to scrape.
     */
    static async getJSONFromUrl(url) {
        // search CSS value with cheerio
        const html = await axios_1.default.get(url);
        const htmlData = html.data;
        const $ = cheerio.load(htmlData);
        // filter to get only innerHTML
        const result = $(settings.jsonResponseCss, htmlData)[0]['children'][0].data;
        // jsonify and return the result
        return JSON.parse(result);
    }
    /**
     * Delete insignificant data about user.
     *
     * @param user User containing data to delete.
     */
    static async deleteInsignificantUserData(user) {
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
    }
    /**
     * Delete insignificant data about project.
     *
     * @param project Project containing data to delete.
     */
    static async deleteInsignificantProjectData(project) {
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
    }
}
exports.MainMethods = MainMethods;
//# sourceMappingURL=MainMethods.js.map