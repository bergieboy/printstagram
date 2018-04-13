# Welcome to Printstagram!

Prinstagram is a photo sharing social platform inspired by instagram. Share you experiences through photography and connect with friends to follow their journeys. I encourage you to to share your creativity to inspire and connect with others in the Prinstagram community.

### Core Values

 1. Community
 2. Simplicity
 3. Creativity

[Printstagram Design Documents](https://github.com/bergieboy/printstagram/wiki)


## Key Features

Instagram allows you to share your experiences through photos.

### User Authentication
 - Users can create accounts and log into their existing accounts.
 - A user can use a demo login option if they would experience the application prior to signing up.

### Add Photos
- Users can add and remove photos from their profile.
- Photos that users upload will be displayed on their personal profile page and the public feed.
- While on a users profile, you can click on one of their photos to display a higher resolution version on it's show page.
-
### Like Photos
- Users can like and unlike any photo on the site.
- The heart icon turns from hollow with a grey border to solid red when the current user likes a photo.
- The like count is displayed below each photo.

### Comment on Photos
- Users can add and remove comments to any photo on the site.
- Users can only remove comments that they created.
- Comments are displayed below each photo on the feed and the photo show page.
- Body of comments are displayed adjacent to the author's username.
- Comment button redirects to comment input. see the following code:

	    getFocus() {
	        document.getElementById("comment-input").focus();
	    }
      <button
        ref={(input)=> {commentInput = input;}}
        className="far fa-comment"
        onClick={()=>this.getFocus()}/>  

### User Profile
- A users profile displays all of their photos.
- Users can edit their profile information from their page:
	- Profile Photo
	- Username
	- Name
	- Bio
- Users stats are displayed on their profile page:
	- Photo Count
	- Followers
	- Following

### Feed
- Feed displays all users photos.
- Users can like and comment on other users photos
- Users can navigate to other users profiles by clicking that users avatar above their photo.
- The current user's and 'Featured' user's avatars are displayed as stationary links, adjacent to the photo feed.


## Technologies

### Ruby on Rails
Ruby on Rails was chosen as the back-end framework due to it's out-of-the box tools and support with database communication, schema migrations, caching, API mode, security defaults, and RESTful architecture. In addition to these, a very large collection of third party components (gems) are publicly available to engineers and can be used to aid in development of web applications. Rails also supports frontend tools, such as Webpack and SCSS, which can be used to process javascript and css.

### React
Printstagram is a single-page with one backend route that renders HTML. As users interact with the site, database requests send and receive information. React is able to take this information and update only the affected portions of the page. This allows for specific pieces of information to change be updated without having to update every piece of information on the page. Advantages of using React include:

- Support of JSX syntax, making code more readable.
- Components are the basis of React. Each component manages it's own logic and rendering. These components can be reused in other components, which creates a easily maintainable and scalable developing environment.
- React utilizes unidirectional data flow, which means that the UI interface is only affected by changes in the database.

### Redux
Redux was used to manage the front-end state or the 'View Layer" of Printstagram. Redux is a JavaScript framework that allows for the state of your app to be stored in one single location, typically referred to as the 'store'. Redux is particularly useful when multiple components require the same data, but aren't necessarily related.  Access to the store can be limited to only the required data for a specific component.

## Future Directives

Jumping forward into Printstagram's future, I plan to continue to add the core features which have come to define instagram. Notifications, hashtags, search, and messaging are all functionalities that are intended to be implemented into the web service in the near future.
