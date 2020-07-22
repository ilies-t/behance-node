# Behance-node
[![NPM Version](https://img.shields.io/npm/v/behance-node.svg)](https://npmjs.org/package/behance-node)
[![Strict TypeScript Checked](https://badgen.net/badge/Built%20With/TypeScript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

An asynchronous module for scrapping Behance using JavaScript.

## Install
```shell
npm i behance-node
```

## Usage
```js
const Behance = require('behance-node');
```

# Documentation
* [User data](#user-data)
* [Project data](#project-data)
* [Random project](#random-project)

## User data
Return data about user.
* Method:
    * `user(username: string, detailed?: boolean)`
* Parameters:

    | Name       | Type                                                                                              | Info                                                                                       |
    | ---------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
    | `username` | string                                                                                            | Desired username                                                                           |
    | `detailed` | boolean                                                                                           | Return more detail about user or not                                                       |

* Example:
    * Get detailed data about this user `https://www.behance.net/moesalah`.
        ```js
        Behance.user('moesalah', true)
            .then( result => console.log(result) )
            .catch( error => console.log(error) );
        ```

## Project data
Return data about project.
* Method:
    * `project(path: string)`
* Parameter:

    | Name       | Type                                                                                              | Info                                                                                       |
    | ---------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
    | `path`     | string                                                                                            | Desired project path, must contain project id and name                                     |

* Example:
    * Get data about this project `https://www.behance.net/gallery/77156181/Amazon-Rebranding-UI-Concept`.
        ```js
        Behance.project('77156181/Amazon-Rebranding-UI-Concept')
            .then( result => console.log(result) )
            .catch( error => console.log(error) );
        ```

## Random project
Get a random project data using sort.
* Method:
    * `
      randomProject(
          sort?: 'recommended' | 'curated' | 'most_appreciated' | 'most_viewed' | 'most_commented' | 'most_recent',
          time?: 'today' | 'this_week' | 'this_month' | 'all_time'
      )
      `
* Parameters:

    | Name       | Type                                                                                              | Info                                                                                       |
    | ---------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
    | `sort`     | `recommended`, `curated`, `most_appreciated`, `most_viewed`, `most_commented`, `most_recent`      | Only `most_appreciated`, `most_viewed`, `most_commented` can be used with `time` parameter |
    | `time`     | `today`, `this_week`, `this_month`, `all_time`                                                    | Sort result by date                                                                        |

* Examples:
    * Get a random project from most viewed this week.
        ```js
        Behance.randomProject('most_viewed', 'this_week')
            .then( result => console.log(result) )
            .catch( error => console.log(error) );
        ```
    * Get a random curated project.
        ```js
        Behance.randomProject('curated')
            .then( result => console.log(result) )
            .catch( error => console.log(error) );
        ```

# Links
* [NPM Package](https://www.npmjs.com/package/behance-node)
* [Moe Salah - artist from documentation examples](https://www.behance.net/moesalah)

# License
[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)