/**
 * Behance-node v0.1.0
 *
 * @link <a href="https://github.com/ilies-t/behance-node">GitHub repository</a>
 * @author <a href="https://github.com/ilies-t">ilies t</a>
 * @licence Apache Licence 2.0
 */

'use strict';

const Behance = require('../index');

/**
 * Get user and project data to test.
 */
Behance.randomProject()
    .then((result) => {

        // define user data test
        let projectTest = result['url'].replace('https://www.behance.net/gallery/', '');

        // define project data test
        let userTest = result['owners'][0]['username'];

        // data tests are ready

        /**
         * Test `user()` method
         */
        Behance.user(userTest)
            .then((result) => {
                console.log(userTest);
                console.assert(
                    result !== undefined && result !== null,
                    'it should return desired user data'
                );
            });

        Behance.user(userTest, true)
            .then((result) => {
                console.assert(
                    result !== undefined && result !== null,
                    'it should return detailed desired user data'
                );
            });

        /**
         * Test `project()` method
         */
        Behance.project(projectTest)
            .then((result) => {
                console.assert(
                    result !== undefined && result !== null,
                    'it should return desired project data'
                );
            });

        /**
         * Test `randomProject()` method
         */
        Behance.randomProject()
            .then((result) => {
                console.assert(
                    result !== undefined && result !== null,
                    'it should return a random project sort by recommended'
                );
            });

        Behance.randomProject('recommended')
            .then((result) => {
                console.assert(
                    result !== undefined && result !== null,
                    'it should return a random project sort by recommended (specified sort)'
                );
            });

        Behance.randomProject('curated', 'all_time')
            .then((result) => {
                console.assert(
                    result !== undefined && result !== null,
                    'it should ignore time argument because sort'
                );
            });

        Behance.randomProject('most_appreciated', 'this_week')
            .then((result) => {
                console.assert(
                    result !== undefined && result !== null,
                    'it should return a random project sort by most appreciated and this week'
                );
            });

        Behance.randomProject('most_commented', 'all_time')
            .then((result) => {
                console.assert(
                    result !== undefined && result !== null,
                    'it should return a random project sort by most appreciated and this week'
                );
            });



    });