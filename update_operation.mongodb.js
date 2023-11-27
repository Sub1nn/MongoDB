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

db.friends.find();
