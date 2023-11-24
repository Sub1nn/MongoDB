use("MERN_DB");
// db.movies_db.find();
// db.students.insertMany([
//   {
//     name: "Sagar",
//     hobbies: ["Swimming", "Dancing"],
//     scores: [
//       {
//         sub: "Math",
//         point: 55,
//       },
//       {
//         sub: "Science",
//         point: 65,
//       },
//     ],
//   },
//   {
//     name: "Prasoon",
//     hobbies: ["Gaming", "Dancing", "Singing"],
//     scores: [
//       {
//         sub: "Math",
//         point: 45,
//       },
//       {
//         sub: "Science",
//         point: 75,
//       },
//       {
//         sub: "Social",
//         point: 55,
//       },
//     ],
//   },
//   {
//     name: "Dilip",
//     hobbies: ["Trekking", "Cricket", "Bikes"],
//     scores: [
//       {
//         sub: "Math",
//         point: 75,
//       },
//       {
//         sub: "Science",
//         point: 55,
//       },
//       {
//         sub: "Social",
//         point: 45,
//       },
//     ],
//   },
// ]);

db.students.find();
// ? find students whose hobby is both Gaming and Singing
// db.students.find({hobbies:{$all:["Gaming","Singing"]}})
// ?find students who have three hobbies
// db.students.find({hobbies:{$size:3}})
// ?find students whose math score is greater than 50
// db.students.find({scores:{$elemMatch:{sub:"Math",point:{$gt:50}}}})
// ?find students whose score in any subject is greater than 70
// db.students.find({"scores":{$elemMatch: {"point":{$gt:70 }}}})
// db.students.find({"scores.point":{$gt:70}})
// ? find students whose primary id is "656070d2b16daaa31169a51b"
// db.students.find({_id:{$oid:"656070d2b16daaa31169a51b"}})
// db.students.find({"_id.$oid":"656070d2b16daaa31169a51b"})
// db.students.findOne({"_id.$oid":{$eq:"656070d2b16daaa31169a51b"}})
