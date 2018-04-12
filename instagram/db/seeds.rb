# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = []
photos_arr = []

demo_user = User.create!(
  username: "DemoUser4Lyfe",
  password: "PASSWORD",
  name: "Demo User",
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/demoprof.png",
  bio: "Welcome to Printstagram! This platform was created so that you could share your experiences with the world! Try adding a photo and interacting with your friends by liking and commenting on their photos!")
users.push(demo_user)

todd = User.create!(
  username: "kathlovesdave",
  password: "password",
  name: "Kath Bergman",
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/IMG_1726.JPG",
  bio: "Full-Stack Engineering living in San Francisco | ca - tx - co - mo - mi | My own self, at my very best, all the time.")
users.push(todd)

dave = User.create!(
  username: "daveloveskath",
  password: "password",
  name: "Dave Houle",
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/liz/lizprof.png",
  bio: "Kick-*ss female taking over tech in the bay area. ME / VA / CO / MN / CA.")
users.push(dave)

lisa = User.create!(
  username: "lePonds",
  password: "password",
  name: "Lisa Houdei",
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/lisa/lisa9.png",
  bio: "Musician living, loving, growing, and making art in STL.")
users.push(lisa)

molly = User.create!(
  username: "moolysv",
  password: "password",
  name: "Molly Siev",
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/molly/molly5.png",
  bio: "Artist making rad art in LA. Buy my art!")
users.push(molly)

alex = User.create!(
  username: "trollsintogold",
  password: "password",
  name: "Al Sv",
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/alex/alexprof.png",
  bio: "Retired nurse in med school. Doing my best to spread the CRJ gospel")
users.push(alex)

anne = User.create!(
  username: "muutuki",
  password: "password",
  name: "Anne Tuuks",
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/anne/anne14.png",
  bio: "Fashion / Food / Travel. Based in munich, but STL is home. kisses!")
users.push(anne)

nick = User.create!(
  username: "nickipoo",
  password: "password",
  name: "Nick",
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/nick/nickprof.png",
  bio: "Taking a breaking from traveling the world to reflect... and find a job in San Francisco.")
users.push(nick)

camp = User.create!(
  username: "neverstopexploring",
  password: "password",
  name: "NSE",
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/camp/camp14.png",
  bio: "Taking inspiration and photos from hikers around the world! Get out and see the world!")
users.push(camp)

#Demo User
p_1 = Photo.new(
  author_id: demo_user.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_2191.JPG"
)
photos_arr.push(p_1)

p_2 = Photo.new(
  author_id: demo_user.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/5F4496B5-52A2-43EC-BCE6-9B637B10C080.jpg"
)
photos_arr.push(p_2)

p_3 = Photo.new(
  author_id: demo_user.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/53089B68-B69B-4972-8EB2-A66ABD9A7EC6.jpg"
)
photos_arr.push(p_3)

p_4 = Photo.new(
  author_id: demo_user.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/DSCF1827.JPG"
)
photos_arr.push(p_4)

p_5 = Photo.new(
  author_id: demo_user.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_0135.JPG"
)
photos_arr.push(p_5)

p_6 = Photo.new(
  author_id: demo_user.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_0252.JPG"
)
photos_arr.push(p_6)

p_7 = Photo.new(
  author_id: demo_user.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_0374.JPG"
)
photos_arr.push(p_7)

p_8 = Photo.new(
  author_id: demo_user.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_0391.JPG"
)
photos_arr.push(p_8)

p_9 = Photo.new(
  author_id: demo_user.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_0412.JPG"
)
photos_arr.push(p_9)

p_10 = Photo.new(
  author_id: demo_user.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_0446.JPG"
)
photos_arr.push(p_10)

p_11 = Photo.new(
  author_id: demo_user.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_0469.JPG"
)
photos_arr.push(p_11)

p_12 = Photo.new(
  author_id: demo_user.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_0525.JPG"
)
photos_arr.push(p_12)

