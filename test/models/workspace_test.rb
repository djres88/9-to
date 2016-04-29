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

require 'test_helper'

class WorkspaceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
