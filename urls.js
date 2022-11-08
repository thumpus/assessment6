const fs = require('fs');
const axios = require('axios');

let urls = process.argv[2];
let urlArray = [];

fs.readFile(urls, 'utf8', function(err, data){
    if (err){
        console.error(err);
        process.exit(1);
    }
    urlArray = data.split('\n');
    writeFiles(urlArray)
})

async function writeFiles(urls){
    for (url of urls){
        try{
            let resp = await axios.get(url);
            let html = resp.data;
            let filename = (resp.request.host + ".txt");
            fs.writeFile(filename, html, "utf8", function(err){
                if(err){
                    console.error(err);
                    process.exit(1);
                }
                console.log(`Successfully wrote ${filename}`)
            })
        } catch (e) {
            console.log(`couldn't retrieve html from ${url}`);
        }
    }
}


