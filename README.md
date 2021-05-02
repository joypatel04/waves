<h1 align="center">
    Waves
</h1>

RNBoiler is a minimal React Native Boilerplate with the following already setup.

- React Redux + Rematch
- react-navigation
- react-native-elements
- react-native-vector-icons

Change into the repository and install node deps and pod deps

```
yarn install
npx react-native run-anroid

npx pod-install for ios
npx react-native run-ios
```

## Screens

- Posts screen
  - Retreive all posts from `https://jsonplaceholder.typicode.com/posts/`
  - Retreive all users from `https://jsonplaceholder.typicode.com/users/`
  - Rettrive all comments from `https://jsonplaceholder.typicode.com/comments/`
  - Combine all data and added few dummy properties to support UI
  - User can give many waves to any post (Data will be updated on Store for Particular Session)
  - User can Bookmark particular post and it will be displayed in Bookmark Screen
  - User can Bookmark/Unbookmark posts
  - User can search thorugh List of Posts based on User's `name, username, title, body`
- Bookmark/Save Posts screen

  - If you save posts and go offline and launch the app data will be still visible since it's persisted.
  - User can search thorugh List of Posts based on User `name, username, title, body`
  - User can Bookmark/Unbookmark posts

- Profile screen

  - Profile screen shows a dummy profile view with Folloing users count
  - All Retreive users are treated as following user
  - User can see all users list by clicking on following
  - All social icons are linked appropriately to my profile.
  - User can write their own wave/post/story from profile screen
  - All my post data is cached and persisted using Asyncstorange

- List of Following users screen

  - User can email and browse through the website of any following users

- Write story
  - Simple screen for user to enter `Story Title` and `Your Story` and Post it
  - My Post will show up pn Profile screen
  - All data is cached and persisted using Asyncstorange
