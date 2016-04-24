# FresherNote

[Heroku link]:[heroku]

[heroku]: http://nine-to.heroku.com

## Minimum Viable Product

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

## Product Goals and Priorities

To expand on item#3 (see above), 9-to users will be able to do the following:
<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->
Note: A * indicates bonus. Everything else falls under MVP.
1. [ ] Create Accounts
  - [ ] Register
  - [ ] Login
  - [ ] Guest/Demo Login
2. [ ] Browse Office Listings
  - [ ] Search Functionality (Search by Location, Dates, Price)
  - [ ] Listings Display (Photo, Price/Day, Owner "Button")
  - [ ] Map API Displays Listings
  - [ ] Available Dates Popup
  - [ ] *Show Ratings*
3. [ ] Create Reservations  
4. [ ] Manage Account
  - [ ] View/update reservations
  - [ ] Write reviews
5. [ ] *Add/Manage Listings (owner features)*
6. [ ] *Send messages*

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Notes Model, API, and basic APIUtil (1.5 days)

**Objective:** Notes can be created, read, edited and destroyed through
the API.

- [ ] create `Note` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for notes (`NotesController`)
- [ ] jBuilder views for notes
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Notes can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each note component, building out the flux loop as needed.
  - [ ] `NotesIndex`
  - [ ] `NoteIndexItem`
  - [ ] `NoteForm`
- [ ] save Notes to the DB when the form loses focus or is left idle
  after editing.

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Notebooks (1 day)

**Objective:** Notes belong to Notebooks, and can be viewed by notebook.

- [ ] create `Notebook` model
- build out API, Flux loop, and components for:
  - [ ] Notebook CRUD
  - [ ] adding notes requires a notebook
  - [ ] moving notes to a different notebook
  - [ ] viewing notes by notebook
- Use CSS to style new views

Phase 3 adds organization to the Notes. Notes belong to a Notebook,
which has its own `Index` view.

### Phase 6: Tags (1.5 days)

**Objective:** Notes can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for notebook
  - [ ] adding tags to notebook
  - [ ] creating tags while adding to notebooks
  - [ ] searching notebooks by tag
- [ ] Style new elements

### Phase 7: Allow Complex Styling in Notes (0.5 days)

**objective:** Enable complex styling of notes.

- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Search through notes for blocks of text
- [ ] Pagination / infinite scroll for Notes Index
- [ ] Set reminders on notes
- [ ] Changelogs for Notes
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
