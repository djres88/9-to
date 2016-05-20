# == Schema Information
#
# Table name: reservations
#
#  id           :integer          not null, primary key
#  workspace_id :integer          not null
#  user_id      :integer          not null
#  start_date   :date             not null
#  end_date     :date             not null
#  status       :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Reservation < ActiveRecord::Base
  validates :workspace_id, :user_id, :start_date, :end_date, presence: true

  belongs_to :workspace
  belongs_to :user
end
