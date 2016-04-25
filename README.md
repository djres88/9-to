# 9-to

LINK TO LIVE SITE: [9-to][heroku]
* Still trying to work out the DNS pointer thingy.

[heroku]:http://nineto.heroku.com

## I. Minimum Viable Product

9-to is an Airbnb-inspired web application built using Ruby on Rails and React.js. The service helps freelancers and small startups find their ideal office space at flexible terms, without the hassle of signing a lease. By the end of Week 9, the app will satisfy the following criteria:

1. [ ] **Account Registration & Login** (including Guest/Demo Login)
2. [ ] **Seed Data.** Users, owners, listings, reservations, favorites. (For MVP -- see schema.)
3. [ ] **User Features**
  - Browse Workspaces with search/map/combination of both
  - Reserve Workspaces
  - View & Update Reservations
  - (Bonus) Save "Favorites"
  - (Bonus) Review Workspaces
  - (Bonus) Update account
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

### Tues. 4/25

#### Phase 1: Project Setup and User Accounts -- 2.5 Hours

**Objective:** Create functioning project where users can create accounts and log in/out.
- [x] New Project (9-to) w/ Core Gems
  * gems: pry-rails, better_errors, binding_of_caller, bcrypt (for auth)
- [x] Link up the app to Heroku
- [ ] BONUS: point custom url to Heroku. Do this once everything else is finished.
- [ ] `User` Model
- [ ] Authentication
- [ ] User Signup/Sign-In Pages (w/o Design)
- [ ] Blank Landing Page @ Sign-In
- [ ] Seed DB w/ Users

#### Phase 2: Webpack and First Route -- 0.5 Hours
**Objective:** Entry file renders into static_pages#root view.
- [ ] Core node packages
  * npm install webpack, react, react-dom, react-router, babel-core, babel-loader, babel-preset-react, flux
- [ ] StaticPagesController, root.html, root to: "static_pages#root"
- [ ] Frontend Folders (for Flux):
```
frontend
  + actions
  + components // all React components, both views and controller-views
  + constants
  + dispatcher
  + stores
  + util
  9_to.jsx
```
- [ ] Webpack Setup (config file)
- [ ] Entry File Testing: `9-to.jsx`
- [ ] Test that entry file content appears in root's `content` div.

### Tues. 4/25 - Weds 4/26

#### Phase 3: Workspace & Web API/Flux Setup -- 14 Hours

**Objective:** Can view workspace data through the API.

##### A. Listings
- [ ] Create `Workspace` Model
- [ ] Seed DB w/ Workspaces
  * **OPEN Q**: How to add images? Reference pokemon project?
- [ ] Create `WorkspacesController`. Only `index` and `show` needed at this stage.
- [ ] Add routes (under api namespace)
- [ ] jBuilder for `workspace#index` and `workspace#show`

##### B. Web API/Flux Setup
- [ ] Dispatcher
- [ ] WorkspaceStore
- [ ] Create `APIUtil` to fetch workspace(s)
- [ ] Constants, ServerActions, ClientActions
- [ ] Test (in dev tools) that you can get data thru API.
- [ ] WorkspaceIndex component
- [ ] WorkspaceIndexItem component
- [ ] Add Workspace paths to React Router

##### C. Basic Styling
- [ ] Position Workspaces on browse page (just get them to show up in a div of the right size)

### Thurs. 4/27 - Fri. 4/28

#### Phase 4: `Search` & `Map` Components -- 16 Hours
**Objective:** Can view/search for listings through the user interface.
##### A) Search Form
- [ ] Create `Search` component

##### B) Search/Map Combo
- [ ] Create `Map` component
- [ ] Review google maps documentation; need API key
- [ ] Render Map as child of `Search`

##### C) Flux loop for both
- [ ] searchStore(s) --> Dispatcher --> Actions --> API

### Sat. 4/29

#### Phase 5: Reservations & User Account (12 Hours)
**Objective:** User can reserve a workspace.
- [ ] Ask for guidance w/ fleshing out how this would work. By now we'll have moved beyond searching for pokemon...


### Sun. 4/30 - Tues. 5/3

#### Phase 6: Design & UI/UX (24 Hours)
**Objective:**
- [ ] Make everything look according to wireframe.
- [ ] Crush bugs. No mercy.
- [ ] Ask people to review for bugs. Then crush more bugs.

#### Bonus Features.
- [ ] User Favorites
- [ ] Workspace Reviews
- [ ] Adding/removing listings (as owner)
- [ ] Listing Ratings
**Objective:**
