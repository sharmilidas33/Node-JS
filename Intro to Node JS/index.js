//By using npm we can install third party packages & modules.
//All third party values are stored in "node_modules" that I have accessed using a npm i.e. "npm i pdf-creator-node".

//(npm install) means that the node js will look into the package.json file and then install all dependencies to re-make (node_modules) folder.

//Required package
var pdf = require("pdf-creator-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("template.html", "utf8");

//For options
var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};

var users = [
    {
      name: "Shyam",
      age: "26",
    },
    {
      name: "Navjot",
      age: "26",
    },
    {
      name: "Vitthal",
      age: "26",
    },
  ];
  var document = {
    html: html,
    data: {
      users: users,
    },
    path: "./output.pdf",
    type: "pdf",
  };
  // By default a file is created but you could switch between Buffer and Streams by using "buffer" or "stream" respectively.

    pdf.create(document,options)
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.error(error);
    });
    