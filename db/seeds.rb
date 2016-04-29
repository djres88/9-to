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
#  id          :integer          not null, primary key
#  description :string           not null
#  type        :string           not null
#  capacity    :integer          not null
#  address     :string           not null
#  latitude    :float            not null
#  longitude   :float            not null
#  price_week  :integer          not null
#  price_month :integer          not null
#  photos_url  :string           not null
#  owner_id    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#


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
randomize_coords = (-15..15).to_a
randomize_coords.map! { |num| num/100.00 }
weekly_price = (200..2000).to_a
user_ids = (1..25).to_a

# Temporary Values
type = ["private office", "shared space"]
photos_url = "temp"
address = "123 Fake Street"
description = "Lorem ipsum"
capacity = (1..5).to_a


locations = [
  seattle = {
    city: "Seattle",
    latitude: 47.61,
    longitude: -122.33
  },
  los_angeles = {
    city: "Los Angeles",
    latitude: 34.03,
    longitude: -118.26
  },
  las_vegas = {
    city: "Las Vegas",
    latitude: 36.17,
    longitude: -115.14
  },
  portland = {
    city: "Portland",
    latitude: 45.52,
    longitude: -122.68
  },
  new_york = {
    city: "New York",
    latitude: 40.78,
    longitude: -73.96
  }
]

locations_bay_area = [
  san_francisco = {
    city: "San Francisco",
    latitude: 37.78,
    longitude: -122.41
  },
  oakland = {
    city: "Oakland",
    latitude: 37.83,
    longitude: -122.28
  },
  silicon_valley = {
    city: "Mountain View",
    latitude: 37.42,
    longitude: -122.09
  }
]


100.times do
  new_place = locations.sample
  week_price = weekly_price.sample
  month_price = week_price * 4
  Workspace.create!({
    description: description,
    officetype: type.sample,
    capacity: capacity.sample,
    address: address,
    latitude: new_place[:latitude] + randomize_coords.sample,
    longitude: new_place[:longitude] + randomize_coords.sample,
    price_week: week_price,
    price_month: month_price,
    owner_id: user_ids.sample,
    city: new_place[:city]
    })
end

100.times do
  new_place = locations_bay_area.sample
  week_price = weekly_price.sample
  month_price = week_price * 4
  Workspace.create!({
    description: description,
    officetype: type.sample,
    capacity: capacity.sample,
    address: address,
    latitude: new_place[:latitude] + randomize_coords.sample,
    longitude: new_place[:longitude] + randomize_coords.sample,
    price_week: week_price,
    price_month: month_price,
    owner_id: user_ids.sample,
    city: new_place[:city]
  })
end

#Add images for workspaces.
workspaces = Workspace.all
p workspaces.length

