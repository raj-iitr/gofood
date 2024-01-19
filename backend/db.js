const mongoose = require('mongoose');

const password = "mASRZs7eE9wOMbWC";                                                                                                                                
const url = `mongodb+srv://goFood:${password}@cluster0.u3szpsz.mongodb.net/gofoodmern`;

async function main() {
  await mongoose.connect(url);
  console.log("Connected");

  const db = mongoose.connection;
  // const collection = db.collection("food_categ");
  // collection.find({}).toArray().then((data)=>{console.log(data);}).catch((err)=>{console.log(err);});
  

}
 
module.exports = main;