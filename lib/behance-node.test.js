"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 Behance-node v1.0.0
 *
 * @link <a href="https://github.com/ilies-t/behance-node">GitHub repository</a>
 * @author <a href="https://github.com/ilies-t">ilies t</a>
 * @licence Apache Licence 2.0
 */
const globals_1 = require("@jest/globals");
const Behance_1 = __importDefault(require("./Behance"));
(0, globals_1.describe)('Behance node module', () => {
    let randomProject, projectTest, userTest;
    (0, globals_1.beforeAll)(async () => {
        // define user/project data test
        randomProject = await Behance_1.default.randomProject();
        projectTest = randomProject['url'].replace('https://www.behance.net/gallery/', '');
        userTest = randomProject['owners'][0]['username'];
    });
    /**
     * Test `user()` method
     */
    (0, globals_1.test)('It should return desired user data', () => {
        Behance_1.default.user(userTest)
            .then((result) => {
            (0, globals_1.expect)(result).not.toBeNull();
        });
    });
    (0, globals_1.test)('It should return detailed desired user data', () => {
        Behance_1.default.user(userTest, true)
            .then((result) => {
            (0, globals_1.expect)(result).not.toBeNull();
        });
    });
    /**
     * Test `project()` method
     */
    (0, globals_1.test)('It should return desired project data', () => {
        Behance_1.default.project(projectTest)
            .then((result) => {
            (0, globals_1.expect)(result).not.toBeNull();
        });
    });
    /**
     * Test `randomProject()` method
     */
    (0, globals_1.test)('It should return a random project sort by recommended', () => {
        Behance_1.default.randomProject()
            .then((result) => {
            (0, globals_1.expect)(result).not.toBeNull();
        });
    });
    (0, globals_1.test)('It should return a random project sort by recommended (specified sort)', () => {
        Behance_1.default.randomProject('recommended')
            .then((result) => {
            (0, globals_1.expect)(result).not.toBeNull();
        });
    });
    (0, globals_1.test)('It should ignore time argument because sort', () => {
        Behance_1.default.randomProject('curated', 'all_time')
            .then((result) => {
            (0, globals_1.expect)(result).not.toBeNull();
        });
    });
    (0, globals_1.test)('It should return a random project sort by most appreciated and this week', () => {
        Behance_1.default.randomProject('most_appreciated', 'this_week')
            .then((result) => {
            (0, globals_1.expect)(result).not.toBeNull();
        });
    });
    (0, globals_1.test)('It should return a random project sort by most commented and this week', () => {
        Behance_1.default.randomProject('most_commented', 'all_time')
            .then((result) => {
            (0, globals_1.expect)(result).not.toBeNull();
        });
    });
});
//# sourceMappingURL=behance-node.test.js.map