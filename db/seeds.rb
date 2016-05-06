# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# SCHEMA INFO
# Table name: workspaces
#
#  id             :integer          not null, primary key
#  description    :string           not null
#  capacity       :integer          not null
#  address        :string           not null
#  latitude       :float            not null
#  longitude      :float            not null
#  price_week     :integer          not null
#  price_month    :integer          not null
#  owner_id       :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  city           :string
#  officetype     :string
#  main_photo_url :string
#  thumbnail_url  :string



# Guest user
User.create!({username: "guest", password: "guestlogin"});

# Random users
letters = ("a".."z").to_a
digits = (1..500).to_a
names = ["ashley", "bill", "sally", "mark", "sam", "jessica", "santaslittlehelper", "rentmyspace", "chris", "tom", "tim"];


25.times do
  User.create!({
    username: names.sample + String(digits.sample),
    password: "password"
  })
end

#Random places
randomize_coords = (-3..3).to_a
randomize_coords.map! { |num| num/100.00 }
weekly_price = (50..1200).to_a
user_ids = (1..25).to_a

# Temporary Values
type = ["Coworking Space", "Private Office", "Home Office"]
photos_url = "temp"
address = "123 Fake Street"
description = "Lorem ipsum"
capacity = (1..5).to_a


locations = [
  seattle = {
    city: "Seattle, WA",
    latitude: 47.6062,
    longitude: -122.3321
  },
  los_angeles = {
    city: "Los Angeles, CA",
    latitude: 34.0522,
    longitude: -118.2437
  },
  las_vegas = {
    city: "Las Vegas, NV",
    latitude: 36.1699,
    longitude: -115.1398
  },
  portland = {
    city: "Portland, OR",
    latitude: 45.5231,
    longitude: -122.6765
  },
  new_york = {
    city: "New York, NY",
    latitude: 40.7639,
    longitude: -73.9763
  },
  chicago = {
    city: "Chicago, IL",
    latitude: 41.8829,
    longitude: -87.6674
  },
  washington_dc = {
    city: "Washington, D.C.",
    latitude: 38.9072,
    longitude: -77.0369
  },
  minneapolis = {
    city: "Minneapolis, MN",
    latitude: 44.9778,
    longitude: -93.2650
  },
  austin = {
    city: "Austin, TX",
    latitude: 30.2672,
    longitude: -97.7431
  },
  denver = {
    city: "Denver, CO",
    latitude: 39.7392,
    longitude: -104.9903
  },
  boston = {
    city: "Boston, MA",
    latitude: 42.3568,
    longitude: -71.0688
  }
  # meddelin = {
  #   city: "Medellin, Antioquia, Colombia"
  # },
  # london = {
  #   city: "Medellin, Antioquia, Colombia"
  # },
  # paris = {
  #   city: "Medellin, Antioquia, Colombia"
  # },
]

locations_bay_area = [
  san_francisco = {
    city: "San Francisco",
    latitude: 37.7749,
    longitude: -122.4194
  },
  oakland = {
    city: "Oakland",
    latitude: 37.8044,
    longitude: -122.26
  },
  silicon_valley = {
    city: "Mountain View",
    latitude: 37.3861,
    longitude: -122.0839
  }
]

