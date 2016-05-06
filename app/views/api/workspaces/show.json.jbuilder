json.extract! @workspace, :id, :description, :capacity, :city, :price_week, :price_month, :latitude, :longitude, :address, :officetype, :main_photo_url
json.owner_username @owner.username
json.reservations @reservations
