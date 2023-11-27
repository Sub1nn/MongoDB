use("MERN_DB");

// ? Update
// ? updateOne
// db.friends.updateOne({ name: "Aakash" }, { $set: { name: "Nikita" } });
// db.friends.find()

//? Update many: Updates all Aakash to Nikita

// ? $Set will add the field if didn't find it
// db.friends.updateMany({},{$set:{age:25}})

// db.friends.updateOne({ name: "Dipesh" }, { $set: { age: 35 } });

// db.friends.updateOne({ name: "Rohan" }, { $set: { age: 30 } });

// ? $inc => Increases or decreases value of field
// db.friends.updateOne({_id:ObjectId("64c23ac54b02adb98fc52637")},{$inc:{age:7}})

// ? To decrease a value just use (-) like $inc:{age:-5}
// ? Decrease the age of all the users by 10
// db.friends.updateMany({},{$inc:{age:-10}})

// ? $unset removes the set field from the object and does not require a value
// db.friends.updateOne({name:"Nikita"},{$unset:{age:""}})

// ? $mul
// db.friends.updateOne({name:"Dipesh"},{$mul:{age:2}})

// ? division can also be achieved through $mul
// db.friends.updateOne({name:"Dipesh"},{$mul:{age:0.25}})

// ? $rename
// db.friends.updateMany({}, { $rename: { name: "firstName" } });

// ? set a location field object with temporary and permanent
// db.friends.updateMany({},{
//     $set:{
//         location:{
//             temporary:"A",
//             permanent:"B"
//         }
//     }
// })

// ? Update the temporary location
// db.friends.updateOne({firstName:"Nikita"},{
//     $set:{
//         "location.temporary":"Koteshwor"
//     }
// })

// db.friends.updateOne({firstName:"Dipesh"},{
//     $set:{
//         "location.permanent":"ABC"
//     }
// })

// ? array
// ? $push
// db.friends.updateOne({firstName:"Nikita"},{
//     $push:{hobbies:"Dancing"}
// })

// db.friends.updateOne({firstName:"Dipesh"},{$push:{hobbies:{$each:["A","B"]}}})

// db.friends.updateOne({firstName:"Nikita"},{
//     $set: {
//         scores:[85,95,75]
//     }
// })

// db.friends.updateOne({},{
//     $rename:{
//         firstName:"name"
//     }
// })

// ? $ push field and $each for adding multiple values
// db.friends.updateOne({name:"Nikita"},{
//     $push:{
//         scores: {
//             $each: [85,95]
//         }
//     }
// })

// ? $pop => removes first or last item from an array (-1) for first item and (1) for last item
// db.friends.updateOne({name:"Nikita"},{
//     $pop:{
//         scores:1
//     }
// })

// db.friends.updateOne({name:"Nikita"},{
//     $pop:{
//         scores:-1
//     }
// })

// ? pull => removes item from array based on condition

// db.friends.updateOne({},{
//     $pull:{
//         scores:{$lt:70}
//     }
// })
// ? Pull also directly removes specified values
// db.friends.updateOne({},{
//     $pull:{
//         scores:95
//     }
// })

// ? $pullAll => removes multiple values(no conditions can be applied)

// db.friends.updateOne({name:"Nikita"},{
//     $pullAll:{
//         scores:[95,75]
//     }
// })

// db.friends.updateOne({},{
//     $set:{
//         scores:[]
//     }
// })

// ? $addToSet => uniqueness of array
// db.friends.updateOne({},{
//     $addToSet:{
//         scores:{$each:[45,55,55,75,45,65,75,75]}
//     }
// })

// ? $

// db.friends.updateOne({name:"Nikita",scores:45},{
//     $set:{
//         "scores.$":46
//     }
// })

// ? can avoid the name field as its the 1st document
// db.friends.updateOne({scores:46},{
//     $set:{
//         "scores.$":49
//     }
// })

// db.friends.updateOne({hobbies:"Dancing"},{
//     $set:{
//         "hobbies.$":"Cycling"
//     }
// })

// db.friends.updateOne({name:"Nikita", "sportData.title":"Basketball"},{
//     $set:{
//         "sportData.$.title":"Volleyball"
//     }
// })

// db.friends.updateOne({
//     name:"Nikita",
//     "sportData.title":"Football"
// },{
//     $set:{
//         "sportData.$.frequency":10
//     }
// })

// db.friends.updateOne({
//     _id:ObjectId("64c23ac54b02adb98fc52637"),
//     "sportData.title":"Football"
// },{
//     $set:{
//         "sportData.$.title":"Tennis"
//     }
// })

// db.friends.updateOne({firstName:"Dipesh"},{
//     $set:{
//         "hobbies.$[]": "Cricket"
//     }
// })

// db.friends.updateOne({firstName:"Dipesh"},{
//     $set:{
//         "sportData.$[].frequency": 7
//     }
// })

// ? $[element] with arrayFilters
db.friends.updateOne(
  { name: "Nikita" },
  {
    $set: {
      "scores.$[element]": 100,
    },
  },
  {
    arrayFilters: [{ element: { $lt: 50 } }],
  }
);

db.friends.find();
