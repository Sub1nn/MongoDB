use("MERN_DB");

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

db.friends.updateOne(
  { name: "Dipesh" },
  {
    $set: {
      "hobbies.$[elemA]": "Music",
      "hobbies.$[elemB]": "Movies",
    },
  },
  {
    arrayFilters: [{ elemA: "A" }, { elemB: "B" }],
  }
);

db.friends.find();
