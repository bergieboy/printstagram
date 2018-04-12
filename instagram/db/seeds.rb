# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo_user = User.create!(
  username: "DemoUser4Lyfe",
  password: "PASSWORD",
  name: "Demo User",
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/demoprof.png",
  bio: "Welcome to Printstagram! This platform was created so that you could share your experiences with the world! Try adding a photo and interacting with your friends by liking and commenting on their photos!")
todd = User.create!(
  username: "bergieboy",
  password: "password",
  name: "Todd Bergman",
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/IMG_1726.JPG",
  bio: "Full-Stack Engineering living in San Francisco | ca - tx - co - mo - mi | My own self, at my very best, all the time.")
dave = User.create!(
  username: "daveloveskath",
  password: "password",
  name: "Dave Houle",
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/liz/lizprof.png",
  bio: "Kick-*ss female taking over tech in the bay area. ME / VA / CO / MN / CA.")
lisa = User.create!(
  username: "lePonds",
  password: "password",
  name: "Lisa Houdei",
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/lisa/lisa9.png",
  bio: "Musician living, loving, growing, and making art in STL.")
molly = User.create!(
  username: "moolysv",
  password: "password",
  name: "Molly Siev",
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/molly/molly5.png",
  bio: "Artist making rad art in LA. Buy my art!")
alex = User.create!(
  username: "trollsintogold",
  password: "password",
  name: "Al Sv",
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/alex/alexprof.png",
  bio: "Retired nurse in med school. Doing my best to spread the CRJ gospel")
anne = User.create!(
  username: "muutuki",
  password: "password",
  name: "Anne Tuuks",
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/anne/anne14.png",
  bio: "Fashion / Food / Travel. Based in munich, but STL is home. kisses!")
nick = User.create!(
  username: "nickipoo",
  password: "password",
  name: "Nick",
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/nick/nickprof.png",
  bio: "Taking a breaking from traveling the world to reflect... and find a job in San Francisco.")
camp = User.create!(
  username: "neverstopexploring",
  password: "password",
  name: "NSE",
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/camp/camp14.png",
  bio: "Taking inspiration and photos from hikers around the world! Get out and see the world!")

#Demo User
p1 = Photo.create!(
  author_id: 1,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_2191.JPG"
)
p2 = Photo.create!(
  author_id: 1,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/5F4496B5-52A2-43EC-BCE6-9B637B10C080.jpg"
)
p3 = Photo.create!(
  author_id: 1,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/53089B68-B69B-4972-8EB2-A66ABD9A7EC6.jpg"
)
p4 = Photo.create!(
  author_id: 1,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/DSCF1827.JPG"
)
p5 = Photo.create!(
  author_id: 1,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_0135.JPG"
)
p6 = Photo.create!(
  author_id: 1,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_0252.JPG"
)
p7 = Photo.create!(
  author_id: 1,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_0374.JPG"
)
p8 = Photo.create!(
  author_id: 1,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_0391.JPG"
)
p9 = Photo.create!(
  author_id: 1,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_0412.JPG"
)
p10 = Photo.create!(
  author_id: 1,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_0446.JPG"
)
p11 = Photo.create!(
  author_id: 1,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_0469.JPG"
)
p12 = Photo.create!(
  author_id: 1,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_0525.JPG"
)
p13 = Photo.create!(
  author_id: 1,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_0269.JPG"
)
p14 = Photo.create!(
  author_id: 1,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_2046.JPG"
)
p15 = Photo.create!(
  author_id: 1,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_2191.JPG"
)

#Todd
p16 = Photo.create!(
  author_id: 2,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd15.jpg"
)
p17 = Photo.create!(
  author_id: 2,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd1.png"
)
p18 = Photo.create!(
  author_id: 2,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd2.jpg"
)
p19 = Photo.create!(
  author_id: 2,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd3.png"
)
p20 = Photo.create!(
  author_id: 2,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd4.png"
)
p21 = Photo.create!(
  author_id: 2,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd5.png"
)
p22 = Photo.create!(
  author_id: 2,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd6.png"
)
p23 = Photo.create!(
  author_id: 2,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd7.png"
)
p24 = Photo.create!(
  author_id: 2,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd8.png"
)
p25 = Photo.create!(
  author_id: 2,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd9.png"
)
p26 = Photo.create!(
  author_id: 2,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd10.png"
)
p27 = Photo.create!(
  author_id: 2,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd11.png"
)
p28 = Photo.create!(
  author_id: 2,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd12.png"
)
p29 = Photo.create!(
  author_id: 2,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd13.png"
)
p30 = Photo.create!(
  author_id: 2,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd14.jpg"
)
