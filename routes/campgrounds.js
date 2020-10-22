var express = require("express"),
  router = express.Router(),
  Campground = require("../models/campground"),
  middleware = require("../middleware");

//INDEX route- show all campgrounds
router.get("/", function (req, res) {
  //GET ALL THE CAMPGROUNDS FROM DB
  Campground.find({}, function (err, allCamps) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/index", {
        campgrounds: allCamps,
      });
    }
  });
});

//CREATE route - add new campgrounds to database
router.post("/", middleware.isLoggedIn, function (req, res) {
  let name = req.body.name;
  let price = req.body.price;
  let img = req.body.image;
  let desc = req.body.description;
  let author = {
    id: req.user._id,
    username: req.user.username
  };
  let newCamp = { name: name,price: price, image: img, description: desc, author: author };
  //CREATE A NEW CAMPGROUND AND SAVE TO DATABASE
  Campground.create(newCamp, function (err, latestCamp) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  });
});

//NEW ROUTE - show form to create new campground
router.get("/new", middleware.isLoggedIn, function (req, res) {
  res.render("campgrounds/new");
});

//SHOW ROUTE
router.get("/:id", function (req, res) {
  Campground.findById(req.params.id)
    .populate("comments")
    .exec(function (err, foundCamps) {
      if (!err) {
        res.render("campgrounds/show", { campgrounds: foundCamps });
      }
    });
});
//INDEX route- show all campgrounds
router.get("/", function (req, res) {
  //GET ALL THE CAMPGROUNDS FROM DB
  Campground.find({}, function (err, allCamps) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds/index", {
        campgrounds: allCamps,
      });
    }
  });
});

//CREATE route - add new campgrounds to database
router.post("/", middleware.isLoggedIn, function (req, res) {
  let name = req.body.name;
  let img = req.body.image;
  let desc = req.body.description;
  let newCamp = { name: name, image: img, description: desc };
  //CREATE A NEW CAMPGROUND AND SAVE TO DATABASE
  Campground.create(newCamp, function (err, latestCamp) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  });
});

//NEW ROUTE - show form to create new campground
router.get("/new", middleware.isLoggedIn, function (req, res) {
  res.render("campgrounds/new");
});

//SHOW ROUTE
router.get("/:id", function (req, res) {
  Campground.findById(req.params.id)
    .populate("comments")
    .exec(function (err, foundCamps) {
      if (!err) {
        console.log(foundCamps);
        res.render("campgrounds/show",{campgrounds:foundCamps });
      }
    });
});

//EDIT Campgrounds
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){   
        res.render("campgrounds/edit", {campground: foundCampground});
        });

});

//UPDATE Campgrounds
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
  //find and update the correct campground
  Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
    if(err){
      res.redirect("/campgrounds");
    }else{
      res.redirect("/campgrounds/" + req.params.id);
    }
  });
});

//DESTROY campground
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
  Campground.findByIdAndRemove(req.params.id, function(err){
    if(err){
      res.redirect("/campgrounds");
    }else{
      res.redirect("/campgrounds");
    }
  })
})

module.exports = router;
