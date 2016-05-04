# == Schema Information
#
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
#

class Workspace < ActiveRecord::Base
  validates :description, :latitude, :longitude, :price_week, :owner_id, :city, :capacity, presence: true;

  belongs_to :owner,
   class_name: "User",
   foreign_key: :owner_id

  def self.in_map_bounds(bounds)
    self.where("latitude < ?", bounds[:NE][:lat])
        .where("latitude > ?", bounds[:SW][:lat])
        .where("longitude > ?", bounds[:SW][:lng])
        .where("longitude > ?", bounds[:NE][:lng])
  end


  def self.filter_params(options)
    self.where("capacity > ?", options[:capacity])
        # TODO: WILL THIS WORK???
        .where("office-type IN (?, ?, ?)", options[:office_types].join(",")
        .where("price => ?", options[:price][:low])
        .where("price <= ?", options[:price][:high])
  end

  # TODO: Gonna be difficult to link this to reservations...
  # def self.date_params(dates)
  #
  # end

end
