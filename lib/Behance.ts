/**
 * Behance-node v0.1.0
 *
 * @link <a href='https://github.com/ilies-t/behance-node'>GitHub repository</a>
 * @author <a href='https://github.com/ilies-t'>ilies t</a>
 * @licence Apache Licence 2.0
 */

// import main methods
import { MainMethods } from './MainMethods';

/**
 * Main package class
 */
export class Behance {

    // methods

    /**
     * Get user information by username.
     *
     * @param username Desired username.
     * @param detailed Return more detail about user or not.
     */
    public static async user(username: string, detailed?: boolean): Promise<any | void> {

        // get JSON data with jsonDOM()
        return MainMethods.getJSONFromUrl(`https://www.behance.net/${username}`)

            .then((jsonResponse: any) => {

                // then return more data
                if (detailed) {

                    return MainMethods.deleteInsignificantUserData(jsonResponse)
                        .then(() => {
                            return jsonResponse;
                        });

                    // then return basic data
                } else {

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
    }

    /**
     * Get project data by project path.
     *
     * @param path Desired project path, must contain project id and name.
     */
    public static async project(path: string): Promise<any | void> {

        // get JSON data with jsonDOM()
        return MainMethods.getJSONFromUrl(`https://www.behance.net/gallery/${path}`)

            .then((jsonResponse: any) => {

                return MainMethods.deleteInsignificantProjectData(jsonResponse)
                    .then(() => {
                        return jsonResponse;
                    });

            });
    }

    /**
     * Get a random project data using sort.
     *
     * @param sort Type of sort.
     * @param time Date parameter for sort.
     */
    public static async randomProject(
        sort?: 'recommended' | 'curated' | 'most_appreciated' | 'most_viewed' | 'most_commented' | 'most_recent',
        time?: 'today' | 'this_week' | 'this_month' | 'all_time'
    ): Promise<any> {

        // unknown parameters
        if(
            ![undefined, null, 'recommended', 'curated', 'most_appreciated', 'most_viewed', 'most_commented', 'most_recent']
                .includes(sort) &&
            ![undefined, null, 'today', 'this_week', 'this_month', 'all_time'].includes(time)
        ) {
            throw new Error(`'${sort}' is not a valid sort parameter`);
        }

        // create url
        let URL: string = `https://www.behance.net/search`;
        let sortURL: string = ``;
        let timeURL: string = ``;
        let isTimeSortAllowed: boolean;

        // these cannot be sorted by date
        if(sort === 'recommended' || sort === 'curated' || sort === 'most_recent') {

            switch (sort) {

                case 'curated':
                    sortURL = 'featured_date';
                    break;

                case 'most_recent':
                    sortURL = 'published_date'
                    break;

                default:
                    sortURL = 'recommended';
                    break;
            }

            isTimeSortAllowed = false;
            URL += `?sort=${sortURL}`;

        }

        // these can be sorted by date
        else if(sort === 'most_appreciated' || sort === 'most_viewed' || sort === 'most_commented') {

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
        if(isTimeSortAllowed) {
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
        return MainMethods.getJSONFromUrl(URL)

            .then((jsonResponse: any) => {

                // get length of all projects
                const count: number = Object.keys(
                    jsonResponse.search.content.projects
                ).length;

                // random chose between all projects
                const theChosenOne = Math.floor(Math.random() * count);

                return jsonResponse.search.content.projects[theChosenOne];

            });

    }
}

module.exports = Behance;