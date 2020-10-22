const mongoose = require("mongoose");
const Campground = require("./models/campground");
const Comment = require("./models/comment");

let data = [
  {
    name: "Har Ki Doon Trek Via Jaundhar Glacier, Uttarakhand",
    image:
      "https://images.thrillophilia.com/image/upload/s--nHtQCoV6--/c_fill,dpr_1.0,f_auto,fl_strip_profile,g_center,h_450,q_auto,w_753/v1/images/photos/000/026/414/original/m_Har_ki_Doon_5.jpg.jpg",
    description:
      "Nestled away in the heart of a cradle shaped valley, the trek to Har Ki Doon valley is known to be one of the most stunning and picturesque treks in Uttarakhand Embraced with scenic alpine meadows and striking greeneries, the beauty and splendour of this portion of the Garhwal Himalayas is credited by snow clad peaks, panoramic views of the Himalayan Range, gurgling rivulets and much more. Locally known as the 'Valley of Gods', trekking through this eternal meadow is one of the best experiences and is rewarded with mesmerising views of the glaciers, mountain ridges, ancient temples, appealing caves and high altitude villages. According to the legends, Har Ki Doon valley shares its history with the age of the Mahabharata and holds an important place in the Hindu mythology.",
  },
  {
    name: "Trekking in Manali, Himachal Pradesh",
    image:
      "https://images.thrillophilia.com/image/upload/s--Ce7zACJx--/c_fill,dpr_1.0,f_auto,fl_strip_profile,g_center,h_450,q_auto,w_753/v1/images/photos/000/046/283/original/640px-river-beas-2c-manali.jpg.jpg",
    description:
      "Manali is the epicenter of adventure in Himachal Pradesh and is one of the top hiking destinations in India. There are numerous things to do and see here. Be it adrenaline pumping outdoor sports, or experiential hiking trips, Manali has all the options. The best place to start hiking in Manali is the Solang Valley. It is also called locally as Snow Point. You can trek up to this point or take a public bus. From Snow Point, you hike up to Dhundi passing naturalistic settings along the way. You can engage a local guide to help you get to the place. Along the way you will see the Beas River. The mountain water is icy cold on most times of the year. Purple Rhododendron flowers stand in an inviting stance throughout the hike. The Solang Valley hike in Manali is the most engaging and enlightening hiking destinations of them all. ",
  },
  {
    name: "Offbeat Kedarkantha Trekking, Uttarakhand",
    image:
      "https://images.thrillophilia.com/image/upload/s--gLaflHnY--/c_fill,dpr_1.0,f_auto,fl_strip_profile,g_center,h_450,q_auto,w_753/v1/images/photos/000/024/758/original/1.jpg.jpg",
    description:
      "Situated in the Garhwal Himalayas, Kedarkantha trekking in Uttarakhand is an amazing experience for those who enjoying spending time in nature. One of the often visited locations, the area’s natural beauty is complemented with quaint hamlets, unending lush green meadows, and some terrific sights of the towering Himalayan peaks. The snaking trail to the 3,850m tall summit goes through Govind National Park, which offers an exclusive glance of the Himalayan flora and fauna. With views of peaks like the Swargarohini, Banderpooch, Black, and Ranglana, the highlight of the trail is undoubtedly sunsets against the backdrop of impressive snow-capped mountains.",
  },
];

function seedDB() {
  //remove all campgrounds
  Campground.remove({}, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("removed campgrounds!");
    }
    //add few campgrounds
    data.forEach(function (seed) {
      Campground.create(seed, function (err, campground) {
        if (err) {
          console.log(err);
        } else {
          console.log("added a campground");
          //add few commments
          Comment.create(
            {
              text: "Beautiful Place",
              author: "Addy",
            },
            function (err, comment) {
              if (err) {
                console.log(err);
              } else {
                campground.comments.push(comment);
                campground.save();
              }
            }
          );
        }
      });
    });
  });
}

module.exports = seedDB;
