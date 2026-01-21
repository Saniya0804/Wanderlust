const Listing=require("../models/listing.js");
const Review=require("../models/reviews.js");

module.exports.createReview=async(req,res)=>{
    let {id}=req.params;
let listing=await Listing.findById(id);
let newReview = new Review({
  comment: req.body.review.comment,
  rating: req.body.review.rating,
  author: req.user._id
});
console.log("Saving review with author:", newReview.author);

console.log(newReview);
listing.reviews.push(newReview);
await newReview.save();
await listing.save();
req.flash("success","New review created!")
res.redirect(`/listings/${listing._id}`);
}
module.exports.destroyReview=async (req,res)=>{
let {id,reviewId}=req.params;
await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
await Review.findByIdAndDelete(reviewId);
req.flash("success","Review deleted");
res.redirect(`/listings/${id}`);
}