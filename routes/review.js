const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema}=require("../schema.js");
const {reviewSchema}=require("../schema.js");
const Review=require("../models/reviews.js");
const Listing = require("../models/listing");
const {validateReview,isLoggedIn,isReviewAuthor}=require("../middleware.js");
const reviewController=require("../controllers/review.js");
//reviews//
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));
//delete review route//
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyreview));
module.exports=router;