p_13 = Photo.new(
  author_id: demo_user.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_0269.JPG"
)
photos_arr.push(p_13)

p_14 = Photo.new(
  author_id: demo_user.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_2046.JPG"
)
photos_arr.push(p_14)

p_15 = Photo.new(
  author_id: demo_user.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/demo/IMG_2191.JPG"
)
photos_arr.push(p_15)


#Todd
p_16 = Photo.new(
  author_id: todd.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd15.jpg"
)
photos_arr.push(p_16)

p_17 = Photo.new(
  author_id: todd.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd1.png"
)
photos_arr.push(p_17)

p_18 = Photo.new(
  author_id: todd.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd2.jpg"
)
photos_arr.push(p_18)

p_19 = Photo.new(
  author_id: todd.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd3.png"
)
photos_arr.push(p_19)

p_20 = Photo.new(
  author_id: todd.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd4.png"
)
photos_arr.push(p_20)

p_21 = Photo.new(
  author_id: todd.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd5.png"
)
photos_arr.push(p_21)

p_22 = Photo.new(
  author_id: todd.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd6.png"
)
photos_arr.push(p_22)

p_23 = Photo.new(
  author_id: todd.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd7.png"
)
photos_arr.push(p_23)

p_24 = Photo.new(
  author_id: todd.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd8.png"
)
photos_arr.push(p_24)

p_25 = Photo.new(
  author_id: todd.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd9.png"
)
photos_arr.push(p_25)

p_26 = Photo.new(
  author_id: todd.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd10.png"
)
photos_arr.push(p_26)

p_27 = Photo.new(
  author_id: todd.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd11.png"
)
photos_arr.push(p_27)

p_28 = Photo.new(
  author_id: todd.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd12.png"
)
photos_arr.push(p_28)

p_29 = Photo.new(
  author_id: todd.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd13.png"
)
photos_arr.push(p_29)

p_30 = Photo.new(
  author_id: todd.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/todd/todd14.jpg"
)
photos_arr.push(p_30)




#Liz
p_31 = Photo.new(
  author_id: dave.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/liz/liz1.png"
)
photos_arr.push(p_31)

p_32 = Photo.new(
  author_id: dave.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/liz/liz2.png"
)
photos_arr.push(p_32)

p_33 = Photo.new(
  author_id: dave.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/liz/liz3.png"
)
photos_arr.push(p_33)

p_34 = Photo.new(
  author_id: dave.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/liz/liz4.png"
)
photos_arr.push(p_34)

p_35 = Photo.new(
  author_id: dave.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/liz/liz5.png"
)
photos_arr.push(p_35)

p_36 = Photo.new(
  author_id: dave.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/liz/liz6.png"
)
photos_arr.push(p_36)

p_37 = Photo.new(
  author_id: dave.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/liz/liz7.png"
)
photos_arr.push(p_37)

p_38 = Photo.new(
  author_id: dave.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/liz/liz8.png"
)
photos_arr.push(p_38)

p_39 = Photo.new(
  author_id: dave.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/liz/liz9.png"
)
photos_arr.push(p_39)

p_40 = Photo.new(
  author_id: dave.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/liz/liz10.png"
)
photos_arr.push(p_40)

p_41 = Photo.new(
  author_id: dave.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/liz/liz11.png"
)
photos_arr.push(p_41)

p_42 = Photo.new(
  author_id: dave.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/liz/liz12.png"
)
photos_arr.push(p_42)

p_43 = Photo.new(
  author_id: dave.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/liz/liz13.png"
)
photos_arr.push(p_43)

p_44 = Photo.new(
  author_id: dave.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/liz/liz14.png"
)
photos_arr.push(p_44)

p_45 = Photo.new(
  author_id: dave.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/liz/liz15.png"
)
photos_arr.push(p_45)




#Lisa
p_46 = Photo.new(
  author_id: lisa.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/lisa/lisa1.png"
)
photos_arr.push(p_46)

