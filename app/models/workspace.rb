# == Schema Information
#
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
#  city        :string
#

class Workspace < ActiveRecord::Base
  validates :description, :latitude, :longitude, :price_week, :owner_id, :city, presence: true;

  belongs_to :owner,
   class_name: "User",
   foreign_key: :owner_id
end
