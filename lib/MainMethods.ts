/**
 * Behance-node v1.0.0
 *
 * @link <a href="https://github.com/ilies-t/behance-node">GitHub repository</a>
 * @author <a href="https://github.com/ilies-t">ilies t</a>
 * @licence Apache Licence 2.0
 */

// import the required packages
import * as cheerio from 'cheerio';
import axios from 'axios'

// import CSS value to get the JSON elements in HTML
import * as settings from './settings.json';

export class MainMethods {

    /**
     * Get JSON object from DOM.
     *
     * @param url URL to scrape.
     */
    public static async getJSONFromUrl(url: string): Promise<any> {

        // search CSS value with cheerio
        const html = await axios.get(url);
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
    public static async deleteInsignificantUserData(user: any): Promise<void> {
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
    public static async deleteInsignificantProjectData(project: any): Promise<void> {
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