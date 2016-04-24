# Schema Information

## users (hm reservations, favorites, listings)
* How do I decide between having a single "users" table (where some users are also owners) vs. having a separate "owners" table? Some considerations:
  - For this specific product, tenants/users of office space are unlikely to be owners (and vice versa). There's a conceptual distinction, and some reason to separate.
  - However, Airbnb hosts *are* likely to be guests. It'd be sucky UI to force hosts to create a separate account.
  - I think it can work either way. Help me decide?

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## listings (bt owner)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
description | string    | not null
type        | string    | not null
capacity    | integer   | not null
address     | integer   | not null
latitude    | float     | not null
longitude   | float     | not null
price_week  | integer   | not null
price_month | integer   | not null
photos_url  | ???       | use pokemon schema as reference
owner_id    | integer   | not null, foreign key (references users), indexed

## reservations (bt tenant, owner)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
start_date  | string    | not null
end_date    | string    | not null
status      | string    | not null, IN ("Pending, Completed, Cancelled")
rating      | integer   |
review      | integer   |
listing_id  | integer   | not null, foreign key (references listings), indexed
tenant_id   | integer   | not null, foreign key (references users), indexed
owner_id    | integer   | not null, foreign key (references users), indexed

* Q: We could get the owner_id through the listing_id, but is it better to throw in the foreign key here? Will that make for faster querying, since we'll be showing the owner kinda frequently in the components?


## favorites (bt user)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
listing_id  | integer   | not null, foreign key (references listings), indexed
user_id     | integer   | not null, foreign key (references users), indexed
