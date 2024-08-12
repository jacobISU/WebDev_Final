# WebDev_Final

This project was made as a final project for a UI class.  
It is a motorcycle-themed site that uses React.js for the frontend and MongoDB for the backend.

## Running Site Locally

### Backend
Load the `motorcycle.json` file to MongoDB. I use Compass and just import the JSON file directly to the database.  
Next, make sure the `backend.js` file has the same matching `url`, `dbName`, and `collection` name. Mine are `"mongodb://localhost:27017/"`, `"finaldata"`, `"motorcycle_catalog"`.  
Enter `cd backend` and then `node backend.js` to run. Might require installing Node.js if you don't have it.

### Frontend
The frontend requires no configuration.  
`cd frontend` and then `npm start` to start the React app, which will launch the site.
