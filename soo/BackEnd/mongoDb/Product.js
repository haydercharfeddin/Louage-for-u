const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const productSchema = new mongoose.Schema({
    name: String,
    price:Number,
    time: Number,
    imageUrl: String,
    place: {
      type: String,
      enum: ["mednine", "gabes", "djerba"],
      default: "mednine"
    }
  });
const userSchema = new mongoose.Schema ({
  username:String,
  email :String,
  password:String
})
const Users =mongoose.model("Users",userSchema) ;
const Product = mongoose.model("Product", productSchema);
module.exports = {Product,Users}
;
