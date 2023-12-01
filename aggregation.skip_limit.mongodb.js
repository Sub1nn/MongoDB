use("MERN_DB");

// db.movies_db.find(
//   { name: "Under the Dome" },
//   { name: 1, genres: 1, status: 1, _id: 0 }
// );

// aggregation => powerful query tool

// pipeline stage
// ? $match, $sort, $skip, $limit
// ? $project, $unwind, $lookup, $group

// ? $match => filters data based on provided condition
// ? $project => selects data, 1 is to select and 0 is to deselect.

// db.movies_db.aggregate([
//   {
//     $match: {
//       name: "Revenge",
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       genres: 1,
//       status: 1,
//   rating: 1,
//       imdbRating: "$rating.average"  // to change the name of field we can use $ then field name
//     },
//   },
// ]);

let page = 1;
let limit = 4;
let skip = (page - 1) * limit;

db.persons.aggregate([
  {
    $match: {
      gender: { $ne: "male" },
    },
  },
  {
    $skip: skip,
  },
  {
    $limit: limit,
  },
  {
    $project: {
      fullName: { $concat: ["$name.first", " ", "$name.last"] },
      gender: 1,
      username: "$login.username",
      currentAge: "$dob.age",
      registrationDate: "$registered.date",
    },
  },
]);

// db.persons.find()