p_47 = Photo.new(
  author_id: lisa.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/lisa/lisa2.png"
)
photos_arr.push(p_47)

p_48 = Photo.new(
  author_id: lisa.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/lisa/lisa3.png"
)
photos_arr.push(p_48)

p_49 = Photo.new(
  author_id: lisa.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/lisa/lisa4.png"
)
photos_arr.push(p_49)

p_50 = Photo.new(
  author_id: lisa.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/lisa/lisa5.png"
)
photos_arr.push(p_50)

p_51 = Photo.new(
  author_id: lisa.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/lisa/lisa6.png"
)
photos_arr.push(p_51)

p_52 = Photo.new(
  author_id: lisa.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/lisa/lisa7.png"
)
photos_arr.push(p_52)

p_53 = Photo.new(
  author_id: lisa.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/lisa/lisa8.png"
)
photos_arr.push(p_53)

p_54 = Photo.new(
  author_id: lisa.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/lisa/lisa9.png"
)
photos_arr.push(p_54)

p_55 = Photo.new(
  author_id: lisa.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/lisa/lisa10.png"
)
photos_arr.push(p_55)

p_56 = Photo.new(
  author_id: lisa.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/lisa/lisa11.png"
)
photos_arr.push(p_56)

p_57 = Photo.new(
  author_id: lisa.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/lisa/lisa12.png"
)
photos_arr.push(p_57)

p_58 = Photo.new(
  author_id: lisa.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/lisa/lisa13.png"
)
photos_arr.push(p_58)

p_59 = Photo.new(
  author_id: lisa.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/lisa/lisa14.png"
)
photos_arr.push(p_59)

p_60 = Photo.new(
  author_id: lisa.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/lisa/lisa15.png"
)
photos_arr.push(p_60)






#Molly
p_61 = Photo.new(
  author_id: molly.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/molly/molly1.png"
)
photos_arr.push(p_61)

p_62 = Photo.new(
  author_id: molly.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/molly/molly2.png"
)
photos_arr.push(p_62)

p_63 = Photo.new(
  author_id: molly.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/molly/molly3.png"
)
photos_arr.push(p_63)

p_64 = Photo.new(
  author_id: molly.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/molly/molly4.png"
)
photos_arr.push(p_64)

p_65 = Photo.new(
  author_id: molly.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/molly/molly5.png"
)
photos_arr.push(p_65)

p_66 = Photo.new(
  author_id: molly.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/molly/molly6.png"
)
photos_arr.push(p_66)

p_67 = Photo.new(
  author_id: molly.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/molly/molly7.png"
)
photos_arr.push(p_67)

p_68 = Photo.new(
  author_id: molly.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/molly/molly8.png"
)
photos_arr.push(p_68)

p_69 = Photo.new(
  author_id: molly.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/molly/molly9.png"
)
photos_arr.push(p_69)

p_70 = Photo.new(
  author_id: molly.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/molly/molly10.png"
)
photos_arr.push(p_70)

p_71 = Photo.new(
  author_id: molly.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/molly/molly11.png"
)
photos_arr.push(p_71)

p_72 = Photo.new(
  author_id: molly.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/molly/molly12.png"
)
photos_arr.push(p_72)

p_73 = Photo.new(
  author_id: molly.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/molly/molly13.png"
)
photos_arr.push(p_73)

p_74 = Photo.new(
  author_id: molly.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/molly/molly14.png"
)
photos_arr.push(p_74)

p_75 = Photo.new(
  author_id: molly.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/molly/molly15.png"
)
photos_arr.push(p_75)




#Alex
p_76 = Photo.new(
  author_id: alex.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/alex/alex1.jpg"
)
photos_arr.push(p_76)

p_77 = Photo.new(
  author_id: alex.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/alex/alex2.jpg"
)
photos_arr.push(p_77)

p_78 = Photo.new(
  author_id: alex.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/alex/alex3.png"
)
photos_arr.push(p_78)

