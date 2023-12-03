use("MERN_DB");

// db.courses.insertMany([
//   {
//     name: "MERN",
//     duration: "3 months",
//     price: 25000,
//   },
//   {
//     name: "Python with Data science",
//     duration: "2.5 months",
//     price: 22000,
//   },
//   {
//     name: "Cyber security",
//     duration: "3 months",
//     price: 35000,
//   },
//   {
//     name: "Devops engineer",
//     duration: "3 months",
//     price: 45000,
//   },
// ]);

// db.learners.insertMany([
//   {
//     name: "Sujit Sharma",
//     address: "Kalanki",
//     phone: "984612356",
//     course: ObjectId("656c60bd744bc873c20ec6ec"),
//   },
//   {
//     name: "Sahil Khatiwoda",
//     address: "Gwarkho",
//     phone: "9846123785",
//     course: ObjectId("656c60bd744bc873c20ec6ed"),
//   },
// ]);

// db.learners.aggregate([
//   {
//     $match: {
//       name: "Sujit Sharma",
//     },
//   },
//   {
//     $lookup: {
//       from: "courses",
//       localField: "course",
//       foreignField: "_id",
//       as: "courseData",
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       address: 1,
//       phone: 1,
//       _id: 0,
//       courseDetails: {
//         name: { $first: "$courseData.name" },
//         price: { $first: "$courseData.price" },
//         duration: { $first: "$courseData.duration" },
//       },
//     },
//   },
// ]);

db.learners.aggregate([
  {
    $match: {
      name: "Sahil Khatiwoda",
    },
  },
  {
    $lookup: {
      from: "courses",
      localField: "course",
      foreignField: "_id",
      as: "courseData",
    },
  },
  {
    $project: {
      name: 1,
      address: 1,
      phone: 1,
      CourseDetails: {
        name: { $arrayElemAt: ["$courseData.name", 0] },
        duration: { $arrayElemAt: ["$courseData.duration", 0] },
        price: { $arrayElemAt: ["$courseData.price", 0] },
      },
    },
  },
]);