# Images for workspaces:
thumbnails = [ 'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1462551943/woolf-works-11_uhtyov.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1462551930/CoCoon-Cafe-pic-1_hsaatj.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1462551922/TheHive_vvpe53.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1462551921/RocketSpace64_-_Wide_oinjow.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1462551920/WeWork_Media_South_Lake3_jk0rb5.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1462551915/image_nwsvqj.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1462551915/IMG_4776_hyk0zk.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1462551915/os-catalyst-coworking-space-turns-1-20160418_z72qkw.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1462551913/coworkrs1_hitbqm.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1462551913/inspire9_hsapgo.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1462551911/original_ev3xe7.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1462551909/Fiap-paulista-coworking_y47fp1.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1462551909/D2B4586_rchznp.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1462551908/Header3_p17ewc.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1462551908/Gallery_Small-1_wbki9m.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1462551905/Co-working-stock-photo_sytzdh.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1462551905/ballroom2_voek6f.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1462551904/ap_831012978582_byeiks.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1462081650/main-background_keuduj.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964455/npwq6yzdqyww8oekng7o.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964449/nhnczrvfaaivowds0n4x.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964449/mnjc7g8yg5akbaqq8yfe.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964448/rmfjazqw8b135xibpmpm.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964448/wzynjne200waiahf8ucy.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964448/sr5w8c9zhfmglmeixhjg.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964446/aqikj8fnmpspfwuuz0qp.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964446/emtw9mazg8aowh4awvfd.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964445/jotnsmvgr8cwwualdjqy.png',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964443/ixenfczluvxrldqexok8.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964442/a9jzs7vbgoyrph0zeyif.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964442/jhfd5psychhvdgjjhpiu.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964441/ml23ezt88e100wpyatju.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964440/yy1o4svqm2ua0zik9g2l.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964440/blcvxuwkg6px338mte1h.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964439/f6gv3kdnvoxuhrqr04pn.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964439/auaegtefmxw80rdwrnlx.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964439/kpcxvwzxcctqydo1uazb.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964439/rcqu7zjrkbkz7q6mmgeq.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964437/tvizgjzhdolxonwjbatq.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964436/bt1cgvk7a3lyaloqsc7q.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964436/pebcynn7hgkkg4njywzn.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964436/yiagu4jhvwzrkftyjzdi.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964436/c1undyi9zxwhssb0tdil.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964435/dulj8pun3ndrdtfucx6p.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964435/nkcneicomr9bo4ruehif.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_400,w_450/v1461964435/ytyhjfcyjm5dq31peywr.jpg' ]


image_urls = [ 'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1462551943/woolf-works-11_uhtyov.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1462551930/CoCoon-Cafe-pic-1_hsaatj.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1462551922/TheHive_vvpe53.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1462551921/RocketSpace64_-_Wide_oinjow.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1462551920/WeWork_Media_South_Lake3_jk0rb5.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1462551915/image_nwsvqj.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1462551915/IMG_4776_hyk0zk.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1462551915/os-catalyst-coworking-space-turns-1-20160418_z72qkw.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1462551913/coworkrs1_hitbqm.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1462551913/inspire9_hsapgo.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1462551911/original_ev3xe7.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1462551909/Fiap-paulista-coworking_y47fp1.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1462551909/D2B4586_rchznp.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1462551908/Header3_p17ewc.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1462551908/Gallery_Small-1_wbki9m.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1462551905/Co-working-stock-photo_sytzdh.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1462551905/ballroom2_voek6f.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1462551904/ap_831012978582_byeiks.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1462081650/main-background_keuduj.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964455/npwq6yzdqyww8oekng7o.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964449/nhnczrvfaaivowds0n4x.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964449/mnjc7g8yg5akbaqq8yfe.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964448/rmfjazqw8b135xibpmpm.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964448/wzynjne200waiahf8ucy.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964448/sr5w8c9zhfmglmeixhjg.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964446/aqikj8fnmpspfwuuz0qp.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964446/emtw9mazg8aowh4awvfd.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964445/jotnsmvgr8cwwualdjqy.png',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964443/ixenfczluvxrldqexok8.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964442/a9jzs7vbgoyrph0zeyif.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964442/jhfd5psychhvdgjjhpiu.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964441/ml23ezt88e100wpyatju.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964440/yy1o4svqm2ua0zik9g2l.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964440/blcvxuwkg6px338mte1h.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964439/f6gv3kdnvoxuhrqr04pn.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964439/auaegtefmxw80rdwrnlx.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964439/kpcxvwzxcctqydo1uazb.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964439/rcqu7zjrkbkz7q6mmgeq.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964437/tvizgjzhdolxonwjbatq.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964436/bt1cgvk7a3lyaloqsc7q.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964436/pebcynn7hgkkg4njywzn.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964436/yiagu4jhvwzrkftyjzdi.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964436/c1undyi9zxwhssb0tdil.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964435/dulj8pun3ndrdtfucx6p.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964435/nkcneicomr9bo4ruehif.jpg',
  'http://res.cloudinary.com/dyzqtq32z/image/upload/c_fill,h_600,w_1500/v1461964435/ytyhjfcyjm5dq31peywr.jpg' ]

500.times do
  new_place = locations.sample
  week_price = weekly_price.sample
  month_price = week_price * 4
  image_idx = rand(image_urls.length)
  Workspace.create!({
    description: Faker::Company.catch_phrase,
    officetype: type.sample,
    capacity: capacity.sample,
    address: Faker::Address.street_address,
    latitude: new_place[:latitude] + randomize_coords.sample,
    longitude: new_place[:longitude] + randomize_coords.sample,
    price_week: week_price,
    price_month: month_price,
    owner_id: user_ids.sample,
    city: new_place[:city],
    main_photo_url: image_urls[image_idx],
    thumbnail_url: thumbnails[image_idx]
  })
end

100.times do
  new_place = locations_bay_area.sample
  week_price = weekly_price.sample
  month_price = week_price * 4
  image_idx = rand(image_urls.length)
  Workspace.create!({
    description: Faker::Company.catch_phrase,
    officetype: type.sample,
    capacity: capacity.sample,
    address: Faker::Address.street_address,
    latitude: new_place[:latitude] + randomize_coords.sample,
    longitude: new_place[:longitude] + randomize_coords.sample,
    price_week: week_price,
    price_month: month_price,
    owner_id: user_ids.sample,
    city: new_place[:city],
    main_photo_url: image_urls[image_idx],
    thumbnail_url: thumbnails[image_idx]
  })
end

#Add images for workspaces.
# workspaces = Workspace.all
# p workspaces.length
#
#
# workspaces.each do |space|
#   3.times do
#     WorkspaceImage.create!({workspace_id: space.id, url: image_urls.sample, thumbnail_url: thumbnails.sample})
#   end
# end
