use("MERN_DB");

// ? Free Practice

// db.friends.updateOne({name:"Nikita","sportData.title":"E-gaming"},{
//     $set:{
//         "sportData.$.title":"Basketball"
//     }
// })

// db.friends.updateOne({name:"Nikita","sportData.title":"Basketball"},{
//     $inc:{
//        "sportData.$.frequency":-3
//     }
// })

// db.friends.updateOne({name:"Nikita"},{$unset:{frequency:""}})

// db.friends.updateOne({name:"Nikita"},{$mul:{age:0.75}})

// db.friends.updateMany({},{
//     $set:{
//         Subjects: {
//             Science: 45,
//             Maths: 72
//         }
//     }
// })

// db.friends.updateMany({},{
//     $set: {"Subjects.History": 68}
// })

// db.friends.updateOne({name:"Rohan"},{
//     $push:{
//         hobbies:"Movies"
//     }
// })

// db.friends.updateOne(
//   { name: "Dipesh" },
//   {
//     $set: {
//       "hobbies.$[elemA]": "Music",
//       "hobbies.$[elemB]": "Movies",
//     },
//   },
//   {
//     arrayFilters: [{ elemA: "A" }, { elemB: "B" }],
//   }
// );

// db.friends.updateOne({name:"Nikita"},{
//   $set:{"scores.$[elem]":50}
// },{
//   arrayFilters:[{elem:{$lt:70}}]
// })

// db.friends.updateOne({},{
//   $pullAll:{
//     scores:[50]
//   }
// })

// db.friends.updateOne({},{
//   $pull:{
//     scores:[65,55,45,35]
//   }
// })

// db.friends.updateOne({},{
//   $push:{scores:{$each:[65,55,45,35]}}
// })

// db.friends.updateOne({},{
//   $inc:{
//     "scores.$[elem]":5
//   }
// }, {
//   arrayFilters:[{elem:{$lt:60}}]
// })

// db.friends.updateOne({},{
//   $set:{
//     scores:[]
//   }
// })

// db.friends.updateOne({},{
//   $push:{
//     scores:{$each:[25,35,45,55,65,75]}
//   }
// })

// db.friends.updateOne({},{
//   $pull:{
//     scores:{$lt:50}
//   }
// })

// ? some practice questions generated by chatGPT

// ? Write a query to find all documents where the age is greater than 30.
// db.friends.find({age:{$gt:30}})

// ? Create a query to find documents where "hiking" is one of the hobbies.
// db.friends.find({hobbies:"Hiking"})

// ? Write a query to retrieve only the "name" and "age" fields for all documents.
// db.friends.find({},{name:1,age:1})

// ? Create a query to exclude the "Subjects" field from the result.
// db.friends.find({},{Subjects:0})

// ? Write a query to find documents where the location is either "A" or "B"
// db.friends.find({$or:[{"location.temporary":"A"},{"location.permanent": "A"},{"location.temporary": "B"},{"location.permanent": "B"}]})
// db.friends.find({location: {$in: ["A", "B"]}})

// ? Update the frequency of "Football" to 12 for the document with the name "Nikita" in the "sportData" array.
// db.friends.updateOne({name:"Nikita","sportData.title":"Football"},{
//   $set:{
//     "sportData.$.frequency":12
//   }
// })

// ? Increase all scores in the "scores" array by 10.
// db.friends.updateOne({name:"Nikita"},{
//   $inc:{
//     "scores.$[]": 10
//   }
// })

// ? Update the "location.permanent" field to "XYZ" only for documents where the age is less than 30.

// db.friends.updateMany({age:{$lt:30}},{
//   $set:{
//     "location.permanent":"XYZ"
//   }
// })

// ? Add a new hobby, "Swimming," to the "hobbies" array for the document with the name "Dipesh."

// db.friends.updateOne({name:"Dipesh"},{
//   $push:{
//     hobbies: "Swimming"
//   }
// })

// ? Remove the first occurrence of the hobby "Movies" from the "hobbies" array.
// db.friends.updateMany({},{
//   $pull:{
//     hobbies: "Movies"
//   }
// })

// ? Place name and age property at the top

// ? Retrieve the names of individuals who have a frequency greater than 5 in any sport.
// db.friends.find({"sportData.frequency":{$gt:5}},{name:1})

// db.friends.find({sportData:{$elemMatch:{
//   frequency:{$gt:5}
// }}},{name:1,_id:0})

// ? Find individuals who have "Football" in their list of sports and return their names and ages.
// db.friends.find({"sportData.title":"Football"},{name:1,age:1})

// ? Create a query to retrieve the names and subjects of individuals older than 30.
// db.friends.find({age:{$gt:30}},{name:1,Subjects:1,_id:0})

// ?  Find individuals who have "Singing" as one of their hobbies and have a frequency greater than 5 in any sport.
// db.friends.find({hobbies:"Singing","sportData.frequency":{$gt:5}})

// ? find documents where the "sportData" array contains an element with "title" equal to "Football" and "frequency" greater than 5.

// db.friends.find({"sportData.title":"Football","sportData.frequency":{$gt:7}})

// db.friends.find({sportData:{$elemMatch:{
//   title:"Football",
//   frequency:{$gt:5}
// }}},{name:1})

// ? Increase the age of individuals who have "Books" as one of their hobbies by 5 years.

// db.friends.updateMany({hobbies:"Singing"},{
//   $inc:{
//     age:-5
//   }
// })

// ? Add a new subject "Computer Science" with a score of 80 to individuals who have a frequency greater than 10 in any sport.

db.friends.updateMany(
  { "sportData.frequency": { $gt: 10 } },
  {
    $set: {
      "Subjects.Computer Science": 80,
    },
  }
);
// db.friends.updateOne({name:"Nikita"},{
//   $unset:{
//     frequency:12,
//     subjects:{}
//   }
// })

db.friends.find();
