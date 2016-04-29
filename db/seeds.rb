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

10.times do
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
    photos_url: photos_url,
    owner_id: user_ids.sample,
    city: new_place[:city]
    })
end

10.times do
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
    photos_url: photos_url,
    owner_id: user_ids.sample,
    city: new_place[:city]
  })
end
