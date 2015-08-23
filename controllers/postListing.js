var MongoClient = require('mongodb').MongoClient;
var assert = require('assert')
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/masterdrive';

var postDriveway = function(db, startDate, endDate, address, city, state, zipcode, callback, photoUrl) {
	console.log("posting")
	db.collection('driveways').insert( { "merchant_id": "1", "address": address, "city": city, "zipcode": zipcode, "date_begin": parseInt(startDate), "date_end": parseInt(endDate), "photo_url": photoUrl } )
};

/**
 * GET /
 * Post Listing page.
 */
exports.postListing = function(req, res) {
  res.render('postListing', {
    title: 'Post Listing'
  });
};

/**
 * POST /
 * Post Listing page.
 */
exports.addListing = function(req, res) {
	MongoClient.connect(url, function(err, db) {
	  assert.equal(null, err);
	  console.log(req.params)
	  postDriveway(db, req.params.startDate, req.params.endDate, req.params.address, req.params.city, req.params.state, req.params.zipcode, req.params.photoUrl);
	});
  res.render('postListing', {
    title: 'Post Listing'
  });
};