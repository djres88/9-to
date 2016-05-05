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

require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
