# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160508224057) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "reservations", force: :cascade do |t|
    t.integer  "workspace_id", null: false
    t.integer  "user_id",      null: false
    t.date     "start_date",   null: false
    t.date     "end_date",     null: false
    t.string   "status"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "reservations", ["user_id"], name: "index_reservations_on_user_id", using: :btree
  add_index "reservations", ["workspace_id"], name: "index_reservations_on_workspace_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "avatar"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

  create_table "workspace_images", force: :cascade do |t|
    t.string   "url",           null: false
    t.integer  "workspace_id",  null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "thumbnail_url", null: false
  end

  add_index "workspace_images", ["workspace_id"], name: "index_workspace_images_on_workspace_id", using: :btree

  create_table "workspaces", force: :cascade do |t|
    t.string   "description",    null: false
    t.integer  "capacity",       null: false
    t.string   "address",        null: false
    t.float    "latitude",       null: false
    t.float    "longitude",      null: false
    t.integer  "price_week",     null: false
    t.integer  "price_month",    null: false
    t.string   "owner_id",       null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.string   "city"
    t.string   "officetype"
    t.string   "main_photo_url"
    t.string   "thumbnail_url"
  end

  add_index "workspaces", ["owner_id"], name: "index_workspaces_on_owner_id", using: :btree

end