p_79 = Photo.new(
  author_id: alex.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/alex/alex4.png"
)
photos_arr.push(p_79)

p_80 = Photo.new(
  author_id: alex.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/alex/alex5.png"
)
photos_arr.push(p_80)

p_81 = Photo.new(
  author_id: alex.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/alex/alex6.png"
)
photos_arr.push(p_81)

p_82 = Photo.new(
  author_id: alex.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/alex/alex7.png"
)
photos_arr.push(p_82)

p_83 = Photo.new(
  author_id: alex.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/alex/alex8.png"
)
photos_arr.push(p_83)

p_84 = Photo.new(
  author_id: alex.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/alex/alex9.png"
)
photos_arr.push(p_84)

p_85 = Photo.new(
  author_id: alex.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/alex/alex10.png"
)
photos_arr.push(p_85)

p_86 = Photo.new(
  author_id: alex.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/alex/alex11.png"
)
photos_arr.push(p_86)

p_87 = Photo.new(
  author_id: alex.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/alex/alex12.png"
)
photos_arr.push(p_87)

p_88 = Photo.new(
  author_id: alex.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/alex/alex13.png"
)
photos_arr.push(p_88)

p_89 = Photo.new(
  author_id: alex.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/alex/alex14.png"
)
photos_arr.push(p_89)

p_90 = Photo.new(
  author_id: alex.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/alex/alex15.png"
)
photos_arr.push(p_90)




#anne
p_91 = Photo.new(
  author_id: anne.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/anne/anne1.png"
)
photos_arr.push(p_91)

p_92 = Photo.new(
  author_id: anne.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/anne/anne2.png"
)
photos_arr.push(p_92)

p_93 = Photo.new(
  author_id: anne.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/anne/anne3.png"
)
photos_arr.push(p_93)

p_94 = Photo.new(
  author_id: anne.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/anne/anne4.png"
)
photos_arr.push(p_94)

p_95 = Photo.new(
  author_id: anne.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/anne/anne5.png"
)
photos_arr.push(p_95)

p_96 = Photo.new(
  author_id: anne.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/anne/anne6.png"
)
photos_arr.push(p_96)

p_97 = Photo.new(
  author_id: anne.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/anne/anne7.png"
)
photos_arr.push(p_97)

p_98 = Photo.new(
  author_id: anne.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/anne/anne8.png"
)
photos_arr.push(p_98)

p_99 = Photo.new(
  author_id: anne.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/anne/anne9.png"
)
photos_arr.push(p_99)

p_100 = Photo.new(
  author_id: anne.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/anne/anne10.png"
)
photos_arr.push(p_100)

p_101 = Photo.new(
  author_id: anne.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/anne/anne11.png"
)
photos_arr.push(p_101)

p_102 = Photo.new(
  author_id: anne.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/anne/anne12.png"
)
photos_arr.push(p_102)

p_103 = Photo.new(
  author_id: anne.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/anne/anne13.png"
)
photos_arr.push(p_103)

p_104 = Photo.new(
  author_id: anne.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/anne/anne14.png"
)
photos_arr.push(p_104)

p_105 = Photo.new(
  author_id: anne.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/anne/anne15.png"
)
photos_arr.push(p_105)




#nick
p_106 = Photo.new(
  author_id: nick.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/nick/nick1.png"
)
photos_arr.push(p_106)

p_107 = Photo.new(
  author_id: nick.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/nick/nick2.png"
)
photos_arr.push(p_107)

p_108 = Photo.new(
  author_id: nick.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/nick/nick3.png"
)
photos_arr.push(p_108)

p_109 = Photo.new(
  author_id: nick.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/nick/nick4.png"
)
photos_arr.push(p_109)

p_110 = Photo.new(
  author_id: nick.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/nick/nick5.png"
)
photos_arr.push(p_110)

p_111 = Photo.new(
  author_id: nick.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/nick/nick6.png"
)
photos_arr.push(p_111)

