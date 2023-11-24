use("MERN_DB");
// ? find movies whose rating is 9
// db.movies_db.find({"rating.average":9})
// ? find movies whose rating is greater than 7 and less than
// db.movies_db.find({$and:[{"rating.average":{ $gt:7}},{"rating.average":{ $lt:9}}]});
// ! shortcut to the above method by just separating the parameters of search by commas and removing $and
// db.movies_db.find({"rating.average":{$gt:7},"rating.average":{$lt:9}},{name:1,rating:1})
// ! even more shortcut is by putting both gt and lt in same curly braces
// db.movies_db.find({"rating.average":{$gt:6,$lt:7}},{name:1,rating:1})
// ? and
// db.movies_db.find({$and:[{"rating.average":{$gte:8}},{status:"Ended"}]}).count()
// ? and: shortcut
// db.movies_db.find({"rating.average":{$gte:8},status:"Ended"}).count()
//? find movies whose status is Ended and runtime is 60
// db.movies_db.find({status:"Ended", runtime:60})
// ?find movies whose weight is 75 and network country is Canada
// db.movies_db.find({weight:75,"network.country.name":"Canada"})
// ?find movies whose weight is 96 or runtime is 60.
// ! the next parameter of the find method in the curly braces below says to the db just to show the name, weight and runtime from the object.

// ! _id being primary key is shown by default and if we don't want it we can define _id:0
// db.movies_db.find({$or:[{weight:96},{runtime:60}]},{name:1,weight:1,runtime:1,_id:0})

// ? find movies whose rating average is not 9
// db.movies_db.find({"rating.average":{$ne:9}},{name:1,"rating.average":1})
// ?find movies whose genre includes Action and Crime
// db.movies_db.find()
db.movies_db.find({ genres: { $all: ["Action", "Crime"] } });
// ? find movies whose status is ended
// db.movies_db.find({status:"Ended"})
// ? find movies whose genre is thriller
// db.movies_db.find({genres:"Thriller"})
// ? find movies whose genre size is 2
// db.movies_db.find({genres:{$size:2}},{genres:1,_id:0})
// find movies whose summery includes pacific
// db.movies_db.find({summary:{$regex:/pacific/i}})
// ! using $text for explicit search
// ? find movies whose rating average is either 6 or 6.5 or 9 or 8 or 8.5 or 8.6 or 7.7 or 6.1 or 7.8
// db.movies_db.find({"rating.average":{$in:[6,6.5,9,8,8.5,7.7,6.1,7.8]}})
