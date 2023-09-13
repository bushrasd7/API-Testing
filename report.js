const newman = require('newman');

newman.run({
    
    //collection: require("./Collection/DMoney.postman_collection.json"),
    collection: 'https://api.postman.com/collections/29421905-970b3721-a4fe-4327-8dd0-cf06336957b3?access_key=PMAT-01HA2J2R2EES6N9DXHX4SR3G74',
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html'
        }
    }
}, function(err) {

    if(err) {
        throw err;
    }
    console.log('collection run complete.');
});
