use("MERN_DB");

// ? Retrieve the names of movies that premiered on a Sunday.
// db.movies_db.find({"schedule.days": "Friday"})
// ?  retrieve the names and average ratings of the first three movies in the collection.
// db.movies_db.find({}, { name: 1, "rating.average": 1 }).limit(5);
// ? Find the names and genres of the movies that are currently running (status: "Running") and sort them in descending order based on their average ratings
db.movies_db
  .find({ status: "Running" }, { name: 1, genres: 1, rating: 1 })
  .sort({ "rating.average": -1 });
