/**
 * Behance-node v0.1.0
 *
 * @link <a href="https://github.com/ilies-t/behance-node">GitHub repository</a>
 * @author <a href="https://github.com/ilies-t">ilies t</a>
 * @licence Apache Licence 2.0
 */

// TODO: implements other interfaces

export interface IUser {
    id: number,
    first_name: string,
    last_name: string,
    username: string,
    city: string,
    state: string,
    country: string,
    location: string,
    company: string,
    occupation: string,
    created_on: number,
    url: string,
    profile_picture: string,
    banner_image_url: string,
    followers: number,
    following: number,
    appreciations: number,
    views: number,
    comments: number,
}