thumbnails = ["http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964435/wwwvzlzjen3oi0u3tdai.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964435/ln72l6mpgkctqgdhlzcz.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964435/dulj8pun3ndrdtfucx6p.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964435/nkcneicomr9bo4ruehif.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964436/c1undyi9zxwhssb0tdil.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964435/ytyhjfcyjm5dq31peywr.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964436/xhxykan00ufzu6xmlyl6.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964436/yiagu4jhvwzrkftyjzdi.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964435/ob8qcn08rsxgpoyq8i8u.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964436/pebcynn7hgkkg4njywzn.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964436/oaieeyrbzoqly869njb7.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964436/xv9soecyo3tbvbcibdhm.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964443/ixenfczluvxrldqexok8.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964436/bt1cgvk7a3lyaloqsc7q.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964437/yg7ffmgvxks4cjqhciub.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964437/zxedrntpkpp9wy5qtksu.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964437/tvizgjzhdolxonwjbatq.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964437/laljt167sy3fmut3nqp8.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964437/ytaqyd6lbsvlrmafrvnc.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964449/mnjc7g8yg5akbaqq8yfe.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964439/kpcxvwzxcctqydo1uazb.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964439/auaegtefmxw80rdwrnlx.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964439/rcqu7zjrkbkz7q6mmgeq.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964439/f6gv3kdnvoxuhrqr04pn.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964441/ml23ezt88e100wpyatju.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964440/blcvxuwkg6px338mte1h.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964455/npwq6yzdqyww8oekng7o.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964440/yy1o4svqm2ua0zik9g2l.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964449/nhnczrvfaaivowds0n4x.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964442/jhfd5psychhvdgjjhpiu.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964442/uihwv7w6sth9dpzxlp77.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964442/a9jzs7vbgoyrph0zeyif.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964442/z4y7u5xmgczcmrs4gb24.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964443/qq3csuvlawcjwjnmbvrj.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964444/aoytv4qsoob5rehqpdnw.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964445/lbulig7puhuxaf2anf3x.png", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964444/w1enjzogog72prklv0bo.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964445/jotnsmvgr8cwwualdjqy.png", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964445/h39hbqhvqjbni7hn3rdr.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964446/k6qiasnixzx0bosjsu5d.png", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964446/fojywvqkzuhtjnwppbaw.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964446/emtw9mazg8aowh4awvfd.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964446/e241jsssidmwzh8y8xhb.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964446/aqikj8fnmpspfwuuz0qp.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964448/rmfjazqw8b135xibpmpm.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964447/j9fcfkpgmaun8ckvvazq.png", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964448/wzynjne200waiahf8ucy.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/c_limit,h_60,w_90/v1461964448/sr5w8c9zhfmglmeixhjg.jpg"]
image_urls = ["http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964435/wwwvzlzjen3oi0u3tdai.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964435/ln72l6mpgkctqgdhlzcz.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964435/dulj8pun3ndrdtfucx6p.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964435/nkcneicomr9bo4ruehif.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964436/c1undyi9zxwhssb0tdil.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964435/ytyhjfcyjm5dq31peywr.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964436/xhxykan00ufzu6xmlyl6.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964436/yiagu4jhvwzrkftyjzdi.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964435/ob8qcn08rsxgpoyq8i8u.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964436/pebcynn7hgkkg4njywzn.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964436/oaieeyrbzoqly869njb7.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964436/xv9soecyo3tbvbcibdhm.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964443/ixenfczluvxrldqexok8.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964436/bt1cgvk7a3lyaloqsc7q.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964437/yg7ffmgvxks4cjqhciub.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964437/zxedrntpkpp9wy5qtksu.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964437/tvizgjzhdolxonwjbatq.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964437/laljt167sy3fmut3nqp8.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964437/ytaqyd6lbsvlrmafrvnc.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964449/mnjc7g8yg5akbaqq8yfe.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964439/kpcxvwzxcctqydo1uazb.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964439/auaegtefmxw80rdwrnlx.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964439/rcqu7zjrkbkz7q6mmgeq.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964439/f6gv3kdnvoxuhrqr04pn.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964441/ml23ezt88e100wpyatju.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964440/blcvxuwkg6px338mte1h.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964455/npwq6yzdqyww8oekng7o.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964440/yy1o4svqm2ua0zik9g2l.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964449/nhnczrvfaaivowds0n4x.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964442/jhfd5psychhvdgjjhpiu.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964442/uihwv7w6sth9dpzxlp77.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964442/a9jzs7vbgoyrph0zeyif.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964442/z4y7u5xmgczcmrs4gb24.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964443/qq3csuvlawcjwjnmbvrj.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964444/aoytv4qsoob5rehqpdnw.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964445/lbulig7puhuxaf2anf3x.png", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964444/w1enjzogog72prklv0bo.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964445/jotnsmvgr8cwwualdjqy.png", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964445/h39hbqhvqjbni7hn3rdr.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964446/k6qiasnixzx0bosjsu5d.png", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964446/fojywvqkzuhtjnwppbaw.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964446/emtw9mazg8aowh4awvfd.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964446/e241jsssidmwzh8y8xhb.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964446/aqikj8fnmpspfwuuz0qp.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964448/rmfjazqw8b135xibpmpm.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964447/j9fcfkpgmaun8ckvvazq.png", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964448/wzynjne200waiahf8ucy.jpg", "http://res.cloudinary.com/dyzqtq32z/image/upload/v1461964448/sr5w8c9zhfmglmeixhjg.jpg"]

workspaces.each do |space|
  3.times do
    WorkspaceImage.create!({workspace_id: space.id, url: image_urls.sample, thumbnail_url: thumbnails.sample})
  end
end
