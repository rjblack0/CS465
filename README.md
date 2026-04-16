# CS465

# Full Stack Web Application – Final Reflection (CS-465)
This project represents the final iteration of a full stack web application built using the MEAN stack (MongoDB, Express, Angular, and Node.js). The application includes both customer-facing features and an administrative side with secure authentication.

As I worked through the course material and study guide, I could feel how to the focus shifted from just getting things to work, to understanding how all the pieces actually fit together. This project ties together everything covered throughout the course into a single, functional system.

## Architecture
The Express-based HTML approach was relatively straightforward, with the server handling most of the logic and rendering full pages for each request. It works, but it’s not very dynamic and feels limited compared to modern applications.

The Angular SPA, on the other hand, shifts most of the interaction to the client side. Instead of reloading pages, it updates content dynamically using components and routing. This made the application feel more responsive, and it also forced me to think more carefully about how the frontend and backend communicate.

MongoDB was used as the backend database because of its flexibility. Since it stores data in a JSON, it fits naturally with a JavaScript stack and makes it easier to handle changes without constantly restructuring the database .

## Functionality

One that I had to really get the hang of with this project was understanding how JSON is used. JSON differs from JavaScript because it is is simply a data format, but it is what allows the frontend and backend to actually talk to each other. The Angular frontend sends requests, the Express backend processes them, and MongoDB stores the data. JSON is what moves between those layers.

There were a few points during the project where I had to refactor code to make things cleaner or more efficient. Examples are organizing API routes better and breaking the frontend into reusable components instead of repeating the same logic. That alone made the code easier to manage and less frustrating to work with.

Reusable UI components ended up being one of the more useful parts of Angular. Once something worked, it could be reused instead of rewritten, which saved time and made the application more consistent overall.

## Testing

Testing ended up being more involved than just checking if the UI looked right. It required verifying that API endpoints worked correctly and that data was being handled properly.

The app we built uses standard HTTP methods like GET and PUT, and each endpoint had to be tested to make sure it returned the expected results. Then adding authentication made things more complicated. Securing admin access meant verifying credentials and restricting certain routes, which added another layer to test. It wasn’t difficult conceptually, but it did require more attention to detail to make sure everything worked as intended.

## Reflection
This course was easy to follow but difficult to grasp all of the concepts at a conceptual level. I am much more of a hands-on learner, so it was nice and beneficial to actually build something that demonstrated how they all worked together, instead of working with isolated concepts

I gained experience with:

- Building APIs using Express and Node.js
- Working with MongoDB as a NoSQL database
- Developing a frontend with Angular
- Implementing basic authentication and securing routes
- Structuring a full stack application in a way that makes sense

One thing that stood out is how practical and versatile full stack JavaScript development is. Being able to use the same language across the entire application simplified a lot of the process and should be very beneficial to my future career trajectory.
