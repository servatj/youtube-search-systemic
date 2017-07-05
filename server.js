const System = require('systemic')
const R = require("ramda")
const YouTube = require('youtube-node');

var youTube = new YouTube();

youTube.setKey('AIzaSyAl_TdvVhetI338ND49IcwbNLf1CtIhtbg');

youTube.search('Meteor', 2, function(error, result) {
  if (error) console.log(error);
  console.log(JSON.stringify(result, null, 2));

});




