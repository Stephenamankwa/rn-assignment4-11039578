Job Listings App

This is a React Native application that showcases a list of job opportunities, categorized into "Featured Jobs" and "Popular Jobs". 
Components
1. The root component that manages the navigation between the login screen and the homepage screen. It maintains the state for the current screen and user data.
Props:
•	None
2. LoginScreen
A screen component for user login. It includes inputs for the user to enter their name and email. Upon successful login, it navigates to the HomepageScreen.
Props:
•	navigate: Function to switch screens and pass user data.
3. HomepageScreen
The main screen of the app, displaying user information and lists of featured and popular jobs. It uses the JobCard and PopularJobCard components to render job details.
Props:
•	name: The name of the logged-in user.
•	email: The email of the logged-in user.
•	featuredJobs: An array of job objects to be displayed in the "Featured Jobs" section.
•	popularJobs: An array of job objects to be displayed in the "Popular Jobs" section.
App![1](https://github.com/Stephenamankwa/rn-assignment4-11039578/assets/160183785/bee99dc7-3dde-4ed5-a328-b51156679192)
![2](https://github.com/Stephenamankwa/rn-assignment4-11039578/assets/160183785/555a9681-7785-4845-ae75-13d66b115373)

