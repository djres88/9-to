# 9-to

LINK TO LIVE SITE: [9-to][heroku]
* Still trying to work out the DNS pointer thingy.

[heroku]:http://nineto.heroku.com

## I. Minimum Viable Product

9-to is an Airbnb-inspired web application built using Ruby on Rails and React.js. The service helps freelancers and small startups find their ideal office space at flexible terms, without the hassle of signing a lease. By the end of Week 9, the app will satisfy the following criteria:

1. [ ] **Account Registration & Login** (including Guest/Demo Login)
2. [ ] **Seed Data.** Users, owners, listings, reservations, favorites. (For MVP -- see schema.)
3. [ ] **User Features**
  - Browse Workspaces
  - Reserve Workspaces
  - Save "Favorites"
  - Review Workspaces
  - Update account
  - (Bonus) Host ("Owner") Functionality — that is, the ability to add/manage a listing.
  - (Bonus) Messaging between owners/tenants
4. [ ] **Smooth Scrolling & Navigation**. No bugs!
5. [ ] **Hosting on Heroku**
6. [ ] **CSS/UI Style** just like Airbnb. Aim for that first, improve upon it later (if you can).
7. [ ] **Production README**, replacing this README (Reference the [sample production README](https://github.com/appacademy/sample-project-proposal/blob/master/docs/production_readme.md)

## II. Product Goals and Priorities

To expand on item#3 (see above), 9-to users will be able to do the following:
<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

1. Create Accounts
  - [ ] Register
  - [ ] Login
  - [ ] Guest/Demo Login
2. Browse Office Listings
  - [ ] Search Functionality (Search by Location, Dates, Price)
  - [ ] Listings Display (Photo, Price/Day, Owner "Button")
  - [ ] Map API Displays Listings
  - [ ] Available Dates Popup
  - [ ] *Show Ratings*
3. Create Reservations  
  - [ ] Reservation added to user accounts
4. Manage Account
  - [ ] View/update reservations
  - [ ] Write reviews
5. *Add/Manage Listings (owner features)*
  - [ ] bonus
6. *Send messages*
  - [ ] bonus

(Plain text => MVP, *italics* => bonus)

## III. Design Docs
* [View Wireframes][views]
* [React Components][components]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[schema]: ./docs/schema.md

## IV. Implementation Timeline (Hour Estimates = MAX time)

###DAY 1

#### Phase 1: Project Setup and User Accounts (4 Hours)

**Objective:** Create functioning project where users can create accounts and log in/out.
- [x] New Project (9-to) w/ Core Gems
  * gems: pry-rails, better_errors, binding_of_caller, bcrypt (for auth)
- [ ] `User` Model
- [ ] Authentication
- [ ] User Signup/Sign-In Pages (w/o Design)
- [ ] Blank Landing Page @ Sign-In

#### Phase 2: Webpack and First Route (0.5 Hours)
**Objective:** Entry file renders into static_pages#root view.
- [ ] Core node packages
  * npm install webpack, react, react-dom, react-router, babel-core, babel-loader, babel-preset-react, flux
- [ ] StaticPagesController, root.html, root to: "static_pages#root"
- [ ] Frontend Folders (for Flux)
- [ ] Webpack Setup (config file)
- [ ] Entry File Testing: `9-to.jsx`
- [ ] Test that entry file content appears in root's `content` div.

#### Phase 3: Listings Model & Basic API (3 Hours)

**Objective:** APIUtil retrieves/displays listings data.

- [ ] Create `Listing` Model
- [ ] Seed DB w/ Users & Office Spaces
- [ ] Create `ListingsController`. Only `index` and `show` needed at this stage.
- [ ] jBuilder for ListingsIndex & ListingsIndexItem
- [ ] Create `APIUtil`
- [ ] Test that ajax queries retrieve Listings data

#### Phase 4: Reservations Model & Functional API (10 Hours)
- [ ] Create `Reservation` Model



#### Phase 3: API, APIUtil


###DAY 2-3
#### Phase 3: Reservations Model (12 Hours)

**Objective:**

###DAY 3-4
### Phase 4: Flux Architecture and Router (1.5 days)

**Objective:**


### Phase 4:

**Objective:** Existing pages (including singup/signin) will look good.




### Phase 5:

**Objective:**


### Phase 6:

**Objective:**


### Phase 7:

**Objective:**


### Phase 8: Styling Cleanup and Seeding (1 day)

**Objective:**


### Bonus Features (TBD)