p_112 = Photo.new(
  author_id: nick.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/nick/nick7.png"
)
photos_arr.push(p_112)

p_113 = Photo.new(
  author_id: nick.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/nick/nick8.png"
)
photos_arr.push(p_113)

p_114 = Photo.new(
  author_id: nick.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/nick/nick9.png"
)
photos_arr.push(p_114)

p_115 = Photo.new(
  author_id: nick.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/nick/nick10.png"
)
photos_arr.push(p_115)

p_116 = Photo.new(
  author_id: nick.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/nick/nick11.png"
)
photos_arr.push(p_116)

p_117 = Photo.new(
  author_id: nick.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/nick/nick12.png"
)
photos_arr.push(p_117)

p_118 = Photo.new(
  author_id: nick.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/nick/nick13.png"
)
photos_arr.push(p_118)

p_119 = Photo.new(
  author_id: nick.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/nick/nick14.png"
)
photos_arr.push(p_119)

p_120 = Photo.new(
  author_id: nick.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/nick/nick15.png"
)
photos_arr.push(p_120)




#camp
p_121 = Photo.new(
  author_id: camp.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/camp/camp1.jpg"
)
photos_arr.push(p_121)

p_122 = Photo.new(
  author_id: camp.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/camp/camp2.jpg"
)
photos_arr.push(p_122)

p_123 = Photo.new(
  author_id: camp.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/camp/camp3.jpg"
)
photos_arr.push(p_123)

p_124 = Photo.new(
  author_id: camp.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/camp/camp4.jpg"
)
photos_arr.push(p_124)

p_125 = Photo.new(
  author_id: camp.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/camp/camp5.jpg"
)
photos_arr.push(p_125)

p_126 = Photo.new(
  author_id: camp.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/camp/camp6.jpg"
)
photos_arr.push(p_126)

p_127 = Photo.new(
  author_id: camp.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/camp/camp7.jpg"
)
photos_arr.push(p_127)

p_128 = Photo.new(
  author_id: camp.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/camp/camp8.jpg"
)
photos_arr.push(p_128)

p_129 = Photo.new(
  author_id: camp.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/camp/camp9.jpg"
)
photos_arr.push(p_129)

p_130 = Photo.new(
  author_id: camp.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/camp/camp10.png"
)
photos_arr.push(p_130)

p_131 = Photo.new(
  author_id: camp.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/camp/camp11.png"
)
photos_arr.push(p_131)

p_132 = Photo.new(
  author_id: camp.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/camp/camp12.png"
)
photos_arr.push(p_132)


p_133 = Photo.new(
  author_id: camp.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/camp/camp13.png"
)
photos_arr.push(p_133)


p_134 = Photo.new(
  author_id: camp.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/camp/camp14.png"
)
photos_arr.push(p_134)


p_135 = Photo.new(
  author_id: camp.id,
  img_url: "https://s3-us-west-1.amazonaws.com/printstagram-pro/seed_data/camp/camp15.jpg"
)
photos_arr.push(p_135)

photos_arr.shuffle.each(&:save!)

comment_arr = [
  "What a great photo!",
  "Omg, this looks amazing!",
  "So Adorable!",
  "Ugh, so jealous!",
  "Is this even real?!",
  "SCREAMING!",
  "I'm so into this!",
  "Um, can I have your life?",
  "Ugh, I miss you so much!",
  "OMG! I remember this!",
]

liked_photos = []
users.each do |user|
  comment_arr.each do |comment|
    2.times do
      sample_photo = Photo.all.sample
      pair = [sample_photo.id, user.id]
      liked_photos.push(pair)
      Comment.create!(
        photo_id: sample_photo.id,
        user_id: user.id,
        body: comment
      )
    end
  end
  like_photos = Photo.all.sample(50).uniq
  like_photos.each do |photo|
    Like.create!(photo_id: photo.id, user_id: user.id)
  end
end
