const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const Listing = require("../model/listing.js");
const listingController = require("../controllers/listings.js")
const multer = require('multer')
const {storage} = require('../cloudconfig.js')
const upload = multer({ storage })



router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(
        isLoggedIn,
        validateListing,
        upload.single('listing[image]'),
        wrapAsync(listingController.createListing),
    );


//New  route
router.get("/new", isLoggedIn, wrapAsync(listingController.renderNewForm));



router
    .route("/:id")
    .get( wrapAsync(listingController.showListings))
    .put( isLoggedIn,
        isOwner,
        upload.single('listing[image]'),
        validateListing,
        wrapAsync(listingController.updateListing)
    )
    .delete (
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.deleteListing),
);



//Edit route
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm)
);



module.exports = router;
