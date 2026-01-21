const mongoose=require('mongoose');
const data=require('./data.js');
const Listing=require("../models/listing.js");
const mongo_url="mongodb://127.0.0.1:27017/wanderlust";

async function main(){
await mongoose.connect(mongo_url);
}
main().then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log("Error connecting to MongoDB:",err);
});
const initdb=async()=>{
await Listing.deleteMany({});
data.data=data.data.map((obj)=>({
...obj,owner:"6967c0ad3501599cb329c233"
}));
await Listing.insertMany(data.data);
console.log("data was initialized");
}
initdb();