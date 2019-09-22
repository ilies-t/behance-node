# Behance-node

An asynchronous library to scrape Behance.

## Install
```shell
npm i behance-node
```

## Usage
```js
const Behance = require('behance-node');
```

# Documentation
* [User informations](#user-informations)
* [User detailed informations](#user-detailed-informations)
* [Save user detailed informations](#save-user-detailed-informations)
* [Project informations](#project-informations)
* [Save project informations](#save-project-informations)
* [Random project](#random-project)

## User informations
Return result about user
```js
Behance.user(`nicholaslosacco`)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    });
```

## User detailed informations
Return detailed result about user
```js
Behance.detailledUser(`nicholaslosacco`)
    .then((detailledResult) => {
        console.log(detailledResult)
    })
    .catch((error) => {
        console.log(error)
    });
```

## Save user detailed informations
Save user detailed result in JSON file
```js
let user = `nicholaslosacco`;
let directory = `datas-folder`;

Behance.saveDetailledUser(user, directory)
    .then(() => {
        console.log(`${user}.json saved in ${directory}`)
    })
    .catch((error) => {
        console.log(error)
    });
```

## Project informations
Return detailed result about project
```js
Behance.project(`75651921/Cirka-Free-Typeface`)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error)
    })
```

## Save project informations
Save project result in JSON file
```js
let project = `75651921/Cirka-Free-Typeface`;
let directory = `datas-folder`;

Behance.saveProject(project, directory)
    .then(() => {
        console.log(`👌 saved`);
    })
    .catch((error) => {
        console.log(error)
    })
```

## Random project
Return random project from trending
```js
Behance.randomProject()
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
```

# License
[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)