Note: I could use some help with deciding what my components are/where they go. I've reviewed the "How to Think in React" readings, the sample wireframes, and our projects from week 7, but I'm having a little trouble applying those to a larger-scale product. What *is/is not* a component, in simple terms? (I've tried googling it, too; few straight answers out there.)

# View Wireframes

## Homepage (Root)
* **Needed Components**: NavBar | SearchIndexRoot

## New User
* **Needed Components**: NewUserForm
![New User Form]

## New Session
* **Needed Components**: NewSessionForm
![New Session Form]

## Browse Listings
* **Needed Components**: SearchIndex | ListingsIndex > ListingsIndexItem, Map (Children)
![Browse Listings]

## View Listing Details
* **Needed Components**: ListingDetail > FavoritesToggle, ReservationForm (Children)
![View Listing Details]

[New User Form]: ./wireframes/register-new-user.png
[New Session Form]: ./wireframes/login-returning-user.png
[Browse Listings]: ./wireframes/browse-listings.png
[View Listing Details]: ./wireframes/listing-detail.png
