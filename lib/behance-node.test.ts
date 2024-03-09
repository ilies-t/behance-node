/**
 Behance-node v1.0.0
 *
 * @link <a href="https://github.com/ilies-t/behance-node">GitHub repository</a>
 * @author <a href="https://github.com/ilies-t">ilies t</a>
 * @licence Apache Licence 2.0
 */
import { beforeAll, describe, expect, test } from '@jest/globals';
import Behance from './Behance';

describe('Behance node module', () => {
    let randomProject, projectTest, userTest;

    beforeAll(async () => {
        // define user/project data test
        randomProject = await Behance.randomProject();
        projectTest = randomProject['url'].replace('https://www.behance.net/gallery/', '');
        userTest = randomProject['owners'][0]['username'];
    });

    /**
     * Test `user()` method
     */
    test('It should return desired user data', () => {
        Behance.user(userTest)
            .then((result) => {
                expect(result).not.toBeNull();
            });
        });

    test('It should return detailed desired user data', () => {
        Behance.user(userTest, true)
            .then((result) => {
                expect(result).not.toBeNull();
            });
        });

    /**
     * Test `project()` method
     */
    test('It should return desired project data', () => {
        Behance.project(projectTest)
            .then((result) => {
                expect(result).not.toBeNull();
            });
        });

    /**
     * Test `randomProject()` method
     */
    test('It should return a random project sort by recommended', () => {
        Behance.randomProject()
            .then((result) => {
                expect(result).not.toBeNull();
            });
        });

    test('It should return a random project sort by recommended (specified sort)', () => {
        Behance.randomProject('recommended')
            .then((result) => {
                expect(result).not.toBeNull();
            });
        });

    test('It should ignore time argument because sort', () => {
        Behance.randomProject('curated', 'all_time')
            .then((result) => {
                expect(result).not.toBeNull();
            });
        });

    test('It should return a random project sort by most appreciated and this week', () => {
        Behance.randomProject('most_appreciated', 'this_week')
            .then((result) => {
                expect(result).not.toBeNull();
            });
        });

    test('It should return a random project sort by most commented and this week', () => {
        Behance.randomProject('most_commented', 'all_time')
            .then((result) => {
                expect(result).not.toBeNull();
            });
        });
});

