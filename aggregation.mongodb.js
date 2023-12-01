use("MERN_DB");

db.movies_db.find(
  { name: "Under the Dome" },
  { name: 1, genres: 1, status: 1, _id: 0 }
);

// aggregation => powerful query tool

// pipeline stage
// ? $match, $sort, $skip, $limit
// ? $project, $unwind, $lookup, $group

// db.movies_db.aggregate([{

// }])
