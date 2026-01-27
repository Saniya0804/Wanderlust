const Listing=require("../models/listing")
module.exports.index=async (req,res)=>{
    const allListings=await Listing.find({});
    res.render("listings/index",{allListings});
}

module.exports.renderNewForm=(req,res)=>{
    res.render("listings/new");
}

module.exports.showListing=async (req,res)=>{
let {id}=req.params;
const listing=await Listing.findById(id).populate("owner").populate({path:"reviews",populate:{
    path:"author",select:"username-_id",model:"User",strictPopulate:false
}});
if(!listing)
{
    req.flash("error","Listing you requested for does not exist!");
    return res.redirect("/listings");
}

res.render("listings/show",{listing});
}

module.exports.createListing=async(req,res,next)=>{
  const newlist=new Listing(req.body.listing);
  //stores id of current user
 newlist.owner=req.user._id;
 if(req.file){
    let url=req.file.path;
    let filename=req.file.filename;
    console.log(url, "..",filename)
    newlist.image={url,filename};
 }
await newlist.save();
req.flash("success","new listings created");
res.redirect("/listings");
}
module.exports.renderEditForm=async (req,res)=>{
let {id}=req.params;
const listing=await Listing.findById(id);
if(!listing)
{
    req.flash("error","Listing you requested for does not exist!");
    return res.redirect("/listings");
}
let originalImageUrl;
if(listing.image && listing.image.url){
 originalImageUrl=listing.image.url;
originalImageUrl=originalImageUrl.replace("/upload/","/upload/w_250/");
}
    res.render("listings/edit",{listing,originalImageUrl});
}
module.exports.updateListing=async (req,res)=>{
   let {id}=req.params;
    let listing=await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing not found!");
        return res.redirect("/listings");
    }
    Object.assign(listing, req.body.listing);
    if(req.file){
    let url=req.file.path;
    let filename=req.file.filename;
    listing.image={url,filename};
    }
    await listing.save();
    req.flash("success","Listing Updated!");
    res.redirect("/listings");
}
module.exports.destroyListing=async(req,res)=>{
    let {id}=req.params;
    let deletedlisting=await Listing.findByIdAndDelete(id);
    console.log(deletedlisting);
    req.flash("success","Listing deleted");
    res.redirect("/listings");
}
