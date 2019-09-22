const Behance = require('../index');

// get project
Behance.project(`75651921/Cirka-Free-Typeface`)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error)
    })

// save project
let project = `75651921/Cirka-Free-Typeface`;
let directory = `datas-folder`;

Behance.saveProject(project, directory)
    .then(() => {
        console.log(`👌 saved`);
    })
    .catch((error) => {
        console.log(error)
    })

// random project
Behance.randomProject()
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })