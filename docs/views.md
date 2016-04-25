NOTE: I could use a quick chat to confirm what my components should be/where they go. I've reviewed the "How to Think in React" readings, the sample wireframes, and our projects from week 7, but I'm not sure if I'm correctly applying those principles now that we're working with a larger-scale project.

When we're dealing with different views/routes, how should I decide when to create a new component as opposed to adjusting/recycling an existing one? For example, the design calls for a search form at the root and a *kinda different* search functionality at the ListingsIndex. I've tried Googling this stuff, too; not finding many straight answers. My specific Qs below.

# View Wireframes

## 1. Homepage (Root)
**Needed Components**: NavBar | SearchMain?
Q: Is SearchMain necessary?
----


## 2. New User
**Needed Components**: NewUserForm
----

![New User Form]

## 3. New Session
**Needed Components**: NewSessionForm
----

![New Session Form]

## 4. Browse Listings
**Needed Components**: SearchIndex | ListingsIndex (parent) > ListingsIndexItem (child), Map (child)
----

![Browse Listings]

## 5. View Listing Details
**Needed Components**: ListingDetail (parent) > FavoritesToggle (child), ReservationForm (child)
  - Q: Could use clarification, but I think this is the right structure. Both FavesToggle and ResForm could use the props from ListingDetail.
----

![View Listing Details]

[New User Form]: ./wireframes/register-new-user.png
[New Session Form]: ./wireframes/login-returning-user.png
[Browse Listings]: ./wireframes/browse-listings.png
[View Listing Details]: ./wireframes/listing-detail.png
