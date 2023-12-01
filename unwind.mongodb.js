use("MERN_DB");

// db.fruits.insertMany([
// {
//   name: "Apple",

//   color: ["green", "red"],
//   category: [
//     {
//       size: "small",
//       price: 250,
//     },
//     {
//       size: "medium",
//       price: 350,
//     },
//   ],
// },

//     {
//       name: "Guava",

//       color: ["red", "white"],
//       category: [
//         {
//           size: "small",
//           price: 75,
//         },
//         {
//           size: "medium",
//           price: 100,
//         },
//       ],
//     },

//     {
//       name: "mango",

//       color: ["yellow", "green"],
//       category: [
//         {
//           size: "small",
//           price: 60,
//         },
//         {
//           size: "medium",
//           price: 80,
//         },
//       ],
//     },
//   ]);

// ? unwind
// db.fruits.aggregate([
//     {
//         $match:{
//             name:"Apple"
//         }
//     },
//     {
//         $unwind: {
//           path: "$color",
//           includeArrayIndex: 'index',
//           preserveNullAndEmptyArrays: false,
//         }
//     },
// ])

// ? $sort
db.fruits.aggregate([
  {
    $match: {},
  },
  {
    $sort: {
      name: -1, //ascending sort
    },
  },
]);

// db.fruits.find()
