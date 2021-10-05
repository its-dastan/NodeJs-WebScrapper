const scrape = require('website-scraper');
const options = {
  urls: ['https://nodejs.org/en/'],
  directory: './node-homepage',
};
 
scrape(options).then((result) => {
  console.log('website downloaded successfully');
}).catch((err) => {
  console.log('an error ocurred', err)
})