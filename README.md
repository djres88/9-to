# 9-to

LINK TO LIVE SITE: [9-to][heroku]

[heroku]:http://nineto.heroku.com

9-to is an Airbnb-inspired web application built using Ruby on Rails and React.js. The service helps freelancers and small startups find temporary office space. Get to work without a lease!

## I. Features & Implementation

### What is 9-to?
9-to is a single-page app: all content is delivered on one static page through React and programming and magic. (Happy to discuss the magic.)

Users may sign up (or login) on the homepage through a handy modal. Everyone can search for spaces without logging in/signing up, but similar to Airbnb, they will be prompted to sign up when attempting to make a reservation. Throughout, the app listens to the session store and allows users to do things/see content based on a call to UserStore.currentUser(), which pings the db for info about the user's session...

![login]

or, as the case may be, signs up a user.

### Homepage Search
The homepage lets users search using a google autocomplete api:
![home_search]

I prefer the simple search, no dates needed, to Airbnb's multiple-field homepage form. Let users see results as quickly as possible, I say.

### Browse Workspaces
The search results page offers a Google map API as well as interactive search features. Results are updated and shown 18 at a time (again á la Airbnb — willing to trust their research on this). You can use several features to filter results:

![workspace_idx]

1. Drag the Map:
Drag the map and watch the search results update to the map's new bounds. (The map's markers update, too.)

2. Reset the Map with Search:
Enter a new location in the autocomplete bar to re-center the map (and update the results).

3. Capacity Dropdown:
Filter by how many people need workspace:

4. Choose Your Type:
Filter by type of space. **Note:** By default, all spaces are shown when you unselect all the checkboxes. Better than showing nothing.

5. Be Price Savvy:
Filter results by price using the handy ReactSlider.

Choose a workspace by clicking on a marker or on the workspace image.

### Review Workspace Details & Book
See details for the workspace on the details page.

![workspace_detail]

![workspace_detail_res]

### Future Implementation
[ ] View reservations in an "Account" page. Reservations are already persisted to the DB (and retrieved in some components), so this is really just a matter of (a) styling the account page and (b) attaching retrieving contents using a combo of already-existing props/db queries.
[ ] Host features: offer a workspace, delete your workspace, etc.
[ ] Block out reserved dates. This would be fairly involved, realistically, since each space would need to track its reservations relative to its capacity for any given date.

[home_search]: ./docs/images/home_search.jpg
[login]: ./docs/images/login.jpg
[workspace_idx]: ./docs/images/workspace_idx2.jpg
[workspace_detail]: ./docs/images/workspace_detail.jpg
[workspace_detail_res]: ./docs/images/workspace_detail_res.jpg
