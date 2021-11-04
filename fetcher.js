const request = require ('request');
const fs = require('fs');
const url = process.argv[2]
const localFile = process.argv[3]


request(url, (error, response, body) => {

  fs.writeFile(`${localFile}`, body, function (error) {
    if (error) {
      console.log('ERROR OCCURED:' + error)
    } else {
      console.log('statusCode:', response.statusCode);
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ` + process.argv[3]);
    }
  }
  )
});
