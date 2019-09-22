const Behance = require('../index');

// get user
Behance.user(`nicholaslosacco`)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    });

// get detailled user
Behance.detailledUser(`nicholaslosacco`)
    .then((detailledResult) => {
        console.log(detailledResult)
    })
    .catch((error) => {
        console.log(error)
    });

// save detailled user
let user = `nicholaslosacco`;
let directory = `datas-folder`;

Behance.saveDetailledUser(user, directory)
    .then(() => {
        console.log(`${user}.json saved in ${directory}`)
    })
    .catch((error) => {
        console.log(error)
    });